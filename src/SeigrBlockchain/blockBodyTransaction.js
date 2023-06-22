'use strict';

const SHA256 = require('crypto-js/sha256');
const { ec } = require('elliptic');
const { Transaction } = require('./transaction');

class BlockBodyTransaction {
    constructor(transaction) {
        this.transaction = transaction;
        this.id = SHA256(this.transaction.toString()).toString();
    }

    getTransaction() {
        return this.transaction;
    }

    getId() {
        return this.id;
    }

    toString() {
        return `Block Body Transaction:
${this.transaction.toString()}
Id: ${this.id}`;
    }
}

module.exports = BlockBodyTransaction;
