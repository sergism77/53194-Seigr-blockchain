const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { verifySignature } = require('./utils');
const { createGenesisWallet, createWallet, saveWallet, loadWallet } = require('./walletUtils');
const { createGenesisBlock, saveGenesisBlock, loadGenesisBlock } = require('./genesisBlock.js');
const { MINE_RATE } = require('./config');
const { Transaction } = require('./transaction');
const { GENESIS_DATA } = require('./genesis');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

class Block {
  constructor({ index, timestamp, previousHash, lastHash, hash, data, nonce, difficulty, transactions, miner }) {
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

  static adjustDifficulty({ originalBlock, timestamp }) {
    const { difficulty } = originalBlock;
    if (difficulty < 1) return 1;
    if (timestamp - originalBlock.timestamp > MINE_RATE) return difficulty - 1;
    return difficulty + 1;
  }

  static isValidBlock(block, lastBlock) {
    const { index, timestamp, hash, data, nonce, difficulty, transactions, miner } = block;
    const lastDifficulty = lastBlock.difficulty;
    const lastHash = lastBlock.hash;
    const expectedHash = cryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
    if (hash !== expectedHash) return false;
    if (Math.abs(lastDifficulty - difficulty) > 1) return false;
    return true;
  }

  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];
      if (!Block.isValidBlock(block, lastBlock)) return false;
      if (block.lastHash !== lastBlock.hash) return false;
    }
    return true;
  }

  static replaceChain(chain) {
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

  static mineTransactionPool({ transactionPool, wallet }) {
    const validTransactions = transactionPool.validTransactions();
    validTransactions.push(Transaction.rewardTransaction({ minerWallet: wallet }));
    const block = this.mineBlock({ lastBlock: this.chain[this.chain.length - 1], data: validTransactions });
    this.chain.push(block);
    return block;
  }

  saveBlock() {
    const blockPath = path.join(blockchainDirectory, `${this.hash}.json`);
    fs.writeFileSync(blockPath, JSON.stringify(this));
  }

  static loadBlock(hash) {
    const blockPath = path.join(blockchainDirectory, `${hash}.json`);
    const blockJson = JSON.parse(fs.readFileSync(blockPath));
    return new this(blockJson);
  }

  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const index = lastBlock.index + 1;
    const difficulty = lastBlock.difficulty;
    let nonce = 0;
    let hash, miner;
    do {
      nonce++;
      hash = cryptoHash(index, timestamp, lastHash, data, nonce, difficulty);
      miner = ec.genKeyPair().getPublic().encode('hex');
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
    return new this({ index, timestamp, lastHash, data, nonce, difficulty, hash, miner });
  }
}

const saveBlock = (block) => {
  fs.writeFileSync(
    path.join(blockchainDirectory, `${block.hash}.json`),
    JSON.stringify(block)
  );
};

const loadBlock = (blockHash) => {
  const block = JSON.parse(fs.readFileSync(path.join(blockchainDirectory, `${blockHash}.json`)));
  return block;
};


module.exports = { Block, saveBlock, loadBlock };
