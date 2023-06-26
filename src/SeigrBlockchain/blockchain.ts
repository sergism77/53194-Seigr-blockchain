import os from 'os';
import fs from 'fs/promises';
import path from 'path';
import { CryptoHash } from './utils';
import { Block, SaveBlock } from './block.js';
import Wallet from './wallet';
import { CreateWalletPool, UpdateWalletPool } from './walletPool';
import { CreateBlockPool, UpdateBlockPool } from './blockPool';
import { CreateTransactionPool, UpdateTransactionPool } from './transactionPool';
import { CreateBlockchainPool, UpdateBlockchainPool } from './blockchainPool';

const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transaction-pool');

class Blockchain {
  chain: Block[];

  constructor() {
    this.chain = [];
  }

  async addBlock(transactions: any, minerIdentifier: string) {
    // Custom logic for adding blocks to the blockchain
    if (!transactions || Object.keys(transactions).length === 0) {
      throw new Error('Block does not contain any transactions.');
    }

    const previousHash =
      this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : '';

    const newBlock = new Block({
      index: 0,
      previousHash: '',
      id: '',
      timestamp: Date.now(),
      lastHash: previousHash,
      hash: CryptoHash(previousHash),
      data: transactions,
      nonce: 0,
      difficulty: 0,
      transactions: transactions,
      miner: minerIdentifier,
    });

    try {
      await SaveBlock(newBlock);

      for (const transactionId of Object.keys(transactions)) {
        const transactionFilePath = path.join(
          transactionPoolDirectory,
          `${transactionId}.json`
        );
        if (await fileExists(transactionFilePath)) {
          await fs.unlink(transactionFilePath);
        }
      }

      for (const transaction of Object.values(transactions)) {
        if (
          transaction &&
          transaction.input &&
          transaction.input.address &&
          typeof transaction.input.address === 'string' // Check if the address is a string
        ) {
          const wallet = new Wallet({ address: transaction.input.address });
          const walletBalance = Wallet.calculateBalance({
            chain: this.chain,
            address: wallet.address,
          });
          await wallet.updateBalance(walletBalance);
        }
      }

      await this.saveBlockchain();
      await this.updatePools();
    } catch (error: any) {
      console.error('Error adding block:', error);
      throw error;
    }
  }

  async updatePools() {
    try {
      const walletPool = new CreateWalletPool({ chain: this.chain });
      await walletPool.updateWalletPool();

      const blockPool = new CreateBlockPool({ chain: this.chain });
      await blockPool.updateBlockPool();

      const transactionPool = new CreateTransactionPool({ chain: this.chain });
      await transactionPool.updateTransactionPool();

      const blockchainPool = new CreateBlockchainPool({ blockchain: this });
      await blockchainPool.updateBlockchainPool();
    } catch (error: any) {
      console.error('Error updating pools:', error);
      throw error;
    }
  }

  getBlocks(): Block[] {
    return this.chain;
  }

  async saveBlockchain() {
    const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
    try {
      await fs.writeFile(blockchainPath, JSON.stringify(this));
    } catch (error: any) {
      console.error('Error saving blockchain:', error);
      throw error;
    }
  }

  static async loadBlockchain(): Promise<Blockchain> {
    const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
    try {
      const blockchainJSON = await fs.readFile(blockchainPath, 'utf-8');
      const blockchainData = JSON.parse(blockchainJSON);
      const blockchain = new Blockchain();
      blockchain.chain = blockchainData.chain.map((blockData: any) => new Block(blockData));
      return blockchain;
    } catch (error: any) {
      console.error('Error loading blockchain:', error);
      throw error;
    }
  }
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export default Blockchain;
