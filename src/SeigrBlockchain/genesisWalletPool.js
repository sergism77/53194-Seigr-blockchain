const fs = require('fs');
const path = require('path');
const { ec } = require('./utils');
const { walletDirectory } = require('./config');

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