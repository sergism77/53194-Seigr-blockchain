'use strict';

const WalletInput = require('./walletInput');
const { verifySignature } = require('../utils');
const Wallet = require('./wallet');
const { REWARD_INPUT, MINING_REWARD } = require('../config');

describe('WalletInput', () => {
    let walletInput, wallet, amount;

    beforeEach(() => {
        wallet = new Wallet();
        amount = 50;

        walletInput = new WalletInput({
            wallet,
            amount
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
        expect(
            verifySignature({
                publicKey: wallet.publicKey,
                data: walletInput.outputMap,
                signature: walletInput.signature
            })
        ).toBe(true);
    });

    describe('static rewardTransaction()', () => {
        let rewardTransaction, minerWallet;

        beforeEach(() => {
            minerWallet = new Wallet();
            rewardTransaction = WalletInput.rewardTransaction({
                minerWallet
            });
        });

        it('creates a transaction with the reward input', () => {
            expect(rewardTransaction.input).toEqual(REWARD_INPUT);
        });

        it('creates one transaction for the miner with the `MINING_REWARD`', () => {
            expect(rewardTransaction.outputMap[minerWallet.publicKey]).toEqual(
                MINING_REWARD
            );
        });

    describe('when the transaction input signature is invalid', () => {
        it('returns false and logs an error', () => {
            walletInput.signature = new Wallet().sign('foo');

            expect(WalletInput.validTransaction(walletInput)).toBe(false);
            expect(errorMock).toHaveBeenCalled();
        }
        );
    }
    );

    describe('when the transaction input signature is valid', () => {
        it('returns true', () => {
            expect(WalletInput.validTransaction(walletInput)).toBe(true);
        }
        );
    }
    );

    describe('update()', () => {
        let originalSignature, originalSenderOutput, nextRecipient, nextAmount;

        describe('and the amount is invalid', () => {
            it('throws an error', () => {
                expect(() => {
                    walletInput.update({
                        senderWallet: wallet,
                        recipient: 'foo',
                        amount: 999999
                    });
                }).toThrow('Amount exceeds balance');
            }
            );
        }
        );

        describe('and the amount is valid', () => {
            beforeEach(() => {
                originalSignature = walletInput.signature;
                originalSenderOutput = walletInput.outputMap[wallet.publicKey];
                nextRecipient = 'next-recipient';
                nextAmount = 50;

                walletInput.update({
                    senderWallet: wallet,
                    recipient: nextRecipient,
                    amount: nextAmount
                });
            });

            it('outputs the amount to the next recipient', () => {
                expect(walletInput.outputMap[nextRecipient]).toEqual(nextAmount);
            });

            it('subtracts the amount from the original sender output amount', () => {
                expect(walletInput.outputMap[wallet.publicKey]).toEqual(
                    originalSenderOutput - nextAmount
                );
            });

            it('maintains a total output that matches the input amount', () => {
                expect(
                    Object.values(walletInput.outputMap).reduce(
                        (total, outputAmount) => total + outputAmount
                    )
                ).toEqual(walletInput.input.amount);
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
                        amount: addedAmount
                    });
                });

                it('adds to the recipient amount', () => {
                    expect(walletInput.outputMap[nextRecipient]).toEqual(
                        nextAmount + addedAmount
                    );
                });

                it('subtracts the amount from the original sender output amount', () => {
                    expect(walletInput.outputMap[wallet.publicKey]).toEqual(
                        originalSenderOutput - nextAmount - addedAmount
                    );
                });
            });
        });
    }
    );

    describe('rewardTransaction()', () => {
        let rewardTransaction, minerWallet;

        beforeEach(() => {
            minerWallet = new Wallet();
            rewardTransaction = WalletInput.rewardTransaction({
                minerWallet
            });
        });

        it('creates a transaction with the reward input', () => {
            expect(rewardTransaction.input).toEqual(REWARD_INPUT);
        });

        it('creates one transaction for the miner with the `MINING_REWARD`', () => {
            expect(rewardTransaction.outputMap[minerWallet.publicKey]).toEqual(
                MINING_REWARD
            );
        });
    }
    );

    describe('validTransaction()', () => {
        let errorMock;

        beforeEach(() => {
            errorMock = jest.fn();

            global.console.error = errorMock;
        });

        describe('when the transaction is valid', () => {
            it('returns true', () => {
                expect(WalletInput.validTransaction(walletInput)).toBe(true);
            });
        });

        describe('when the transaction is invalid', () => {
            describe('and a transaction outputMap value is invalid', () => {
                it('returns false and logs an error', () => {
                    walletInput.outputMap[wallet.publicKey] = 999999;

                    expect(WalletInput.validTransaction(walletInput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });

            describe('and the transaction input signature is invalid', () => {
                it('returns false and logs an error', () => {
                    walletInput.signature = new Wallet().sign('foo');

                    expect(WalletInput.validTransaction(walletInput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });
        });
    }
    );

    describe('static validTransaction()', () => {
        let errorMock;

        beforeEach(() => {
            errorMock = jest.fn();

            global.console.error = errorMock;
        });

        describe('when the transaction is valid', () => {
            it('returns true', () => {
                expect(WalletInput.validTransaction(walletInput)).toBe(true);
            });
        });

        describe('when the transaction is invalid', () => {
            describe('and a transaction outputMap value is invalid', () => {
                it('returns false and logs an error', () => {
                    walletInput.outputMap[wallet.publicKey] = 999999;

                    expect(WalletInput.validTransaction(walletInput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });

            describe('and the transaction input signature is invalid', () => {
                it('returns false and logs an error', () => {
                    walletInput.signature = new Wallet().sign('foo');

                    expect(WalletInput.validTransaction(walletInput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });
        });
    }
    );

    }
);
});

module.exports = WalletInput;