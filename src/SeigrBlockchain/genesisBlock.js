// this file will export createGenesisBlock, saveGenesisBlock and loadGenesisBlock

const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { verifySignature } = require('./utils');
const { createGenesisWallet, createWallet, saveWallet, loadWallet } = require('./walletUtils');
const { createBlock, block, saveBlock, loadBlock } = require('./block.js');

const walletDirectory = path.join(os.homedir(), 'SeigrBlockchain', 'wallets');
const chainDirectory = path.join(os.homedir(), 'SeigrBlockchain', 'chain');


class mineGenesisBlock {
    constructor({ genesisWallet }) {
        this.index = 0;
        this.timestamp = Date.now();
        this.previousHash = '0'.repeat(64);
        this.hash = cryptoHash(this.index, this.timestamp, this.previousHash, this.data);
        this.data = 'genesis block';
        this.saveGenesisBlock({ genesisWallet });
    }

    saveGenesisBlock({ genesisWallet }) {
        fs.writeFileSync(
            path.join(chainDirectory, `${this.hash}.json`),
            JSON.stringify(this)
        );
    }
}

class saveGenesisBlock {
    constructor({ genesisWallet }) {
        this.index = 0;
        this.timestamp = Date.now();
        this.previousHash = '0'.repeat(64);
        this.hash = cryptoHash(this.index, this.timestamp, this.previousHash, this.data);
        this.data = 'genesis block';
        this.saveGenesisBlock({ genesisWallet });
    }

    saveGenesisBlock({ genesisWallet }) {
        fs.writeFileSync(
            path.join(chainDirectory, `${this.hash}.json`),
            JSON.stringify(this)
        );
    }
}

class loadGenesisBlock {
    constructor({ genesisWallet }) {
        this.index = 0;
        this.timestamp = Date.now();
        this.previousHash = '0'.repeat(64);
        this.hash = cryptoHash(this.index, this.timestamp, this.previousHash, this.data);
        this.data = 'genesis block';
        this.saveGenesisBlock({ genesisWallet });
    }

    saveGenesisBlock({ genesisWallet }) {
        fs.writeFileSync(
            path.join(chainDirectory, `${this.hash}.json`),
            JSON.stringify(this)
        );
    }
}



module.exports = { mineGenesisBlock, saveGenesisBlock, loadGenesisBlock };