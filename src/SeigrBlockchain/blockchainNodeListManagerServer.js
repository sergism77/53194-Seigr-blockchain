const BlockchainNode = require('./blockchainNode');

class BlockchainNodeListManagerServer {
    constructor() {
        this.blockchainNodeList = new BlockchainNodeList();
    }

    //adds a blockchain node to the blockchain node list
    addBlockchainNode(blockchainNode) {
        this.blockchainNodeList.addBlockchainNode(blockchainNode);
    }

    //returns the blockchain node list
    getBlockchainNodeList() {
        return this.blockchainNodeList;
    }

    //returns the string representation of the blockchain node list manager server
    toString() {
        return "Blockchain Node List Manager Server: \n" +
            "Blockchain Node List: " + this.blockchainNodeList.toString();
    }
}

module.exports = BlockchainNodeListManagerServer;