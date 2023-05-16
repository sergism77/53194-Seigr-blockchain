//this is the stake.js file

const BlockchainNodeList = require('./blockchainNodeList.js');
const BlockchainNodeListManager = require('./blockchainNodeListManager.js');
const BlockchainNodeListManagerClient = require('./blockchainNodeListManagerClient.js');
const BlockchainNodeListManagerServer = require('./blockchainNodeListManagerServer.js');
const SeigrBlockchain = require('./SeigrBlockchain.js');
const SeigrBlockchainTransaction = require('./SeigrBlockchainTransaction.js');
const BlockBodyTransaction = require('./blockBodyTransaction.js');
const BlockBody = require('./blockBody.js');
const BlockHeader = require('./blockHeader.js');
const Block = require('./block.js');
const Blockchain = require('./blockchain.js');
const BlockchainNode = require('./blockchainNode.js');
const TransactionInput = require('./transactionInput.js');
const TransactionOutput = require('./transactionOutput.js');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { v4: uuidv4 } = require('uuid');
const SHA256 = require('crypto-js/sha256');

class Stake {
    constructor() {
        this.BlockchainNodeList = BlockchainNodeList;
        this.BlockchainNodeListManager = BlockchainNodeListManager;
        this.BlockchainNodeListManagerClient = BlockchainNodeListManagerClient;
        this.BlockchainNodeListManagerServer = BlockchainNodeListManagerServer;
        this.SeigrBlockchain = SeigrBlockchain;
        this.SeigrBlockchainTransaction = SeigrBlockchainTransaction;
        this.BlockBodyTransaction = BlockBodyTransaction;
        this.BlockBody = BlockBody;
        this.BlockHeader = BlockHeader;
        this.Block = Block;
        this.Blockchain = Blockchain;
        this.BlockchainNode = BlockchainNode;
        this.TransactionInput = TransactionInput;
        this.TransactionOutput = TransactionOutput;
        this.ec = ec;
        this.uuidv4 = uuidv4;
        this.SHA256 = SHA256;
    }

    toString() {
        return "Stake: \n" +
            "Blockchain Node List: " + this.BlockchainNodeList + "\n" +
            "Blockchain Node List Manager: " + this.BlockchainNodeListManager + "\n" +
            "Blockchain Node List Manager Client: " + this.BlockchainNodeListManagerClient + "\n" +
            "Blockchain Node List Manager Server: " + this.BlockchainNodeListManagerServer + "\n" +
            "Seigr Blockchain: " + this.SeigrBlockchain + "\n" +
            "Seigr Blockchain Transaction: " + this.SeigrBlockchainTransaction + "\n" +
            "Block Body Transaction: " + this.BlockBodyTransaction + "\n" +
            "Block Body: " + this.BlockBody + "\n" +
            "Block Header: " + this.BlockHeader + "\n" +
            "Block: " + this.Block + "\n" +
            "Blockchain: " + this.Blockchain + "\n" +
            "Blockchain Node: " + this.BlockchainNode + "\n" +
            "Transaction Input: " + this.TransactionInput + "\n" +
            "Transaction Output: " + this.TransactionOutput + "\n" +
            "EC: " + this.ec + "\n" +
            "UUIDv4: " + this.uuidv4 + "\n" +
            "SHA256: " + this.SHA256 + "\n";
    }
}

module.exports = Stake;