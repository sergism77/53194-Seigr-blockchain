'use strict';

const fs = require('fs').promises;
const path = require('path');
const os = require('os');
const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { createBlock, Block, loadBlock } = require('./block.js');
const { Transaction, CreateTransaction, LoadTransaction } = require('./transaction.js');
const { createWallet } = require('./walletUtils');
const Wallet = require('./wallet');
const { GenesisBlock } = require('./genesisBlock');
const createBlockchain = require('./createBlockchain');
const { Blockchain } = require('./blockchain');
const loadBlockchain = require('./loadBlockchain');
const { CreateWalletPool, UpdateWalletPool } = require('./walletPool');
const { createBlockPool, getBlockPool, saveBlockPool, loadBlockPool } = require('./blockPool');
const { TransactionPool } = require('./transactionPool');
const { CreateBlockchainPool } = require('./blockchainPool');

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

// Ensure directories exist
const ensureDirectoriesExist = async () => {
  try {
    await fs.mkdir(walletDirectory, { recursive: true });
    await fs.mkdir(blockDirectory, { recursive: true });
    await fs.mkdir(transactionDirectory, { recursive: true });
    await fs.mkdir(blockchainDirectory, { recursive: true });
    await fs.mkdir(walletPoolDirectory, { recursive: true });
    await fs.mkdir(blockPoolDirectory, { recursive: true });
    await fs.mkdir(transactionPoolDirectory, { recursive: true });
  } catch (error) {
    console.error('Error creating directories:', error);
    throw error;
  }
};

// Load or create the sender wallet
const loadOrCreateSenderWallet = () => {
  const senderWalletPath = path.join(walletDirectory, 'sender-wallet.json');
  return fs.readFile(senderWalletPath, 'utf8')
    .then((walletData) => JSON.parse(walletData))
    .catch(() => {
      const newSenderWallet = new createWallet({ Wallet });
      return fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet))
        .then(() => newSenderWallet);
    });
};

// Check if the blockchain exists
const loadOrCreateBlockchain = async () => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.access(blockchainPath);
    return loadBlockchain();
  } catch {
    const genesisWallet = await loadOrCreateSenderWallet();
    const genesisBlock = new GenesisBlock({ genesisWallet });
    await saveBlock(genesisBlock);
    const blockchain = new createBlockchain();
    blockchain.addBlock(genesisBlock);
    await saveBlockchain(blockchain);
    return blockchain;
  }
};

// Save the blockchain to disk
const saveBlockchain = async (blockchain) => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain));
  } catch (error) {
    console.error('Error saving blockchain:', error);
    throw error;
  }
};

class SeigrBlockchainClass extends createBlockchain {
  constructor() {
    super();
    this.chain = [];
    this.walletPool = null;
    this.blockPool = null;
  }

  async initializePools() {
    this.walletPool = await CreateWalletPool();
    this.blockPool = await createBlockPool();
  }

  async addBlock(transactions) {
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

    try {
      await saveBlock(newBlock);
      await Promise.all(
        Object.values(transactions).map((transaction) =>
          fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`))
        )
      );

      for (const transaction of Object.values(transactions)) {
        const wallet = new Wallet({ walletId: transaction.input.address });
        const walletBalance = wallet.calculateBalance({ blockchain: this });
        await wallet.updateBalance({ blockchain: this, balance: walletBalance });
      }

      this.chain.push(newBlock);
      await saveBlockchain(this);
      await this.walletPool.updateWalletPool();
      await this.blockPool.saveBlockPool();
      await this.blockPool.updateBlockchainPool(this);
      await this.transactionPool.clearBlockchainTransactions(this);
    } catch (error) {
      console.error('Error adding block:', error);
      throw error;
    }
  }
}

const initializeBlockchain = async () => {
  await ensureDirectoriesExist();
  const blockchain = await loadOrCreateBlockchain();
  await blockchain.initializePools();
  return blockchain;
};

const blockchainInstancePromise = initializeBlockchain();

module.exports = {
  get blockchainInstance() {
    return blockchainInstancePromise;
  },
  walletDirectory,
  blockDirectory,
  transactionDirectory,
  blockchainDirectory,
  walletPoolDirectory,
  blockPoolDirectory,
  transactionPoolDirectory,
};
