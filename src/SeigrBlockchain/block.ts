import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { CryptoHash } from './utils';
import { STARTING_BALANCE } from './config';
import ec from 'elliptic';
import { Transaction } from './transaction';
import { GENESIS_DATA } from './genesis';

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

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

  constructor({ index, timestamp, previousHash, lastHash, hash, data, nonce, difficulty, transactions, miner }: { index: number, timestamp: number, previousHash: string, lastHash: string, hash: string, data: any, nonce: number, difficulty: number, transactions: Transaction[], miner: string }) {
    this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
    this.transactions = transactions;
    this.miner = miner;
  }

  static genesis() {
    return new Block(GENESIS_DATA);
  }

  static adjustDifficulty({ originalBlock, timestamp }: { originalBlock: Block, timestamp: number }) {
    const { difficulty } = originalBlock;
    if (difficulty < 1) return 1;
    if (timestamp - originalBlock.timestamp > MINE_RATE) return difficulty - 1;
    return difficulty + 1;
  }

  static isValidBlock(block: Block, lastBlock: Block) {
    const { index, timestamp, hash, data, nonce, difficulty, transactions, miner } = block;
    const lastDifficulty = lastBlock.difficulty;
    const lastHash = lastBlock.hash;
    const expectedHash = CryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
    if (hash !== expectedHash) return false;
    if (Math.abs(lastDifficulty - difficulty) > 1) return false;
    return true;
  }

  static isValidChain(chain: Block[]) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];
      if (!Block.isValidBlock(block, lastBlock)) return false;
      if (block.lastHash !== lastBlock.hash) return false;
    }
    return true;
  }

  static replaceChain(chain: Block[]) {
    if (chain.length <= this.chain.length) {
      console.error('The incoming chain must be longer');
      return;
    }
    if (!Block.isValidChain(chain)) {
      console.error('The incoming chain must be valid');
      return;
    }
    console.log('replacing chain with', chain);
    this.chain = chain;
  }

  static mineTransactionPool({ transactionPool, wallet }: { transactionPool: TransactionPool, wallet: Wallet }) {
    const validTransactions = transactionPool.validTransactions().slice();
    validTransactions.push(Transaction.rewardTransaction({ minerWallet: wallet }));
    const block = this.mineBlock({ lastBlock: this.chain[this.chain.length - 1], data: validTransactions });
    this.chain.push(block);
    return block;
  }

  async saveBlock() {
    const blockPath = path.join(blockchainDirectory, `${this.hash}.json`);
    try {
      await fs.writeFile(blockPath, JSON.stringify(this));
    } catch (error) {
      console.error(`Failed to save block at ${blockPath}`, error);
    }
  }

  static async loadBlock(hash: string) {
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
  

  static mineBlock({ lastBlock, data }: { lastBlock: Block, data: any }) {
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

export const SaveBlock = async (block: Block) => {
  const blockPath = path.join(blockchainDirectory, `${block.hash}.json`);
  try {
    await fs.writeFile(blockPath, JSON.stringify(block));
  } catch (error) {
    console.error(`Failed to save block at ${blockPath}`, error);
  }
};

export const LoadBlock = async (blockHash: string) => {
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

