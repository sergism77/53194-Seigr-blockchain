"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const walletInput_1 = __importDefault(require("./walletInput"));
const utils_1 = require("../utils");
const wallet_1 = __importDefault(require("./wallet"));
const config_1 = require("../config");
describe('WalletInput', () => {
    let walletInput;
    let wallet;
    let amount;
    beforeEach(() => {
        wallet = new wallet_1.default();
        amount = 50;
        walletInput = new walletInput_1.default({
            wallet,
            amount,
        });
    });
    it('has a `timestamp`', () => {
        expect(walletInput.timestamp).not.toEqual(undefined);
    });
    it('has an `amount`', () => {
        expect(walletInput.amount).toEqual(amount);
    });
    it('has an `address` equal to the `wallet` publicKey', () => {
        expect(walletInput.address).toEqual(wallet.publicKey);
    });
    it('signs the input', () => {
        expect((0, utils_1.verifySignature)({
            publicKey: wallet.publicKey,
            data: walletInput.outputMap,
            signature: walletInput.signature,
        })).toBe(true);
    });
    describe('static rewardTransaction()', () => {
        let rewardTransaction;
        let minerWallet;
        beforeEach(() => {
            minerWallet = new wallet_1.default();
            rewardTransaction = walletInput_1.default.rewardTransaction({
                minerWallet,
            });
        });
        it('creates a transaction with the reward input', () => {
            expect(rewardTransaction.input).toEqual(config_1.REWARD_INPUT);
        });
        it('creates one transaction for the miner with the `MINING_REWARD`', () => {
            expect(rewardTransaction.outputMap[minerWallet.publicKey]).toEqual(config_1.MINING_REWARD);
        });
    });
    describe('when the transaction input signature is invalid', () => {
        it('returns false and logs an error', () => {
            walletInput.signature = new wallet_1.default().sign('foo');
            expect(walletInput_1.default.validTransaction(walletInput)).toBe(false);
            expect(errorMock).toHaveBeenCalled();
        });
    });
    describe('when the transaction input signature is valid', () => {
        it('returns true', () => {
            expect(walletInput_1.default.validTransaction(walletInput)).toBe(true);
        });
    });
    describe('update()', () => {
        let originalSignature;
        let originalSenderOutput;
        let nextRecipient;
        let nextAmount;
        describe('and the amount is invalid', () => {
            it('throws an error', () => {
                expect(() => {
                    walletInput.update({
                        senderWallet: wallet,
                        recipient: 'foo',
                        amount: 999999,
                    });
                }).toThrow('Amount exceeds balance');
            });
        });
        describe('and the amount is valid', () => {
            beforeEach(() => {
                originalSignature = walletInput.signature;
                originalSenderOutput = walletInput.outputMap[wallet.publicKey];
                nextRecipient = 'next-recipient';
                nextAmount = 50;
                walletInput.update({
                    senderWallet: wallet,
                    recipient: nextRecipient,
                    amount: nextAmount,
                });
            });
            it('outputs the amount to the next recipient', () => {
                expect(walletInput.outputMap[nextRecipient]).toEqual(nextAmount);
            });
            it('subtracts the amount from the original sender output amount', () => {
                expect(walletInput.outputMap[wallet.publicKey]).toEqual(originalSenderOutput - nextAmount);
            });
            it('maintains a total output that matches the input amount', () => {
                expect(Object.values(walletInput.outputMap).reduce((total, outputAmount) => total + outputAmount)).toEqual(walletInput.input.amount);
            });
            it('re-signs the transaction', () => {
                expect(walletInput.signature).not.toEqual(originalSignature);
            });
            describe('and another update for the same recipient', () => {
                let addedAmount;
                beforeEach(() => {
                    addedAmount = 80;
                    walletInput.update({
                        senderWallet: wallet,
                        recipient: nextRecipient,
                        amount: addedAmount,
                    });
                });
                it('adds to the recipient amount', () => {
                    expect(walletInput.outputMap[nextRecipient]).toEqual(nextAmount + addedAmount);
                });
                it('subtracts the amount from the original sender output amount', () => {
                    expect(walletInput.outputMap[wallet.publicKey]).toEqual(originalSenderOutput - nextAmount - addedAmount);
                });
            });
        });
    });
    describe('rewardTransaction()', () => {
        let rewardTransaction;
        let minerWallet;
        beforeEach(() => {
            minerWallet = new wallet_1.default();
            rewardTransaction = walletInput_1.default.rewardTransaction({
                minerWallet,
            });
        });
        it('creates a transaction with the reward input', () => {
            expect(rewardTransaction.input).toEqual(config_1.REWARD_INPUT);
        });
        it('creates one transaction for the miner with the `MINING_REWARD`', () => {
            expect(rewardTransaction.outputMap[minerWallet.publicKey]).toEqual(config_1.MINING_REWARD);
        });
    });
    describe('validTransaction()', () => {
        let errorMock;
        beforeEach(() => {
            errorMock = jest.fn();
            global.console.error = errorMock;
        });
        describe('when the transaction is valid', () => {
            it('returns true', () => {
                expect(walletInput_1.default.validTransaction(walletInput)).toBe(true);
            });
        });
        describe('when the transaction is invalid', () => {
            describe('and a transaction outputMap value is invalid', () => {
                it('returns false and logs an error', () => {
                    walletInput.outputMap[wallet.publicKey] = 999999;
                    expect(walletInput_1.default.validTransaction(walletInput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });
            describe('and the transaction input signature is invalid', () => {
                it('returns false and logs an error', () => {
                    walletInput.signature = new wallet_1.default().sign('foo');
                    expect(walletInput_1.default.validTransaction(walletInput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });
        });
    });
});
module.exports = walletInput_1.default;
