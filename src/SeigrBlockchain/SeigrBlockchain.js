const fs = require('fs');
const path = require('path');
const os = require('os');

const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const createBlock = require('./block');
const {
    Transaction,
    CreateTransaction,
    SaveTransaction,
    LoadTransaction } = require('./transaction');
const createWallet = require('./walletUtils');
const Wallet = require('./wallet');
const GenesisBlock = require('./genesisBlock');
const createBlockchain = require('./createBlockchain');
const saveBlockchain = require('./saveBlockchain');
const Blockchain = require('./blockchain');
const { createWalletPool, getWalletPool, updateWalletPool } = require('./walletPool');
const { createBlockPool, getBlockPool, saveBlockPool, loadBlockPool } = require('./blockPool');
const { TransactionPool } = require('./transactionPool');
const { BlockchainPool, createBlockchainPool } = require('./blockchainPool');

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

if (!fs.existsSync(walletDirectory))
  fs.mkdirSync(walletDirectory, { recursive: true });
if (!fs.existsSync(blockDirectory))
  fs.mkdirSync(blockDirectory, { recursive: true });
if (!fs.existsSync(transactionDirectory))
  fs.mkdirSync(transactionDirectory, { recursive: true });
if (!fs.existsSync(blockchainDirectory))
  fs.mkdirSync(blockchainDirectory, { recursive: true });
if (!fs.existsSync(walletPoolDirectory))
  fs.mkdirSync(walletPoolDirectory, { recursive: true });
if (!fs.existsSync(blockPoolDirectory))
  fs.mkdirSync(blockPoolDirectory, { recursive: true });
if (!fs.existsSync(transactionPoolDirectory))
  fs.mkdirSync(transactionPoolDirectory, { recursive: true });

const senderWallet = new Wallet();

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
    
      const previousHash =
        this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;
    
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
          fs.unlinkSync(
            path.join(transactionPoolDirectory, `${transaction.id}.json`)
          );
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
    
      // Update the blockchain
      this.chain.push(newBlock);
    
      // Save the blockchain
      saveBlockchain(this);
    
      // Create or initialize the wallet pool
      createWalletPool();

      // Update the wallet pool
      updateWalletPool();
    
      // Update the block pool
      createBlockPool();
      // or get the current block pool
      const currentBlockPool = getBlockPool();
      // or save the block pool
      const savedBlockPool = saveBlockPool();
      // or load the block pool
      const loadedBlockPool = loadBlockPool();
    
      // Update the transaction pool
      this.transactionPool = new TransactionPool();
      this.transactionPool.clearBlockchainTransactions(this);
    
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
    recipient: blockchainInstance.chain[0].miner,
    amount: STARTING_BALANCE,
  });
  genesisTransaction.signTransaction();
  blockchainInstance.addBlock({ transactions: [genesisTransaction] });
}

const SeigrBlockchain = {
  createBlock,
  CreateTransaction,
  blockchainInstance,
  saveBlock,
  SaveTransaction,
  saveBlockchain,
  loadBlock,
  LoadTransaction,
  cryptoHash,
  verifySignature,
  STARTING_BALANCE,
  ec,
  fs,
  path,
  Transaction,
  Block,
  Blockchain,
};

module.exports = SeigrBlockchain;
