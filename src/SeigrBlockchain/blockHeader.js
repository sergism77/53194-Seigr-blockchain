'use strict';

const SHA256 = require('crypto-js/sha256');

class BlockHeader {
    constructor(previousBlockHash, merkleRootHash, timestamp, nonce) {
        this.previousBlockHash = previousBlockHash;
        this.merkleRootHash = merkleRootHash;
        this.timestamp = timestamp;
        this.nonce = nonce;
        this.id = SHA256([this.previousBlockHash, this.merkleRootHash, this.timestamp, this.nonce].join('')).toString();
    }

    getPreviousBlockHash() {
        return this.previousBlockHash;
    }

    getMerkleRootHash() {
        return this.merkleRootHash;
    }

    getTimestamp() {
        return this.timestamp;
    }

    getNonce() {
        return this.nonce;
    }

    getId() {
        return this.id;
    }

    toString() {
        return `Block Header:
Previous Block Hash: ${this.previousBlockHash}
Merkle Root Hash: ${this.merkleRootHash}
Timestamp: ${this.timestamp}
Nonce: ${this.nonce}
Id: ${this.id}`;
    }
}

module.exports = BlockHeader;
