'use strict';

import transaction from './transaction';
import { STARTING_BALANCE } from './config';
import { cryptoHash } from './utils';
import * as ec from 'elliptic';
import wallet from './wallet';
import createWallet from './walletUtils';

const ecInstance = new ec.ec('secp256k1');

class createTransaction {
    senderWallet: wallet;
    recipient: string;
    amount: number;
    signature: string;
    hash: string;
    publicKey: string;
    address: string;
    timestamp: number;
    output: object;
    outputMap: object;
    input: object;

    constructor({ senderWallet, recipient, amount, signature, hash, publicKey, address, timestamp, output }: { senderWallet: wallet, recipient: string, amount: number, signature: string, hash: string, publicKey: string, address: string, timestamp: number, output: object }) { 
        this.senderWallet = senderWallet;
        this.recipient = recipient;
        this.amount = amount;
        this.signature = signature;
        this.hash = hash;
        this.publicKey = publicKey;
        this.address = address;
        this.amount = amount;
        this.timestamp = timestamp;
        this.output = output;
        this.outputMap = this.createOutputMap({ senderWallet, recipient, amount }); 
        this.input = this.createInput({ senderWallet, outputMap: this.outputMap });

    }

    createOutputMap({ senderWallet, recipient, amount }: { senderWallet: wallet, recipient: string, amount: number }) {
        const outputMap: object = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;
        return outputMap;
    }

    createInput({ senderWallet, outputMap }: { senderWallet: wallet, outputMap: object }) {
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(outputMap)
        }
    }



    static validTransaction(transaction: createTransaction) {
        const { input: { address, amount, signature }, outputMap } = transaction;
        const outputTotal = Object.values(outputMap).reduce((total: number, outputAmount: number) => total + outputAmount);
        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!ecInstance.keyFromPublic(address, 'hex').verify(cryptoHash(outputMap), signature)) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }
        return true;
    }

    update({ senderWallet, recipient, amount }: { senderWallet: wallet, recipient: string, amount: number }) {
        if (amount > this.outputMap[senderWallet.publicKey]) {
            throw new Error('Amount exceeds balance');
        }
        if (!this.outputMap[recipient]) {
            this.outputMap[recipient] = amount;
        } else {
            this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }
        this.outputMap[senderWallet.publicKey] = this.outputMap[senderWallet.publicKey] - amount;
        this.input = this.createInput();
    }
}

export default createTransaction;