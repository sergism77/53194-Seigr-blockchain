'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const walletOutput_1 = __importDefault(require("./walletOutput"));
const wallet_1 = __importDefault(require("./wallet"));
describe('WalletOutput', () => {
    let walletOutput, address, amount;
    beforeEach(() => {
        address = 'r4nd0m-4ddr3s';
        amount = 50;
        walletOutput = new walletOutput_1.default({ address, amount });
    });
    it('has an `amount`', () => {
        expect(walletOutput.amount).toEqual(amount);
    });
    it('has an `address`', () => {
        expect(walletOutput.address).toEqual(address);
    });
    it('has a `timestamp`', () => {
        expect(walletOutput.timestamp).not.toEqual(undefined);
    });
    describe('validTransaction()', () => {
        let errorMock;
        beforeEach(() => {
            errorMock = jest.fn();
            global.console.error = errorMock;
        });
        describe('when the transaction is valid', () => {
            it('returns true', () => {
                expect(walletOutput_1.default.validTransaction(walletOutput)).toBe(true);
            });
        });
        describe('when the transaction is invalid', () => {
            describe('and a transaction outputMap value is invalid', () => {
                it('returns false and logs an error', () => {
                    walletOutput.outputMap[address] = 999999;
                    expect(walletOutput_1.default.validTransaction(walletOutput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });
            describe('and the transaction input signature is invalid', () => {
                it('returns false and logs an error', () => {
                    walletOutput.signature = new wallet_1.default().sign('foo');
                    expect(walletOutput_1.default.validTransaction(walletOutput)).toBe(false);
                    expect(errorMock).toHaveBeenCalled();
                });
            });
        });
    });
});
exports.default = walletOutput_1.default;
