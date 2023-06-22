import { promises as fs, Dirent } from 'fs';
import path from 'path';
import os from 'os';
import { ec as EC, ec } from 'elliptic';
import { STARTING_BALANCE } from './config';
import { cryptoHash, verifySignature } from './utils';
import { Block, saveBlock, loadBlock } from './block.js';
import { Transaction, CreateTransaction, LoadTransaction } from './transaction.js';
import { createWallet } from './walletUtils';
import Wallet from './wallet';
import { GenesisBlock } from './genesisBlock';
import createBlockchain from './createBlockchain';
import { Blockchain } from './blockchain';
import loadBlockchain from './loadBlockchain';
import { CreateWalletPool, GetWalletPool, UpdateWalletPool } from './walletPool';
import { CreateBlockPool, GetBlockPool, SaveBlockPool, LoadBlockPool } from './blockPool';
import { TransactionPool } from './transactionPool';
import { CreateBlockchainPool } from './blockchainPool';

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');

/**
 * Ensures that the required directories exist.
 */
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
    throw new Error(`Error creating directories: ${error}`);
  }
};

/**
 * Loads or creates the sender wallet.
 * @returns The sender wallet.
 */
const loadOrCreateSenderWallet = async (): Promise<Wallet> => {
  const senderWalletPath = path.join(walletDirectory, 'sender-wallet.json');
  let newSenderWallet;
  try {
    const walletData = await fs.readFile(senderWalletPath, 'utf8');
    newSenderWallet = JSON.parse(walletData);
  } catch (error) {
    console.error(`Error reading wallet from disk: ${error}`);
    newSenderWallet = new createWallet({ Wallet });
    await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet));
  }
  return newSenderWallet;
};

/**
 * Loads or creates the blockchain.
 * @returns The blockchain.
 */
const loadOrCreateBlockchain = async (): Promise<Blockchain> => {
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

/**
 * Saves the blockchain to disk.
 * @param blockchain The blockchain to save.
 */
const saveBlockchain = async (blockchain: Blockchain): Promise<void> => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain));
  } catch (error) {
    throw new Error(`Error saving blockchain: ${error}`);
  }
};

/**
 * The SeigrBlockchain class.
 */
class SeigrBlockchainClass extends createBlockchain {
  chain: Block[];
  walletPool: ReturnType<typeof GetWalletPool>;
  blockPool: ReturnType<typeof GetBlockPool>;

  /**
   * Creates an instance of SeigrBlockchainClass.
   */
  constructor() {
    super();
    this.chain = [];
    this.walletPool = null;
    this.blockPool = null;
  }

  /**
   * Initializes the wallet pool and block pool.
   */
  async initializePools() {
    this.walletPool = await CreateWalletPool();
    this.blockPool = await CreateBlockPool();
  }

  /**
   * Adds a block to the blockchain.
   * @param transactions The transactions to include in the block.
   */
  async addBlock(transactions: Record<string, Transaction>): Promise<void> {
    if (!transactions || Object.keys(transactions).length === 0) {
      throw new Error('Block does not contain any transactions.');
    }

    const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;

    const processedTransactions = Object.values(transactions);

    const ec = new EC('secp256k1');
    const keyPair = ec.keyFromPrivate('private key');

    const minerIdentifier = keyPair.getPublic().encode('hex');

    const newBlock = new Block({
      timestamp: Date.now(),
      lastHash: previousHash,
      hash: cryptoHash(previousHash),
      data: processedTransactions,
      nonce: 0,
      difficulty: 0,
      transactions: processedTransactions,
      miner: minerIdentifier,
    });

    try {
      await saveBlock(newBlock);
      await Promise.all(
        processedTransactions.map((transaction: any) =>
          fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`))
        )
      );

      for (const transaction of processedTransactions) {
        const wallet = new Wallet({ walletId: (transaction as Transaction).input.address });
        const walletBalance = wallet.calculateBalance({ blockchain: this });
        await wallet.updateBalance({ blockchain: this, balance: walletBalance });
      }

      this.chain.push(newBlock);
      await saveBlockchain(this);
      await this.walletPool.updateWalletPool();
      await this.blockPool.saveBlockPool();
      await this.blockPool.updateBlockchainPool(this);
    } catch (error) {
      console.error('Error adding block:', error);
      throw new Error(`Error adding block: ${error}`);
    }
  }
}

/**
 * Initializes the blockchain.
 * @returns The initialized blockchain.
 */
const createOrLoadBlockchain = async (): Promise<SeigrBlockchainClass> => {
  await ensureDirectoriesExist();
  const blockchain = await loadOrCreateBlockchain();
  await blockchain.initializePools();
  return blockchain;
};

export default createOrLoadBlockchain;
export {
  SeigrBlockchainClass,
  walletDirectory,
  blockDirectory,
  transactionDirectory,
  blockchainDirectory,
  walletPoolDirectory,
  blockPoolDirectory,
  transactionPoolDirectory,
};
