const fs = require('fs');
const path = require('path');
const os = require('os');

const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const Blockchain = require('./blockchain');
const { createBlock, Block, saveBlock, loadBlock } = require('./block.js');
const { createTransaction, saveTransaction, loadTransaction, Transaction } = require('./transaction.js');
const { createWallet } = require('./walletUtils');
const Wallet = require('./wallet');
const { GenesisBlock } = require('./genesisBlock');
const { createBlockchain, saveBlockchain, loadBlockchain } = require('./blockchain');
const { createWalletPool } = require('./walletPool');
const { createBlockPool } = require('./blockPool');
const { createTransactionPool } = require('./transactionPool');
const { createBlockchainPool } = require('./blockchainPool');

// Generate a new key pair for the miner
const keyPair = ec.genKeyPair();
const minerIdentifier = keyPair.getPublic().encode('hex');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');

if (!fs.existsSync(walletDirectory)) {
    fs.mkdirSync(walletDirectory, { recursive: true });
}
if (!fs.existsSync(blockDirectory)) {
    fs.mkdirSync(blockDirectory, { recursive: true });
}
if (!fs.existsSync(transactionDirectory)) {
    fs.mkdirSync(transactionDirectory, { recursive: true });
}
if (!fs.existsSync(blockchainDirectory)) {
    fs.mkdirSync(blockchainDirectory, { recursive: true });
}
if (!fs.existsSync(walletPoolDirectory)) {
    fs.mkdirSync(walletPoolDirectory, { recursive: true });
}
if (!fs.existsSync(blockPoolDirectory)) {
    fs.mkdirSync(blockPoolDirectory, { recursive: true });
}
if (!fs.existsSync(transactionPoolDirectory)) {
    fs.mkdirSync(transactionPoolDirectory, { recursive: true });
}

const senderWallet = new createWallet({ Wallet });

// Check if the blockchain exists
let blockchainInstance;
if (fs.existsSync(path.join(blockchainDirectory, 'blockchain.json'))) {
    // Load the existing blockchain
    blockchainInstance = loadBlockchain();
} else {
    // Create the genesis block and blockchain
    const genesisWallet = new createWallet({ Wallet });
    const genesisBlock = new GenesisBlock({ genesisWallet });
    saveBlock(genesisBlock);

    class SeigrBlockchainClass extends createBlockchain {
        constructor() {
            super();
            this.chain = []; // Initialize this.chain as an empty array
        }

        addBlock(transactions) {
            // Custom logic for adding blocks to the blockchain
            if (!transactions || Object.keys(transactions).length === 0) {
                throw new Error('Block does not contain any transactions.');
            }
        
            const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;
        
            const newBlock = new Block({
                timestamp: Date.now(),
                lastHash: previousHash,
                hash: cryptoHash(previousHash),
                data: transactions,
                nonce: 0,
                difficulty: 0,
                transactions: transactions,
                miner: minerIdentifier,
            });
        
            // Save the block to the blockchain
            saveBlock(newBlock);
        
            // Remove the block from the block pool
            if (newBlock.id) {
                fs.unlinkSync(path.join(blockPoolDirectory, `${newBlock.id}.json`));
            }
        
            // Remove the transactions from the transaction pool
            Object.values(transactions).forEach((transaction) => {
                if (transaction.id) {
                    fs.unlinkSync(path.join(transactionPoolDirectory, `${transaction.id}.json`));
                }
            });
        
            // Update the wallet balances
            Object.values(transactions).forEach((transaction) => {
                if (transaction.input && transaction.input.address) {
                    const wallet = new Wallet({ walletId: transaction.input.address });
                    const walletBalance = wallet.calculateBalance({ blockchain: this });
                    wallet.updateBalance({ blockchain: this, balance: walletBalance });
                }
            });
        
            // Save the blockchain
            const blockchainInstance = new Blockchain();
            blockchainInstance.saveBlockchain(this);
        
            // Update the wallet pool
            const WalletPool = createWalletPool({ blockchain: this });
            WalletPool.updateWalletPool();
        
            // Update the block pool
            const BlockPool = createBlockPool({ blockchain: this });
            BlockPool.updateBlockPool();
        
            // Update the transaction pool
            const TransactionPool = createTransactionPool({ blockchain: this });
            TransactionPool.updateTransactionPool();
        
            // Update the blockchain pool
            const BlockchainPool = createBlockchainPool({ blockchain: this });
            BlockchainPool.updateBlockchainPool();
        }
        
        
    }

    blockchainInstance = new SeigrBlockchainClass();
    blockchainInstance.addBlock(genesisBlock);
    saveBlockchain(blockchainInstance);

    // Create the genesis transaction
    const genesisTransaction = new Transaction({
        senderWallet,
        recipient: blockchainInstance.blockchain[0].miner,
        amount: STARTING_BALANCE
    });
    genesisTransaction.signTransaction();
    blockchainInstance.addBlock({ transactions: [genesisTransaction] });
}

const SeigrBlockchain = {
    createBlock,
    createTransaction,
    blockchainInstance,
    saveBlock,
    saveTransaction,
    saveBlockchain,
    loadBlock,
    loadTransaction,
    loadBlockchain,
    cryptoHash,
    verifySignature,
    STARTING_BALANCE,
    ec,
    fs,
    path,
    Transaction,
    Block,
};

module.exports = SeigrBlockchain;
