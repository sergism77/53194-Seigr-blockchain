'use strict';

import * as SHA256 from 'crypto-js/sha256';

class BlockHeader {
    private previousBlockHash: string;
    private merkleRootHash: string;
    private timestamp: number;
    private nonce: number;
    private id: string;

    constructor(previousBlockHash: string, merkleRootHash: string, timestamp: number, nonce: number) {
        this.previousBlockHash = previousBlockHash;
        this.merkleRootHash = merkleRootHash;
        this.timestamp = timestamp;
        this.nonce = nonce;
        this.id = SHA256([this.previousBlockHash, this.merkleRootHash, this.timestamp, this.nonce].join('')).toString();
    }

    public getPreviousBlockHash(): string {
        return this.previousBlockHash;
    }

    public getMerkleRootHash(): string {
        return this.merkleRootHash;
    }

    public getTimestamp(): number {
        return this.timestamp;
    }

    public getNonce(): number {
        return this.nonce;
    }

    public getId(): string {
        return this.id;
    }

    public toString(): string {
        return `Block Header:
Previous Block Hash: ${this.previousBlockHash}
Merkle Root Hash: ${this.merkleRootHash}
Timestamp: ${this.timestamp}
Nonce: ${this.nonce}
Id: ${this.id}`;
    }
}

export = BlockHeader;