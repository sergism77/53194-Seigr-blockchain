'use strict';

import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { cryptoHash, verifySignature } from './utils';
import { STARTING_BALANCE } from './config';
import { ec } from 'elliptic';
import { createBlock, Block, loadBlock } from './block.js';
import { Transaction, CreateTransaction, LoadTransaction } from './transaction.js';
import { createWallet } from './walletUtils';
import Wallet from './wallet';
import { GenesisBlock } from './genesisBlock';
import createBlockchain from './createBlockchain';
import { Blockchain } from './blockchain';
import loadBlockchain from './loadBlockchain';
import { CreateWalletPool, UpdateWalletPool } from './walletPool';
import { createBlockPool, getBlockPool, saveBlockPool, loadBlockPool } from './blockPool';
import { TransactionPool } from './transactionPool';
import { CreateBlockchainPool } from './blockchainPool';

// Generate a new key pair for the miner
const ec = new EC('secp256k1');
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
const ensureDirectoriesExist = async (): Promise<void> => {
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
const loadOrCreateSenderWallet = async (): Promise<Wallet> => {
  const senderWalletPath = path.join(walletDirectory, 'sender-wallet.json');
  try {
    const walletData = await fs.readFile(senderWalletPath, 'utf8');
    return JSON.parse(walletData);
  } catch {
    const newSenderWallet = new createWallet({ Wallet });
    await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet));
    return newSenderWallet;
  }
};

// Check if the blockchain exists
const createOrLoadBlockchain = async (): Promise<Blockchain> => {
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
const saveBlockchain = async (blockchain: Blockchain): Promise<void> => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain));
  } catch (error) {
    console.error('Error saving blockchain:', error);
    throw error;
  }
};

class CustomBlockchain extends createBlockchain {
  chain: Block[];
  walletPool: any;
  blockPool: any;

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

  async addBlock(transactions: any): Promise<void> {
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
        Object.values(transactions).map((transaction: any) =>
          fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`))
        )
      );

      for (const transaction of Object.values(transactions)) {
        const wallet = new Wallet({ walletId: transaction.input.address });
        const walletBalance = Wallet.calculateBalance({ blockchain: this });
        await Wallet.updateBalance({ blockchain: this, balance: walletBalance });
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

const initializeBlockchain = async (): Promise<CustomBlockchain> => {
  await ensureDirectoriesExist();
  const blockchain = await createOrLoadBlockchain();
  await blockchain.initializePools();
  return blockchain;
};

const blockchainInstancePromise = initializeBlockchain();

export {
  blockchainInstancePromise as blockchainInstance,
  walletDirectory,
  blockDirectory,
  transactionDirectory,
  blockchainDirectory,
  walletPoolDirectory,
  blockPoolDirectory,
  transactionPoolDirectory,
};
