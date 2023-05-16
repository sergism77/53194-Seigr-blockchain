//this is the input of the transaction

const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { v4: uuidv4 } = require('uuid');

class TransactionInput {
    constructor(transactionOutputId) {
        this.transactionOutputId = transactionOutputId;
        this.UTXO = null;
    }

    //returns true if the transaction output can be used as an input to the transaction
    canBeUsedAsInputToTransaction() {
        if (this.UTXO == null) {
            return false;
        }
        return true;
    }

    //returns the transaction output id
    getTransactionOutputId() {
        return this.transactionOutputId;
    }

    //returns the UTXO
    getUTXO() {
        return this.UTXO;
    }

    //sets the UTXO
    setUTXO(UTXO) {
        this.UTXO = UTXO;
    }

    //returns the string representation of the transaction input
    toString() {
        return "Transaction Input: \n" +
            "Transaction Output Id: " + this.transactionOutputId + "\n";
    }
}

module.exports = TransactionInput;