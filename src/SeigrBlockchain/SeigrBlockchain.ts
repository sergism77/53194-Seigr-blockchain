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
import { Logger } from './logger';

const logger = new Logger();

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
    logger.error('Error creating directories:', error);
    throw new Error('Error creating directories');
  }
};

const loadOrCreateSenderWallet = async (): Promise<Wallet> => {
  const senderWalletPath = path.join(walletDirectory, 'sender-wallet.json');
  let newSenderWallet;
  try {
    const walletData = await fs.readFile(senderWalletPath, 'utf8');
    newSenderWallet = JSON.parse(walletData);
  } catch (error) {
    logger.error(`Error reading wallet from disk: ${error}`);
    newSenderWallet = createWallet({ Wallet });
    try {
      await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet));
      logger.log('New sender wallet generated successfully.');
    } catch (writeError) {
      logger.error(`Error writing sender wallet to disk: ${writeError}`);
    }
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
    const blockchain = new createBlockchain();
    blockchain.addBlock(genesisBlock);
    await saveBlockchain(blockchain);
    return blockchain;
  }
};

const saveBlockchain = async (blockchain: Blockchain): Promise<void> => {
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain, null, 2), 'utf8');
  } catch (error) {
    logger.error(`Error saving blockchain: ${error}`);
    throw new Error('Error saving blockchain');
  }
};

const createBlock = (previousHash: string, processedTransactions: Transaction[]): Block => {
  const ec = new EC('secp256k1');
  const keyPair = ec.keyFromPrivate('private key');
  const minerIdentifier = keyPair.getPublic().encode('hex');

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
  chain: Block[];
  walletPool: ReturnType<typeof GetWalletPool>;
  blockPool: ReturnType<typeof GetBlockPool>;

  constructor() {
    this.chain = [];
    this.walletPool = null;
    this.blockPool = null;
  }

  async initializePools() {
    this.walletPool = await CreateWalletPool();
    this.blockPool = await CreateBlockPool();
  }

  async addBlock(transactions: Transaction[]): Promise<void> {
    if (!transactions || transactions.length === 0) {
      throw new Error('Block does not contain any transactions.');
    }

    const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;
    const processedTransactions = transactions.slice();

    const newBlock = createBlock(previousHash, processedTransactions);

    try {
      await saveBlock(newBlock);

      await Promise.all(
        processedTransactions.map((transaction: any) =>
          fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`))
        )
      );

      const batchSize = 10;
      const batches = processedTransactions.reduce((batches: Transaction[][], transaction, idx) => {
        const batchIndex = Math.floor(idx / batchSize);
        batches[batchIndex] = batches[batchIndex] || [];
        batches[batchIndex].push(transaction);
        return batches;
      }, []);

      for (const batch of batches) {
        const wallets = new Map<string, Wallet>();
        for (const transaction of batch) {
          const wallet = new Wallet({ walletId: (transaction as Transaction).input.address });
          wallets.set(wallet.walletId, wallet);
        }
        await Promise.all(
          Array.from(wallets.values()).map(wallet => {
            const balance = wallet.calculateBalance({ blockchain: this });
            return wallet.updateBalance({ blockchain: this, balance });
          })
        );
      }

      this.chain.push(newBlock);
      await saveBlockchain(this);
      await this.walletPool.updateWalletPool();
      await this.blockPool.saveBlockPool();
      await this.blockPool.updateBlockchainPool(this);
    } catch (error) {
      logger.error('Error adding block:', error);
      throw new Error('Error adding block');
    }
  }
}

const createOrLoadBlockchain = async (): Promise<SeigrBlockchain> => {
  await ensureDirectoriesExist();
  const blockchain = await loadOrCreateBlockchain();
  await blockchain.initializePools();
  return blockchain;
};

export default createOrLoadBlockchain;
export { SeigrBlockchain };
