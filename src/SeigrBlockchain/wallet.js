const { STARTING_BALANCE } = require('./config');
const { cryptoHash, verifySignature } = require('./utils');
const transaction = require('./transaction');
const ec = require('elliptic').ec('secp256k1');
const { createGenesisWallet, createWallet, saveWallet } = require('./walletUtils');
class Wallet {
    constructor() {
        this.balance = STARTING_BALANCE;
        this.keyPair = ec.genKeyPair();
        this.address = this.keyPair.getPublic().encode('hex');
        this.createGenesisWallet = createGenesisWallet;
        this.createWallet = createWallet;
        this.saveWallet = saveWallet;
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
    get publicKey() {
        return this.keyPair.getPublic().encode('hex');
    }


    sign(data) {
        return this.keyPair.sign(cryptoHash(data));
    }
    
    createTransaction({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Wallet.calculateBalance({
                chain,
                address: this.publicKey
            });
        }
        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }
        return new transaction({ senderWallet: this, recipient, amount });
    }

    

    static verifyTransaction({ transaction }) {
        const { input: { address, signature }, outputMap } = transaction;
        const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);
        if (outputTotal !== transaction.input.amount) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }
        return true;
    }

    static verifyWallet({ wallet }) {
        const { address, balance } = wallet;
        const addressBalance = Wallet.calculateBalance({ chain, address });
        if (addressBalance !== balance) {
            console.error(`Invalid balance from ${address}`);
            return false;
        }
        return true;
    }

    static verifyWallets({ wallets }) {
        return wallets.map(wallet => Wallet.verifyWallet({ wallet }));
    }

    static verifyTransactionPool({ transactionPool, chain }) {
        for (let transaction of transactionPool.transactions) {
            if (!Wallet.verifyTransaction({ transaction })) {
                console.error(`Invalid transaction from ${transaction.input.address}`);
                return false;
            }
        }
        return true;
    }

    static verifyChain({ chain }) {
        let isValidGenesis = false;
        if (JSON.stringify(chain[0]) === JSON.stringify(Block.genesis())) {
            isValidGenesis = true;
        }
        if (!isValidGenesis) {
            return false;
        }
        for (let i = 1; i < chain.length; i++) {
            const { timestamp, lastHash, hash, nonce, difficulty, data } = chain[i];
            const actualLastHash = chain[i - 1].hash;
            const lastDifficulty = chain[i - 1].difficulty;
            if (lastHash !== actualLastHash) {
                return false;
            }
            const validatedHash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
            if (hash !== validatedHash) {
                return false;
            }
            if (Math.abs(lastDifficulty - difficulty) > 1) {
                return false;
            }
        }
        return true;
    }

    static verifyBlock({ lastBlock, block }) {
        const { timestamp, lastHash, hash, nonce, difficulty, data } = block;
        const actualLastHash = lastBlock.hash;
        const lastDifficulty = lastBlock.difficulty;
        if (lastHash !== actualLastHash) {
            return false;
        }
        const validatedHash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
        if (hash !== validatedHash) {
            return false;
        }
        if (Math.abs(lastDifficulty - difficulty) > 1) {
            return false;
        }
        return true;
    }

    static verifyBlocks({ chain }) { 
        for (let i = 1; i < chain.length; i++) {
            const lastBlock = chain[i - 1];
            const block = chain[i];
            if (!Wallet.verifyBlock({ lastBlock, block })) {
                return false;
            }
        }
        return true;
    }




}

module.exports = { Wallet };
