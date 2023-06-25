'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletInput = void 0;
const config_1 = require("./config");
const utils_1 = require("./utils");
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
        return (0, utils_1.VerifySignature)({ publicKey, data: amount, signature });
    }
    static rewardTransaction({ minerWallet }) {
        return new this({
            wallet: config_1.REWARD_INPUT,
            amount: config_1.MINING_REWARD,
            signature: minerWallet.sign(config_1.MINING_REWARD)
        });
    }
}
exports.WalletInput = WalletInput;
