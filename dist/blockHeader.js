'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const SHA256 = __importStar(require("crypto-js/sha256"));
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
