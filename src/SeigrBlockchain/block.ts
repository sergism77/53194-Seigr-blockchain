import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { CryptoHash } from './utils';
import { Transaction } from './transaction';
import { GENESIS_DATA } from './genesis';
import { isEqual } from 'lodash';

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

interface BlockData {
  index: number;
  timestamp: number;
  previousHash: string;
  lastHash: string;
  hash: string;
  data: any;
  nonce: number;
  difficulty: number;
  transactions: Transaction[];
  miner: string;
}

export class Block {
  index: number;
  timestamp: number;
  previousHash: string;
  lastHash: string;
  hash: string;
  data: any;
  nonce: number;
  difficulty: number;
  transactions: Transaction[];
  miner: string;

  static chain: Block[] = []; // Define static chain property

  constructor(data: BlockData) {
    this.index = data.index;
    this.timestamp = data.timestamp;
    this.previousHash = data.previousHash;
    this.lastHash = data.lastHash;
    this.hash = data.hash;
    this.data = data.data;
    this.nonce = data.nonce;
    this.difficulty = data.difficulty;
    this.transactions = data.transactions;
    this.miner = data.miner;
  }

  static genesis(): Block {
    return new Block(GENESIS_DATA);
  }

  static adjustDifficulty({ originalBlock, timestamp }: { originalBlock: Block, timestamp: number }): number {
    const { difficulty } = originalBlock;
    if (difficulty < 1) return 1;
    if (timestamp - originalBlock.timestamp > MINE_RATE) return difficulty - 1;
    return difficulty + 1;
  }

  static isValidBlock(block: Block, lastBlock: Block): boolean {
    const { index, timestamp, hash, data, nonce, difficulty, transactions, miner } = block;
    const lastDifficulty = lastBlock.difficulty;
    const lastHash = lastBlock.hash;
    const expectedHash = CryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
    if (hash !== expectedHash) return false;
    if (Math.abs(lastDifficulty - difficulty) > 1) return false;
    return true;
  }

  static isValidChain(chain: Block[]): boolean {
    if (!isEqual(chain[0], Block.genesis())) return false;
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];
      if (!Block.isValidBlock(block, lastBlock)) return false;
      if (block.lastHash !== lastBlock.hash) return false;
    }
    return true;
  }

  static replaceChain(chain: Block[]): void {
    if (chain.length <= this.chain.length) {
      console.error('The incoming chain must be longer');
      return;
    }
    if (!Block.isValidChain(chain)) {
      console.error('The incoming chain must be valid');
      return;
    }
    console.log('Replacing chain with', chain);
    this.chain = chain;
  }

  static mineTransactionPool({ transactionPool, wallet }: { transactionPool: TransactionPool, wallet: Wallet }): Block {
    const validTransactions = transactionPool.validTransactions().slice();
    validTransactions.push(Transaction.rewardTransaction({ minerWallet: wallet }));
    const block = this.mineBlock({ lastBlock: this.chain[this.chain.length - 1], data: validTransactions });
    this.chain.push(block);
    return block;
  }

  async saveBlock(): Promise<void> {
    const blockPath = path.join(blockchainDirectory, `${this.hash}.json`);
    try {
      await fs.writeFile(blockPath, JSON.stringify(this));
    } catch (error) {
      console.error(`Failed to save block at ${blockPath}`, error);
    }
  }

  static async loadBlock(hash: string): Promise<Block | null> {
    const blockPath = path.join(blockchainDirectory, `${hash}.json`);
    try {
      const blockJsonBuffer = await fs.readFile(blockPath);
      const blockJson = blockJsonBuffer.toString(); // Convert Buffer to string
      return new this(JSON.parse(blockJson));
    } catch (error) {
      console.error(`Failed to load block at ${blockPath}`, error);
      return null;
    }
  }

  static mineBlock({ lastBlock, data }: { lastBlock: Block, data: any }): Block {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const index = lastBlock.index + 1;
    const difficulty = lastBlock.difficulty;
    let nonce = 0;
    let hash, miner;
    do {
      nonce++;
      hash = CryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
      miner = ec.genKeyPair().getPublic().encode('hex');
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
    return new this({ index, timestamp, lastHash, data, nonce, difficulty, hash, miner });
  }
}

export const SaveBlock = async (block: Block): Promise<void> => {
  const blockPath = path.join(blockchainDirectory, `${block.hash}.json`);
  try {
    await fs.writeFile(blockPath, JSON.stringify(block));
  } catch (error) {
    console.error(`Failed to save block at ${blockPath}`, error);
  }
};

export const LoadBlock = async (blockHash: string): Promise<any> => {
  const blockPath = path.join(blockchainDirectory, `${blockHash}.json`);
  try {
    const blockJsonBuffer = await fs.readFile(blockPath);
    const blockJson = blockJsonBuffer.toString(); // Convert Buffer to string
    return JSON.parse(blockJson);
  } catch (error) {
    console.error(`Failed to load block at ${blockPath}`, error);
    return null;
  }
};
