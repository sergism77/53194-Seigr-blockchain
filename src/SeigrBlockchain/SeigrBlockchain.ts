import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { ec as EC } from 'elliptic';
import { STARTING_BALANCE } from './config';
import { cryptoHash, verifySignature } from './utils';
import { Block, saveBlock, loadBlock } from './block.js';
import { Wallet } from './wallet';
import { Transaction } from './transaction';
import { createWallet } from './walletUtils';
import { GenesisBlock } from './genesisBlock';
import createBlockchain from './createBlockchain';
import { Blockchain } from './blockchain';
import loadBlockchain from './loadBlockchain';
import { CreateWalletPool, GetWalletPool, UpdateWalletPool } from './walletPool';
import { CreateBlockPool, GetBlockPool, SaveBlockPool, LoadBlockPool } from './blockPool';
import { TransactionPool } from './transactionPool';
import { CreateBlockchainPool } from './blockchainPool';
import logger from './logger';

const walletDirectory = path.join(process.env.HOME, 'Seigr', 'wallets');
const blockDirectory = path.join(process.env.HOME, 'Seigr', 'blocks');
const transactionDirectory = path.join(process.env.HOME, 'Seigr', 'transactions');
const blockchainDirectory = path.join(process.env.HOME, 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(process.env.HOME, 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(process.env.HOME, 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(process.env.HOME, 'Seigr', 'transactionPools');

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
    logger.error(`Error creating directories: ${error.message}`);
    throw new Error(`Error creating directories: ${error.message}`);
  }
};

const loadOrCreateSenderWallet = async () => {
  const senderWalletPath = path.join(walletDirectory, 'sender-wallet.json');
  let newSenderWallet;
  try {
    const walletData = await fs.readFile(senderWalletPath, 'utf8');
    newSenderWallet = JSON.parse(walletData);
  } catch (error) {
    logger.error(`Error reading wallet from disk: ${error.message}`);
    newSenderWallet = createWallet({ Wallet: Wallet });
    try {
      await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet));
      logger.info('New sender wallet generated successfully.');
    } catch (writeError) {
      logger.error(`Error writing sender wallet to disk: ${writeError.message}`);
    }
  }
  return newSenderWallet;
};


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

const saveBlockchain = async (blockchain) => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain, null, 2), 'utf8');
  } catch (error) {
    logger.error(`Error saving blockchain: ${error.message}`);
    throw new Error(`Error saving blockchain: ${error.message}`);
  }
};

const createBlock = (previousHash, processedTransactions) => {
  const ec = new EC('secp256k1');
  const keyPair = ec.genKeyPair(); // Generate a new private key each time
  const minerIdentifier = keyPair.getPublic().encode('hex', false);


  return new Block({
    timestamp: Date.now(),
    lastHash: previousHash,
    hash: cryptoHash(previousHash),
    data: processedTransactions,
    nonce: 0,
    difficulty: 0,
    transactions: processedTransactions,
    miner: minerIdentifier,
  });
};

class SeigrBlockchain {
  chain;
  walletPool;
  blockPool;

  constructor() {
    this.chain = [];
    this.walletPool = null;
    this.blockPool = null;
  }

  async initializePools() {
    this.walletPool = await CreateWalletPool();
    this.blockPool = await CreateBlockPool();
  }

  async addBlock(transactions) {
    if (!transactions || transactions.length === 0) {
      throw new Error('Block does not contain any transactions.');
    }

    const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;
    const processedTransactions = transactions.slice(); // Use a copy of the transactions array

    const newBlock = createBlock(previousHash, processedTransactions);

    try {
      await saveBlock(newBlock);
      await Promise.all(
        processedTransactions.map((transaction) =>
          fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`))
        )
      );

      const walletUpdatePromises = processedTransactions.map(async (transaction) => {
        const wallet = new Wallet({ walletId: transaction.input.address });
        const walletBalance = wallet.calculateBalance({ blockchain: this });
        await wallet.updateBalance({ blockchain: this, balance: walletBalance });
      });

      await Promise.all(walletUpdatePromises);

      this.chain.push(newBlock);
      await saveBlockchain(this);
      await this.walletPool.updateWalletPool();
      await this.blockPool.saveBlockPool();
      await this.blockPool.updateBlockchainPool(this);
    } catch (error) {
      logger.error(`Error adding block: ${error.message}`);
      throw new Error(`Error adding block: ${error.message}`);
    }
  }
}

const createOrLoadBlockchain = async () => {
  await ensureDirectoriesExist();
  const blockchain = await loadOrCreateBlockchain();
  await blockchain.initializePools();
  return blockchain;
};

export default createOrLoadBlockchain;
