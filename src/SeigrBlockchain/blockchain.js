'use strict';

const os = require('os');
const fs = require('fs').promises;
const path = require('path');
const { cryptoHash } = require('./utils');
const { createBlock, Block, saveBlock } = require('./block.js');
const { createWallet } = require('./walletUtils');
const Wallet = require('./wallet');
const { GenesisBlock } = require('./genesisBlock');
const { CreateWalletPool, UpdateWalletPool } = require('./walletPool');
const { CreateBlockPool, UpdateBlockPool } = require('./blockPool');
const { CreateTransactionPool, UpdateTransactionPool } = require('./transactionPool');
const { CreateBlockchainPool, UpdateBlockchainPool } = require('./blockchainPool');

const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

class Blockchain {
  constructor() {
    this.chain = []; // Initialize this.chain as an empty array
  }

  async addBlock(transactions) {
    // Custom logic for adding blocks to the blockchain
    if (!transactions || Object.keys(transactions).length === 0) {
      throw new Error('Block does not contain any transactions.');
    }

    const previousHash =
      this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;

    const newBlock = new Block({
      timestamp: Date.now(),
      lastHash: previousHash,
      hash: cryptoHash(previousHash),
      data: transactions,
      nonce: 0,
      difficulty: 0,
      transactions: transactions,
      miner: minerIdentifier,
    });

    try {
      await saveBlock(newBlock);

      for (const transaction of Object.values(transactions)) {
        if (transaction.id) {
          await fs.unlink(path.join(transactionPoolDirectory, `${transaction.id}.json`));
        }
      }

      for (const transaction of Object.values(transactions)) {
        if (transaction.input && transaction.input.address) {
          const wallet = new Wallet({ walletId: transaction.input.address });
          const walletBalance = wallet.calculateBalance({ blockchain: this });
          await wallet.updateBalance({ blockchain: this, balance: walletBalance });
        }
      }

      this.saveBlockchain();
      await this.updatePools();
    } catch (error) {
      console.error('Error adding block:', error);
      throw error;
    }
  }

  async updatePools() {
    try {
      const walletPool = await CreateWalletPool({ blockchain: this });
      await walletPool.updateWalletPool();

      const blockPool = await CreateBlockPool({ blockchain: this });
      await blockPool.updateBlockPool();

      const transactionPool = await CreateTransactionPool({ blockchain: this });
      await transactionPool.updateTransactionPool();

      const blockchainPool = await CreateBlockchainPool({ blockchain: this });
      await blockchainPool.updateBlockchainPool();
    } catch (error) {
      console.error('Error updating pools:', error);
      throw error;
    }
  }

  getBlocks() {
    return this.chain;
  }

  async saveBlockchain() {
    const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
    try {
      await fs.writeFile(blockchainPath, JSON.stringify(this));
    } catch (error) {
      console.error('Error saving blockchain:', error);
      throw error;
    }
  }

  static async loadBlockchain() {
    const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
    try {
      const blockchainJSON = await fs.readFile(blockchainPath, 'utf-8');
      return JSON.parse(blockchainJSON);
    } catch (error) {
      console.error('Error loading blockchain:', error);
      throw error;
    }
  }
}

module.exports = Blockchain;
