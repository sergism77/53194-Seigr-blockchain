// this is the walletInput.test.js
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
}
);
});

module.exports = WalletInput;