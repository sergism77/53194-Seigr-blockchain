const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const uuidV1 = require('uuid/v1');

class BlockchainHeader {
    constructor() {
        this.SHA256 = SHA256;
        this.ec = ec;
        this.uuidV1 = uuidV1;
    }

    toString() {
        return "Blockchain Header: \n" +
            "SHA256: " + this.SHA256 + "\n" +
            "EC: " + this.ec + "\n" +
            "UUIDV1: " + this.uuidV1 + "\n";
    }
}

module.exports = BlockchainHeader;