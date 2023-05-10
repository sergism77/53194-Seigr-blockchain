
const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const uuidV1 = require('uuid/v1');
const TransactionInput = require('./transactionInput.js');
const TransactionOutput = require('./transactionOutput.js');
const SeigrBlockchainTransaction = require('./transaction.js');
const BlockBodyTransaction = require('./blockBodyTransaction.js');
const BlockBody = require('./blockBody.js');
const BlockHeader = require('./blockHeader.js');
const Block = require('./block.js');
const Blockchain = require('./blockchain.js');
const BlockchainNode = require('./blockchainNode.js');
const BlockchainNodeList = require('./blockchainNodeList.js');
const BlockchainNodeListManager = require('./blockchainNodeListManager.js');
const BlockchainNodeListManagerClient = require('./blockchainNodeListManagerClient.js');
const BlockchainNodeListManagerServer = require('./blockchainNodeListManagerServer.js');

class SeigrBlockchain {
    constructor() {
        this.SHA256 = SHA256;
        this.ec = ec;
        this.uuidV1 = uuidV1;
        this.TransactionInput = TransactionInput;
        this.TransactionOutput = TransactionOutput;
        this.SeigrBlockchainTransaction = SeigrBlockchainTransaction;
        this.BlockBodyTransaction = BlockBodyTransaction;
        this.BlockBody = BlockBody;
        this.BlockHeader = BlockHeader;
        this.Block = Block;
        this.Blockchain = Blockchain;
        this.BlockchainNode = BlockchainNode;
        this.BlockchainNodeList = BlockchainNodeList;
        this.BlockchainNodeListManager = BlockchainNodeListManager;
        this.BlockchainNodeListManagerClient = BlockchainNodeListManagerClient;
        this.BlockchainNodeListManagerServer = BlockchainNodeListManagerServer;
    }


    toString() {
        return "Seigr Blockchain: \n" +
            "SHA256: " + this.SHA256 + "\n" +
            "EC: " + this.ec + "\n" +
            "UUIDV1: " + this.uuidV1 + "\n" +
            "Transaction Input: " + this.TransactionInput + "\n" +
            "Transaction Output: " + this.TransactionOutput + "\n" +
            "Seigr Blockchain Transaction: " + this.SeigrBlockchainTransaction + "\n" +
            "Block Body Transaction: " + this.BlockBodyTransaction + "\n" +
            "Block Body: " + this.BlockBody + "\n" +
            "Block Header: " + this.BlockHeader + "\n" +
            "Block: " + this.Block + "\n" +
            "Blockchain: " + this.Blockchain + "\n" +
            "Blockchain Node: " + this.BlockchainNode + "\n" +
            "Blockchain Node List: " + this.BlockchainNodeList + "\n" +
            "Blockchain Node List Manager: " + this.BlockchainNodeListManager + "\n" +
            "Blockchain Node List Manager Client: " + this.BlockchainNodeListManagerClient + "\n" +
            "Blockchain Node List Manager Server: " + this.BlockchainNodeListManagerServer + "\n";
    }


    print() {
        console.log(this.toString());
    }


    printBlockchain() {
        console.log(this.blockchain.toString());
    }


    printBlockchainNodeList() {
        console.log(this.blockchainNodeList.toString());
    }


    printBlockchainNodeListManager() {
        console.log(this.blockchainNodeListManager.toString());
    }


    printBlockchainNodeListManagerClient() {
        console.log(this.blockchainNodeListManagerClient.toString());
    }


    printBlockchainNodeListManagerServer() {
        console.log(this.blockchainNodeListManagerServer.toString());
    }

}

module.exports = SeigrBlockchain;