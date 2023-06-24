'use strict';

import SHA256 from 'crypto-js/sha256';
import { ec } from 'elliptic';
import { Transaction } from './transaction';

class BlockBodyTransaction {
    private transaction: Transaction;
    private id: string;

    constructor(transaction: Transaction) {
        this.transaction = transaction;
        this.id = SHA256(this.transaction.toString()).toString();
    }

    public getTransaction(): Transaction {
        return this.transaction;
    }

    public getId(): string {
        return this.id;
    }

    public toString(): string {
        return `Block Body Transaction:
${this.transaction.toString()}
Id: ${this.id}`;
    }
}

export default BlockBodyTransaction;