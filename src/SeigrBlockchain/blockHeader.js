const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

class BlockHeader {
    constructor(previousBlockHash, merkleRootHash, timestamp, nonce) {
        this.previousBlockHash = previousBlockHash;
        this.merkleRootHash = merkleRootHash;
        this.timestamp = timestamp;
        this.nonce = nonce;
        this.id = SHA256(this.previousBlockHash + this.merkleRootHash + this.timestamp + this.nonce).toString();
    }

    //returns the previous block hash
    getPreviousBlockHash() {
        return this.previousBlockHash;
    }

    //returns the merkle root hash
    getMerkleRootHash() {
        return this.merkleRootHash;
    }

    //returns the timestamp
    getTimestamp() {
        return this.timestamp;
    }

    //returns the nonce
    getNonce() {
        return this.nonce;
    }

    //returns the id
    getId() {
        return this.id;
    }

    //returns the string representation of the block header
    toString() {
        return "Block Header: \n" +
            "Previous Block Hash: " + this.previousBlockHash + "\n" +
            "Merkle Root Hash: " + this.merkleRootHash + "\n" +
            "Timestamp: " + this.timestamp + "\n" +
            "Nonce: " + this.nonce + "\n" +
            "Id: " + this.id + "\n";
    }
}

module.exports = BlockHeader;