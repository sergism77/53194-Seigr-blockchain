/* The Block class represents a block in a blockchain and provides methods for mining, validating, and
saving blocks. */
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { CryptoHash } from './utils';
import { Transaction } from './transaction';
import { GENESIS_DATA } from './genesis';
import { isEqual } from 'lodash';
import Wallet from './wallet';
import { TransactionPool } from './transactionPool';
import { ec } from 'elliptic';

const ellipticCurve = new ec('secp256k1');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

/* The `interface BlockData` defines the structure of the data that is used to create a new `Block`
instance. It specifies the properties and their types that are required to create a new block, such
as the block's index, timestamp, previous hash, last hash, hash, data, nonce, difficulty,
transactions, and miner. This interface is used to ensure that the data passed to the `Block`
constructor is in the correct format and has all the required properties. */
export interface BlockData {
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
  id: string;
}

/* The Block class defines the properties and methods for creating and managing blocks in a blockchain. */
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
  id: string; // Unique ID property for the block

  static chain: Block[] = [];
  static MINE_RATE: number = 60000; // Define MINE_RATE static property

  /**
   * This function constructs a block object with the given data and generates a unique ID for the block.
   * @param {BlockData} data - The parameter `data` is an object of type `BlockData` which contains all
   * the necessary data to create a new block in a blockchain. It includes the index of the block, the
   * timestamp of when it was created, the hash of the previous block, the hash of the current block, the
   */
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
    this.id = data.id; // Generate the unique ID for the block
  }

  /**
   * The function "genesis" returns a new block with the data specified in the constant "GENESIS_DATA".
   * @returns A new Block object with the data specified in the GENESIS_DATA constant.
   */
  static genesis(): Block {
    return new Block(GENESIS_DATA);
  }

  /**
   * This function adjusts the difficulty of a block based on the original block's difficulty and
   * timestamp.
   * @param  - The `adjustDifficulty` function takes in an object with two properties:
   * @returns The function `adjustDifficulty` returns a number, which is the adjusted difficulty level
   * based on the original block's difficulty and timestamp.
   */
  static adjustDifficulty({ originalBlock, timestamp }: { originalBlock: Block; timestamp: number }): number {
    const { difficulty } = originalBlock;
    if (difficulty < 1) return 1;
    if (timestamp - originalBlock.timestamp > Block.MINE_RATE) return difficulty - 1;
    return difficulty + 1;
  }

  /**
   * The function checks if a given block is valid by comparing its hash and difficulty with the previous
   * block's hash and difficulty.
   * @param {Block} block - a block object that contains information about the current block being
   * validated, including its index, timestamp, hash, data, nonce, difficulty, transactions, and miner.
   * @param {Block} lastBlock - The `lastBlock` parameter is an object of type `Block` that represents
   * the last block in the blockchain before the current block being validated. It contains information
   * such as the index, timestamp, hash, data, nonce, difficulty, transactions, and miner of the last
   * block.
   * @returns A boolean value is being returned, which indicates whether the given block is valid or not.
   */
  static isValidBlock(block: Block, lastBlock: Block): boolean {
    const { index, timestamp, hash, data, nonce, difficulty, transactions, miner } = block;
    const lastDifficulty = lastBlock.difficulty;
    const lastHash = lastBlock.hash;
    const expectedHash = CryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
    if (hash !== expectedHash) return false;
    if (Math.abs(lastDifficulty - difficulty) > 1) return false;
    return true;
  }

  /**
   * This function checks if a given blockchain is valid by verifying each block's validity and ensuring
   * they are linked correctly.
   * @param {Block[]} chain - An array of Block objects representing a blockchain.
   * @returns A boolean value indicating whether the given chain of blocks is valid or not.
   */
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

  /**
   * This function replaces the current blockchain with a new one if it is longer and valid.
   * @param {Block[]} chain - An array of Block objects representing the new blockchain that will replace
   * the current one.
   * @returns Nothing is being returned. The function is of type `void`, which means it does not return
   * any value.
   */
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

  /**
   * The function mines a new block with valid transactions from the transaction pool and adds it to the
   * blockchain.
   * @param  - The `mineTransactionPool` function takes in an object with two properties:
   * @returns a mined block.
   */
  static mineTransactionPool({ transactionPool, wallet }: { transactionPool: TransactionPool; wallet: Wallet }): Block {
    const validTransactions = transactionPool.validTransactions().slice();
    validTransactions.push(Transaction.rewardTransaction({ minerWallet: wallet }));
    const block = Block.mineBlock({
      lastBlock: Block.chain[Block.chain.length - 1],
      data: validTransactions,
      wallet,
    });
    Block.chain.push(block);
    return block;
  }

  /**
   * This function saves a block as a JSON file in a specified directory.
   */
  async saveBlock(): Promise<void> {
    const blockPath = path.join(blockchainDirectory, `${this.hash}.json`);
    try {
      await fs.writeFile(blockPath, JSON.stringify(this));
    } catch (error) {
      console.error(`Failed to save block at ${blockPath}`, error);
    }
  }

  /**
   * This function loads a block from a file in JSON format and returns it as a Block object, or returns
   * null if it fails.
   * @param {string} hash - The hash parameter is a string representing the hash of a block that needs to
   * be loaded from a file.
   * @returns a Promise that resolves to a Block object or null if the block cannot be loaded.
   */
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

  /**
   * This function mines a new block with a given set of data and adds it to the blockchain.
   * @param  - - `lastBlock`: The last block in the blockchain, which this new block will be linked to.
   * @returns A new block object is being returned.
   */
  static mineBlock({ lastBlock, data, wallet }: { lastBlock: Block; data: Transaction[]; wallet: Wallet }): Block {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const index = lastBlock.index + 1;
    const difficulty = lastBlock.difficulty;
    let nonce = 0;
    let hash, miner;
    do {
      nonce++;
      hash = CryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
      miner = ellipticCurve.keyFromPrivate(wallet.getPrivateKey()).getPublic().encode('hex', true);
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
    return new this({
      index,
      timestamp,
      previousHash: lastHash,
      lastHash,
      hash,
      data,
      nonce,
      difficulty,
      transactions: data,
      miner,
      id: Block.generateBlockId(index, hash),
    });
  }

  static generateBlockId(index: number, hash: string): string {
    return `${index}-${hash}`;
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

export const LoadBlock = async (blockHash: string): Promise<Block | null> => {
  const blockPath = path.join(blockchainDirectory, `${blockHash}.json`);
  try {
    const blockJsonBuffer = await fs.readFile(blockPath);
    const blockJson = blockJsonBuffer.toString(); // Convert Buffer to string
    return new Block(JSON.parse(blockJson));
  } catch (error) {
    console.error(`Failed to load block at ${blockPath}`, error);
    return null;
  }
};

// Create an instance of the Block class
const block = new Block({
  index: GENESIS_DATA.index,
  timestamp: Date.now(),
  previousHash: GENESIS_DATA.previousHash,
  lastHash: GENESIS_DATA.lastHash,
  hash: GENESIS_DATA.hash,
  data: GENESIS_DATA.data,
  nonce: GENESIS_DATA.nonce,
  difficulty: GENESIS_DATA.difficulty,
  transactions: GENESIS_DATA.transactions,
  miner: GENESIS_DATA.miner,
  id: Block.generateBlockId(GENESIS_DATA.index, GENESIS_DATA.hash),
});

// Use the block instance as needed
console.log(block);
