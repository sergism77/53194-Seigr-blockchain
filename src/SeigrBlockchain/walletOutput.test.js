'use strict';

const WalletOutput = require('./walletOutput');
const { verifySignature } = require('../utils');
const Wallet = require('./wallet');
const { REWARD_INPUT, MINING_REWARD } = require('../config');

describe('WalletOutput', () => {
    let walletOutput, address, amount;

    beforeEach(() => {
        address = 'r4nd0m-4ddr3s';
        amount = 50;

        walletOutput = new WalletOutput({ address, amount });
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
                expect(WalletOutput.validTransaction(walletOutput)).toBe(true);
            });
        });

        describe('when the transaction is invalid', () => {
            describe('and a transaction outputMap value is invalid', () => {
                it('returns false and logs an error', () => {
                    walletOutput.outputMap[address] = 999999;

                    expect(WalletOutput.validTransaction(walletOutput)).toBe(
                        false
                    );
                    expect(errorMock).toHaveBeenCalled();
                });
            });

            describe('and the transaction input signature is invalid', () => {
                it('returns false and logs an error', () => {
                    walletOutput.signature = new Wallet().sign('foo');

                    expect(WalletOutput.validTransaction(walletOutput)).toBe(
                        false
                    );
                    expect(errorMock).toHaveBeenCalled();
                });
            });
        });
    });
}
);


module.exports = WalletOutput;