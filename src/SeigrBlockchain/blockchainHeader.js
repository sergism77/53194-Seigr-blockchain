const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { v4: uuidv4 } = require('uuid');

class BlockchainHeader {
    constructor() {
        this.SHA256 = SHA256;
        this.ec = ec;
        this.uuidv4 = uuidv4;
    }

    toString() {
        return "Blockchain Header: \n" +
            "SHA256: " + this.SHA256 + "\n" +
            "EC: " + this.ec + "\n" +
            "UUIDv4: " + this.uuidv4 + "\n";
    }
}

module.exports = BlockchainHeader;