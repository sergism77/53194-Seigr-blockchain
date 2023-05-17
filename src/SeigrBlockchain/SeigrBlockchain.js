const fs = require('fs');
const path = require('path');
const os = require('os');

const createBlock = require('./createBlock');
const createTransaction = require('./createTransaction');
const createWallet = require('./createWallet');
const createTransactionPool = require('./createTransactionPool');
const createGenesisBlock = require('./createGenesisBlock');
const createGenesisTransaction = require('./createGenesisTransaction').default;
const createGenesisWallet = require('./createGenesisWallet');
const createGenesisTransactionPool = require('./createGenesisTransactionPool');

const { cryptoHash } = require('./utils');

const GENESIS_DATA = require('./genesis');
const GENESIS_TRANSACTION_DATA = require('./genesisTransaction');

const GENESIS_WALLET_DATA = require('./genesisWallet');
const GENESIS_TRANSACTION_POOL_DATA = require('./genesisTransactionPool');

const { REWARD_INPUT, MINING_REWARD } = require('./config');

const SEIGR_BLOCKCHAIN_DIR = path.join(os.homedir(), 'SeigrBlockchain');
const BLOCKCHAIN_DIR = path.join(SEIGR_BLOCKCHAIN_DIR, 'blockchain');
const WALLETS_DIR = path.join(SEIGR_BLOCKCHAIN_DIR, 'wallets');
const TRANSACTION_POOL_DIR = path.join(SEIGR_BLOCKCHAIN_DIR, 'transactionPool');

const GENESIS_BLOCK_FILE = path.join(BLOCKCHAIN_DIR, 'genesisBlock.json');
const GENESIS_TRANSACTION_FILE = path.join(BLOCKCHAIN_DIR, 'genesisTransaction.json');
const GENESIS_WALLET_FILE = path.join(WALLETS_DIR, 'genesisWallet.json');
const GENESIS_TRANSACTION_POOL_FILE = path.join(TRANSACTION_POOL_DIR, 'genesisTransactionPool.json');

class SeigrBlockchain {
    constructor() {
        this.blockchain = [new createGenesisBlock()];
        this.transactionPool = createGenesisTransactionPool();
        this.wallets = createGenesisWallet();
        this.clear = this.clear.bind(this);
        this.clear();
        this.toString = this.toString.bind(this);
        this.toString();
        this.getBalance = this.getBalance.bind(this);
        this.getWallet = this.getWallet.bind(this);
        this.getWallets = this.getWallets.bind(this);
        this.getWalletsMap = this.getWalletsMap.bind(this);
        
    }

    addBlock({ data }) {
        const newBlock = createBlock({
            lastBlock: this.blockchain[this.blockchain.length - 1],
            data
        });

        this.blockchain.push(newBlock);

        return newBlock;

    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(createGenesisBlock())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];

            const actualLastHash = chain[i - 1].hash;

            if (lastHash !== actualLastHash) return false;

            const validatedHash = cryptoHash(
                timestamp,
                lastHash,
                data,
                nonce,
                difficulty
            );

            if (hash !== validatedHash) return false;
        }

        return true;
    }

    replaceChain(chain, validateTransactions, onSuccess) {
        if (chain.length <= this.blockchain.length) {
            console.error('The incoming chain must be longer');
            return;
        }

        if (!SeigrBlockchain.isValidChain(chain)) {
            console.error('The incoming chain must be valid');

            return;
        }

        if (validateTransactions && !this.validTransactionData({ chain })) {
            console.error('The incoming chain has invalid data');
            return;
        }

        if (onSuccess) onSuccess();
        console.log('replacing chain with', chain);
        this.blockchain = chain;

    }

    validTransactionData({ chain }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const transactionSet = new Set();
            let rewardTransactionCount = 0;

            for (let transaction of block.data) {
                if (transaction.input.address === REWARD_INPUT.address) {
                    rewardTransactionCount += 1;

                    if (rewardTransactionCount > 1) {
                        console.error('Miner rewards exceed limit');
                        return false;
                    }

                    if (Object.values(transaction.outputMap)[0] !== MINING_REWARD) {
                        console.error('Miner reward amount is invalid');
                        return false;
                    }
                } else {
                    if (!createTransaction.validTransaction(transaction)) {
                        console.error('Invalid transaction');
                        return false;

                    }

                    const trueBalance = createWallet.calculateBalance({
                        chain: this.blockchain,
                        address: transaction.input.address
                    });

                    if (transaction.input.amount !== trueBalance) {
                        console.error('Invalid input amount');

                        return false;

                    }

                    if (transactionSet.has(transaction)) {

                        console.error('An identical transaction appears more than once in the block');  
                        return false;
                    } else {
                        transactionSet.add(transaction);
                    }

                }
            }
        }

        return true;

    }

    getBalance({ address }) {
        return createWallet.calculateBalance({

            chain: this.blockchain,
            address
        });

    }

    getWallet({ address }) {
        return this.wallets[address];
    }

    getWallets() {
        return this.wallets;
    }

    getWalletsMap() {
        return this.wallets.walletsMap;
    }

    toString() {
        console.log('blockchain: ', this.blockchain);
        console.log('transactionPool: ', this.transactionPool);

    }

    clear() {
        if (!fs.existsSync(SEIGR_BLOCKCHAIN_DIR)) {
            fs.mkdirSync(SEIGR_BLOCKCHAIN_DIR);
        }

        if (!fs.existsSync(BLOCKCHAIN_DIR)) {
            fs.mkdirSync(BLOCKCHAIN_DIR);

            fs.writeFileSync(GENESIS_BLOCK_FILE, JSON.stringify(GENESIS_DATA));
        }

        if (!fs.existsSync(WALLETS_DIR)) {
            fs.mkdirSync(WALLETS_DIR);

            fs.writeFileSync(GENESIS_WALLET_FILE, JSON.stringify(GENESIS_WALLET_DATA));
        }

        if (!fs.existsSync(TRANSACTION_POOL_DIR)) {
            fs.mkdirSync(TRANSACTION_POOL_DIR);

            fs.writeFileSync(GENESIS_TRANSACTION_POOL_FILE, JSON.stringify(GENESIS_TRANSACTION_POOL_DATA));
        }
        //if (!fs.existsSync(GENESIS_TRANSACTION_FILE)) {
            //fs.writeFileSync(GENESIS_TRANSACTION_FILE, JSON.stringify(GENESIS_TRANSACTION_DATA)); 
        //}

        this.blockchain = [new createGenesisBlock()];
        this.transactionPool = createGenesisTransactionPool();
        this.wallets = createGenesisWallet();
    }

    static getBlockchain() {
        const blockchain = new this();

        if (fs.existsSync(BLOCKCHAIN_DIR)) {

            blockchain.blockchain = JSON.parse(fs.readFileSync(GENESIS_BLOCK_FILE));
        }

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            blockchain.transactionPool = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_POOL_FILE));
        }

        if (fs.existsSync(WALLETS_DIR)) {

            blockchain.wallets = JSON.parse(fs.readFileSync(GENESIS_WALLET_FILE));
        }

        return blockchain;
    }

    static getTransactionPool() {
        const transactionPool = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transactionPool.transactionPool = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_POOL_FILE));
        }

        return transactionPool;
    }

    static getWallets() {
        const wallets = new this();

        if (fs.existsSync(WALLETS_DIR)) {

            wallets.wallets = JSON.parse(fs.readFileSync(GENESIS_WALLET_FILE));
        }

        return wallets;
    }

    static getWalletsMap() {
        const walletsMap = new this();

        if (fs.existsSync(WALLETS_DIR)) {

            walletsMap.walletsMap = JSON.parse(fs.readFileSync(GENESIS_WALLET_FILE));
        }

        return walletsMap;
    }

    static getTransaction() {
        const transaction = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transaction.transaction = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_FILE));
        }

        return transaction;
    }

    static getTransactionPool() {
        const transactionPool = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transactionPool.transactionPool = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_POOL_FILE));

        }

        return transactionPool;
    }

    static getTransactionPoolMap() {
        const transactionPoolMap = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transactionPoolMap.transactionPoolMap = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_POOL_FILE));

        }

        return transactionPoolMap;
    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(createGenesisBlock())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];
            const actualLastHash = chain[i - 1].hash;
            const lastDifficulty = chain[i - 1].difficulty;

            if (lastHash !== actualLastHash) return false;

            const validatedHash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);

            if (hash !== validatedHash) return false;

            if (Math.abs(lastDifficulty - difficulty) > 1) return false;
        }

        return true;
    }

    static isValidTransactionPool(transactionPool) {
        for (let transaction of transactionPool) {
            if (!createTransaction.validTransaction(transaction)) {
                return false;
            }
        }

        return true;
    }

    static isValidTransaction(transaction) {
        const { input: { address, signature }, outputMap } = transaction;

        const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);

        if (transaction.input.amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;

        }

        if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
            console.error(`Invalid signature from ${address}`);

            return false;

        }

        return true;
    }

    static replaceChain({ chain, transactionPool, wallets }) {
        if (chain.length <= this.blockchain.length) {

            console.error('The incoming chain must be longer');

            return;
        }

        if (!this.isValidChain(chain)) {

            console.error('The incoming chain must be valid');

            return;
        }

        if (transactionPool && !this.isValidTransactionPool(transactionPool)) {

            console.error('The incoming transaction pool must be valid');

            return;

        }

        if (wallets && !this.isValidWallets(wallets)) {

            console.error('The incoming wallets must be valid');

            return;

        }

        console.log('replacing chain with', chain);

        this.blockchain = chain;


        if (transactionPool) {

            this.transactionPool = transactionPool;

        }

        if (wallets) {

            this.wallets = wallets;

        }

    }

    static isValidWallets(wallets) {
        for (let wallet in wallets) {
            if (!createWallet.validWallet(wallets[wallet])) {
                return false;
            }
        }

        return true;
    }

    static isValidWallet(wallet) {
        const { publicKey, privateKey } = wallet;

        if (!verifySignature({ publicKey, data: publicKey, signature: privateKey })) {
            console.error(`Invalid signature from ${publicKey}`);

            return false;

        }

        return true;
    }

    static getWalletsMap() {
        const walletsMap = new this();

        if (fs.existsSync(WALLETS_DIR)) {

            walletsMap.walletsMap = JSON.parse(fs.readFileSync(GENESIS_WALLET_FILE));
        }

        return walletsMap;

    }

    static getWallets() {

        const wallets = new this();

        if (fs.existsSync(WALLETS_DIR)) {

            wallets.wallets = JSON.parse(fs.readFileSync(GENESIS_WALLET_FILE));
        }

        return wallets;

    }

    static getTransaction() {

        const transaction = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transaction.transaction = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_FILE));
        }

        return transaction;

    }

    static getTransactionPool() {

        const transactionPool = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transactionPool.transactionPool = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_POOL_FILE));

        }

        return transactionPool;

    }

    static getTransactionPoolMap() {

        const transactionPoolMap = new this();

        if (fs.existsSync(TRANSACTION_POOL_DIR)) {

            transactionPoolMap.transactionPoolMap = JSON.parse(fs.readFileSync(GENESIS_TRANSACTION_POOL_FILE));

        }

        return transactionPoolMap;

    }


    static getBlockchain() {
        const blockchain = new this();

        if (fs.existsSync(BLOCKCHAIN_DIR)) {

            blockchain.blockchain = JSON.parse(fs.readFileSync(GENESIS_BLOCK_FILE));
        }

        return blockchain;

    }

    static getBlockchainMap() {

        const blockchainMap = new this();

        if (fs.existsSync(BLOCKCHAIN_DIR)) {

            blockchainMap.blockchainMap = JSON.parse(fs.readFileSync(GENESIS_BLOCKCHAIN_FILE));
        }

        return blockchainMap;

    }

}

module.exports = SeigrBlockchain;
SeigrBlockchain.getBlockchain();