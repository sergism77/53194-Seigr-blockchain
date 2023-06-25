'use strict';

import { REWARD_INPUT, MINING_REWARD } from './config';
import { VerifySignature } from './utils';
import Wallet from './wallet';

export class WalletInput {
    timestamp: number;
    amount: number;
    address: string;
    signature: string;

    constructor({ wallet, amount, signature }: { wallet: Wallet, amount: number, signature: string }) {
        this.timestamp = Date.now();
        this.amount = amount;
        this.address = wallet.publicKey;
        this.signature = signature;
    }

    static validTransaction(walletInput: WalletInput): boolean {
        const { address, amount, signature } = walletInput;
        const publicKey = address;

        return VerifySignature({ publicKey, data: amount, signature });
    }

    static rewardTransaction({ minerWallet }: { minerWallet: Wallet }): WalletInput {
        return new this({
            wallet: REWARD_INPUT,
            amount: MINING_REWARD,
            signature: minerWallet.sign(MINING_REWARD)
        });
    }
}