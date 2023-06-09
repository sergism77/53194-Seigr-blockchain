import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { ec as EC } from 'elliptic';
import { STARTING_BALANCE } from './config';
import { CryptoHash, VerifySignature } from './utils';
import { Block, SaveBlock, LoadBlock } from './block';
import Wallet from './wallet';
import { Transaction } from './transaction';
import { createWallet } from './walletUtils';
import { GenesisBlock } from './genesisBlock';
import createBlockchain  from './createBlockchain';
import  Blockchain from './blockchain';
import loadBlockchain from './loadBlockchain';
import { CreateWalletPool, GetWalletPool, UpdateWalletPool } from './walletPool';
import { CreateBlockPool, GetBlockPool, SaveBlockPool, LoadBlockPool } from './blockPool';
import { TransactionPool } from './transactionPool';
import { CreateBlockchainPool } from './blockchainPool';
import logger from './logger';

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');

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
  try {
    await fs.access(senderWalletPath);
    const senderWalletContents = await fs.readFile(senderWalletPath, 'utf8');
    const senderWallet = JSON.parse(senderWalletContents);
    logger.info('Sender wallet loaded successfully.');
    return senderWallet;
  } catch {
    const ec = new EC('secp256k1');
    const senderWallet = ec.genKeyPair();
    const publicKey = senderWallet.getPublic().encode('hex', false);
    const privateKey = senderWallet.getPrivate().toString(16);

    const newSenderWallet = { publicKey, privateKey };

    try {
      await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet), 'utf8');
      logger.info('New sender wallet generated and saved successfully.');
    } catch (writeError) {
      logger.error(`Error writing sender wallet to disk: ${writeError.message}`);
    }
    return newSenderWallet;
  }
};


const loadOrCreateBlockchain = async () => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.access(blockchainPath);
    return loadBlockchain();
  } catch {
    const genesisWallet = await loadOrCreateSenderWallet();
    const genesisBlock = new GenesisBlock({ genesisWallet });
    await SaveBlock(genesisBlock);
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
    hash: CryptoHash(previousHash),
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
      await SaveBlock(newBlock);
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
