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

interface DirectoryPaths {
  wallet: string;
  block: string;
  transaction: string;
  blockchain: string;
  walletPool: string;
  blockPool: string;
  transactionPool: string;
}

const directories: DirectoryPaths = {
  wallet: path.join(os.homedir(), 'Seigr', 'wallets'),
  block: path.join(os.homedir(), 'Seigr', 'blocks'),
  transaction: path.join(os.homedir(), 'Seigr', 'transactions'),
  blockchain: path.join(os.homedir(), 'Seigr', 'blockchain'),
  walletPool: path.join(os.homedir(), 'Seigr', 'walletPools'),
  blockPool: path.join(os.homedir(), 'Seigr', 'blockPools'),
  transactionPool: path.join(os.homedir(), 'Seigr', 'transactionPools'),
};

const ensureDirectoriesExist = async (): Promise<void> => {
  try {
    await Promise.all(
      Object.values(directories).map(directory => fs.mkdir(directory, { recursive: true }))
    );
  } catch (error) {
    throw new Error(`Error creating directories: ${error}`);
  }
};

const loadOrCreateSenderWallet = async (): Promise<Wallet> => {
  const senderWalletPath = path.join(directories.wallet, 'sender-wallet.json');
  let newSenderWallet;
  try {
    const walletData = await fs.readFile(senderWalletPath, 'utf8');
    newSenderWallet = JSON.parse(walletData);
  } catch (error) {
    console.error(`Error reading wallet from disk: ${error}`);
    newSenderWallet = createWallet({ Wallet });
    try {
      await fs.writeFile(senderWalletPath, JSON.stringify(newSenderWallet));
      console.log('New sender wallet generated successfully.');
    } catch (writeError) {
      console.error(`Error writing sender wallet to disk: ${writeError}`);
    }
  }
  return newSenderWallet;
};

const loadOrCreateBlockchain = async (): Promise<Blockchain> => {
  const blockchainPath = path.join(directories.blockchain, 'blockchain.json');
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
  const blockchainPath = path.join(directories.blockchain, 'blockchain.json');
  try {
    await fs.writeFile(blockchainPath, JSON.stringify(blockchain, null, 2), 'utf8');
  } catch (error) {
    throw new Error(`Error saving blockchain: ${error}`);
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
    const newBlock = createBlock(previousHash, processedTransactions);

    try {
      await saveBlock(newBlock);

      await Promise.all(
        processedTransactions.map((transaction: any) =>
          fs.unlink(path.join(directories.transactionPool, `${transaction.id}.json`))
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
      console.error('Error adding block:', error);
      throw new Error(`Error adding block: ${error}`);
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
  SeigrBlockchainClass,
  directories,
};
