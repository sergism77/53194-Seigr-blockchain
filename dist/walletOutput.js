'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class WalletOutput {
    constructor({ address, amount }) {
        this.timestamp = Date.now();
        this.amount = amount;
        this.address = address;
    }
    static validTransaction(walletOutput) {
        const { address, amount, signature } = walletOutput;
        const publicKey = address;
        return verifySignature({ publicKey, data: amount, signature });
    }
}
exports.default = WalletOutput;
