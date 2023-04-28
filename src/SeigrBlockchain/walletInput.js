
const { REWARD_INPUT, MINING_REWARD } = require('../config');
const { verifySignature } = require('../utils');

class WalletInput {
    constructor({ wallet, amount, signature }) {
        this.timestamp = Date.now();
        this.amount = amount;
        this.address = wallet.publicKey;
        this.signature = signature;
    }

    static validTransaction(walletInput) {
        const { address, amount, signature } = walletInput;
        const publicKey = address;

        return verifySignature({ publicKey, data: amount, signature });
    }

    static rewardTransaction({ minerWallet }) {
        return new this({
            wallet: REWARD_INPUT,
            amount: MINING_REWARD,
            signature: minerWallet.sign(MINING_REWARD)
        });
    }
}

module.exports = WalletInput;