const fs = require('fs');
const path = require('path');
const os = require('os');
const { ec } = require('./utils');
const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');
const genesisWalletDirectory = path.join(os.homedir(), 'Seigr', 'genesisWallet');
const p2pDirectory = path.join(os.homedir(), 'Seigr', 'p2p');
const minerDirectory = path.join(os.homedir(), 'Seigr', 'miner');
const genesisBlockDirectory = path.join(os.homedir(), 'Seigr', 'genesisBlock');

class mineGenesisWalletPool {
    constructor(address) {
        this.address = address;
        this.balance = 0;
        this.publicKey = ec.keyFromPublic(this.address, 'hex').getPublic().encode('hex');
    }

    saveGenesisWalletPool() {
        fs.writeFileSync(
            path.join(walletDirectory, `${this.address}.json`),
            JSON.stringify(this)

        );

    }

    loadGenesisWalletPool() {
        const genesisWalletPool = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${this.address}.json`)));
        return genesisWalletPool;

    }

    saveWalletPool() {
        fs.writeFileSync(
            path.join(walletDirectory, `${this.address}.json`),
            JSON.stringify(this)

        );

    }


    loadWalletPool() {
        const walletPool = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${this.address}.json`)));

        return walletPool;

    }


}

class saveGenesisWalletPool {
    constructor(address) {
        this.address = address;
        this.balance = 0;
        this.publicKey = ec.keyFromPublic(this.address, 'hex').getPublic().encode('hex');
    }

    saveGenesisWalletPool() {
        fs.writeFileSync(
            path.join(walletDirectory, `${this.address}.json`),
            JSON.stringify(this)

        );

    }

    loadGenesisWalletPool() {
        const genesisWalletPool = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${this.address}.json`)));
        return genesisWalletPool;

    }


}

class loadGenesisWalletPool {   
    constructor(address) {
        this.address = address;
        this.balance = 0;
        this.publicKey = ec.keyFromPublic(this.address, 'hex').getPublic().encode('hex');
    }

    saveGenesisWalletPool() {
        fs.writeFileSync(
            path.join(walletDirectory, `${this.address}.json`),
            JSON.stringify(this)

        );

    }

    loadGenesisWalletPool() {
        const genesisWalletPool = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${this.address}.json`)));
        return genesisWalletPool;

    }


}

class genesisWalletPool {
    constructor(address) {
        this.address = address;
        this.balance = 0;
        this.publicKey = ec.keyFromPublic(this.address, 'hex').getPublic().encode('hex');
    }

    saveGenesisWalletPool() {
        fs.writeFileSync(
            path.join(walletDirectory, `${this.address}.json`),

            JSON.stringify(this)

        );

    }

    loadGenesisWalletPool() {
        const genesisWalletPool = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${this.address}.json`)));
        return genesisWalletPool;

    }

    saveWalletPool() {
        fs.writeFileSync(
            path.join(walletDirectory, `${this.address}.json`),
            JSON.stringify(this)

        );

    }


    loadWalletPool() {
        const walletPool = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${this.address}.json`)));

        return walletPool;

    }

}



module.exports = { mineGenesisWalletPool, saveGenesisWalletPool, loadGenesisWalletPool, genesisWalletPool };