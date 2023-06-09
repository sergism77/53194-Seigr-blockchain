'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class BlockchainNodeList {
    constructor() {
        this.blockchainNodeList = [];
    }
    //adds a blockchain node to the blockchain node list
    addBlockchainNode(blockchainNode) {
        this.blockchainNodeList.push(blockchainNode);
    }
    //removes a blockchain node from the blockchain node list
    removeBlockchainNode(blockchainNode) {
        this.blockchainNodeList = this.blockchainNodeList.filter(node => node.nodeUrl !== blockchainNode.nodeUrl);
    }
    //returns the blockchain node list
    getBlockchainNodeList() {
        return this.blockchainNodeList;
    }
    //returns the string representation of the blockchain node list
    toString() {
        let blockchainNodeListString = "Blockchain Node List: \n";
        for (let i = 0; i < this.blockchainNodeList.length; i++) {
            blockchainNodeListString += this.blockchainNodeList[i].toString() + "\n";
        }
        return blockchainNodeListString;
    }
}
exports.default = BlockchainNodeList;
