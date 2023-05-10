//this is the blockBodyTransaction.js
//this file will contain the block body transaction class

const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

class BlockBodyTransaction {
    constructor(transaction) {
        this.transaction = transaction;
        this.id = SHA256(this.transaction.toString()).toString();
    }

    //returns the transaction
    getTransaction() {
        return this.transaction;
    }

    //returns the id
    getId() {
        return this.id;
    }

    //returns the string representation of the block body transaction
    toString() {
        return "Block Body Transaction: \n" +
            this.transaction.toString() + "\n" +
            "Id: " + this.id + "\n";
    }
}

module.exports = BlockBodyTransaction;