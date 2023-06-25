'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class WalletOutput {
    constructor({ address, amount }) {
        this.timestamp = Date.now();
        this.amount = amount;
        this.address = address;
    }
    static validTransaction(walletOutput) {
        const { address, amount, signature } = walletOutput;
        const publicKey = address;
        return (0, utils_1.verifySignature)({ publicKey, data: amount, signature });
    }
}
exports.default = WalletOutput;
