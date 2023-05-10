const BlockchainNode = require('./blockchainNode');
const BlockchainNodeList = require('./blockchainNodeList');
const BlockchainNodeListManagerClient = require('./blockchainNodeListManagerClient');
const BlockchainNodeListManagerServer = require('./blockchainNodeListManagerServer');

class BlockchainNodeListManager {
    constructor() {
        this.blockchainNodeList = new BlockchainNodeList();
        this.blockchainNodeListManagerClient = new BlockchainNodeListManagerClient();
        this.blockchainNodeListManagerServer = new BlockchainNodeListManagerServer();
    }

    //adds a blockchain node to the blockchain node list
    addBlockchainNode(blockchainNode) {
        this.blockchainNodeList.addBlockchainNode(blockchainNode);
    }

    //returns the blockchain node list
    getBlockchainNodeList() {
        return this.blockchainNodeList;
    }

    //returns the blockchain node list manager client
    getBlockchainNodeListManagerClient() {
        return this.blockchainNodeListManagerClient;
    }

    //returns the blockchain node list manager server
    getBlockchainNodeListManagerServer() {
        return this.blockchainNodeListManagerServer;
    }

    //returns the string representation of the blockchain node list manager
    toString() {
        return "Blockchain Node List Manager: \n" +
            "Blockchain Node List: " + this.blockchainNodeList.toString() + "\n" +
            "Blockchain Node List Manager Client: " + this.blockchainNodeListManagerClient.toString() + "\n" +
            "Blockchain Node List Manager Server: " + this.blockchainNodeListManagerServer.toString();
    }
}

module.exports = BlockchainNodeListManager;