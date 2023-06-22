import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { ec as EC } from 'elliptic';
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

const loadOrCreateSenderWallet = async (): Promise<Wallet> => {
  const senderWalletPath = path.join(walletDirectory, 'sender-wallet.json');
  let newSenderWallet;
  try {
    const walletData = await fs.readFile(senderWalletPath, 'utf8');
    newSenderWallet = JSON.parse(walletData);
  } catch (error) {
    console.error(`Error reading wallet from disk: ${error}`);
    newSenderWallet = createWallet({ Wallet });
    await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet));
  }
  return newSenderWallet;
};

const loadOrCreateBlockchain = async (): Promise<Blockchain> => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.access(blockchainPath);
    return loadBlockchain();
  } catch {
    const genesisWallet = await loadOrCreateSenderWallet();
    const genesisBlock = new GenesisBlock({ genesisWallet });
    await saveBlock(genesisBlock);
    const blockchain = createBlockchain();
    blockchain.addBlock(genesisBlock);
    await saveBlockchain(blockchain);
    return blockchain;
  }
};

const saveBlockchain = async (blockchain: Blockchain): Promise<void> => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain));
  } catch (error) {
    console.error('Error saving blockchain:', error);
    throw error;
  }
};

class SeigrBlockchainClass extends createBlockchain {
  chain: Block[];
  walletPool: ReturnType<typeof GetWalletPool>;
  blockPool: ReturnType<typeof GetBlockPool>;

  constructor() {
    super();
    this.chain = [];
    this.walletPool = null;
    this.blockPool = null;
  }

  async initializePools() {
    this.walletPool = await CreateWalletPool();
    this.blockPool = await CreateBlockPool();
  }

  async addBlock(transactions: Record<string, Transaction>): Promise<void> {
    if (!transactions || Object.keys(transactions).length === 0) {
      throw new Error('Block does not contain any transactions.');
    }

    const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;

    const processedTransactions = Object.values(transactions);

    const keyPair = EC.genKeyPair(); // Generate a key pair using elliptic's `ec` module

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
        processedTransactions.map((transaction) =>
          fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`))
        )
      );

      for (const transaction of processedTransactions) {
        const wallet = new Wallet({ walletId: transaction.input.address });
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
      throw error;
    }
  }
}

const createOrLoadBlockchain = async (): Promise<SeigrBlockchainClass> => {
  await ensureDirectoriesExist();
  const blockchain = await loadOrCreateBlockchain();
  await blockchain.initializePools();
  return blockchain;
};

export default createOrLoadBlockchain;
export {
  walletDirectory,
  blockDirectory,
  transactionDirectory,
  blockchainDirectory,
  walletPoolDirectory,
  blockPoolDirectory,
  transactionPoolDirectory,
};
