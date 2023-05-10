const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

class BlockchainNode {
    constructor(blockchainNodeAddress) {
        this.blockchainNodeAddress = blockchainNodeAddress;
        this.id = SHA256(this.blockchainNodeAddress).toString();
    }

    //returns the blockchain node address
    getBlockchainNodeAddress() {
        return this.blockchainNodeAddress;
    }

    //returns the id
    getId() {
        return this.id;
    }

    //returns the string representation of the blockchain node
    toString() {
        return "Blockchain Node: \n" +
            "Blockchain Node Address: " + this.blockchainNodeAddress + "\n" +
            "Id: " + this.id + "\n";
    }
}

module.exports = BlockchainNode;