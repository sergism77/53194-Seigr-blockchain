const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { verifySignature } = require('./utils');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');


class createWallet {
    constructor() {
        this.balance = STARTING_BALANCE;
        this.keyPair = ec.genKeyPair();
        this.address = this.keyPair.getPublic().encode('hex');
    }

    get publicKey() {
        return this.keyPair.getPublic().encode('hex');
    }

    sign(data) {
        return this.keyPair.sign(cryptoHash(data));
    }

    createTransaction({ recipient, amount, chain }) {
        if (chain) {
            this.balance = createWallet.calculateBalance({
                chain,
                address: this.publicKey
            });
        }
        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }
        return new transaction({ senderWallet: this, recipient, amount });
    }

    static calculateBalance({ chain, address }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;
        for (let i = chain.length - 1; i > 0; i--) {
            const block = chain[i];
            for (let transaction of block.data) {
                if (transaction.input.address === address) {
                    hasConductedTransaction = true;
                }
                const addressOutput = transaction.outputMap[address];
                if (addressOutput) {
                    outputsTotal = outputsTotal + addressOutput;
                }
            }
            if (hasConductedTransaction) {
                break;
            }
        }
        return hasConductedTransaction ? outputsTotal : STARTING_BALANCE + outputsTotal;
    }

    static blockchainWallet() {
        const blockchainWallet = new this();
        blockchainWallet.address = 'blockchain-wallet';
        return blockchainWallet;
    }
}

class saveWallet {
    constructor(wallet) {
        fs.writeFileSync(
            path.join(walletDirectory, `${wallet.address}.json`),
            JSON.stringify(wallet)
        );
    }
}

class loadWallet {
    constructor(address) {
        const wallet = JSON.parse(fs.readFileSync(path.join(walletDirectory, `${address}.json`)));
        return wallet;
    }
}


module.exports = { createWallet, saveWallet, loadWallet };
