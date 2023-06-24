'use strict';

import { verifySignature } from '../utils';

class WalletOutput {
    timestamp: number;
    amount: number;
    address: string;

    constructor({ address, amount }: { address: string, amount: number }) {
        this.timestamp = Date.now();
        this.amount = amount;
        this.address = address;
    }

    static validTransaction(walletOutput: WalletOutput) {
        const { address, amount, signature } = walletOutput;
        const publicKey = address;

        return verifySignature({ publicKey, data: amount, signature });
    }
}

export default WalletOutput;