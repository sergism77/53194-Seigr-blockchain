const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const uuidV1 = require('uuid/v1');

const TransactionInput = require('./transactionInput.js');
const TransactionOutput = require('./transactionOutput.js');
const SeigrBlockchainTransaction = require('./transaction.js');
const BlockBodyTransaction = require('./blockBodyTransaction.js');

class BlockchainBody {
    constructor() {
        this.SHA256 = SHA256;
        this.ec = ec;
        this.uuidV1 = uuidV1;
        this.TransactionInput = TransactionInput;
        this.TransactionOutput = TransactionOutput;
        this.SeigrBlockchainTransaction = SeigrBlockchainTransaction;
        this.BlockBodyTransaction = BlockBodyTransaction;
    }

    toString() {
        return "Blockchain Body: \n" +
            "SHA256: " + this.SHA256 + "\n" +
            "EC: " + this.ec + "\n" +
            "UUIDV1: " + this.uuidV1 + "\n" +
            "Transaction Input: " + this.TransactionInput + "\n" +
            "Transaction Output: " + this.TransactionOutput + "\n" +
            "Seigr Blockchain Transaction: " + this.SeigrBlockchainTransaction + "\n" +
            "Block Body Transaction: " + this.BlockBodyTransaction + "\n";
    }
}

module.exports = BlockchainBody;