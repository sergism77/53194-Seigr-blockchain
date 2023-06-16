const os = require('os');
const fs = require('fs');
const path = require('path');
const { cryptoHash } = require('./utils');
const { createBlock, Block, saveBlock } = require('./block.js');
const { createWallet } = require('./walletUtils');
const Wallet = require('./wallet');
const { GenesisBlock } = require('./genesisBlock');
const { CreateWalletPool, GetWalletPool, UpdateWalletPool } = require('./walletPool');
const { CreateBlockPool, GetBlockPool, SaveBlockPool, LoadBlockPool } = require('./blockPool');
const { TransactionPool, TransactionPoolMap, CreateTransactionPool } = require('./transactionPool');
const { BlockchainPool, CreateBlockchainPool } = require('./blockchainPool');

const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

class Blockchain {
  constructor() {
    this.chain = []; // Initialize this.chain as an empty array
  }

  addBlock(transactions) {
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

    // Save the block to the blockchain
    saveBlock(newBlock);

    // Remove the transactions from the transaction pool
    Object.values(transactions).forEach((transaction) => {
      if (transaction.id) {
        fs.unlinkSync(
          path.join(transactionPoolDirectory, `${transaction.id}.json`)
        );
      }
    });

    // Update the wallet balances
    Object.values(transactions).forEach((transaction) => {
      if (transaction.input && transaction.input.address) {
        const wallet = new Wallet({ walletId: transaction.input.address });
        const walletBalance = wallet.calculateBalance({ blockchain: this });
        wallet.updateBalance({ blockchain: this, balance: walletBalance });
      }
    });

    // Save the blockchain
    this.saveBlockchain();

    // Update the wallet pool
    const WalletPool = CreateWalletPool({ blockchain: this });
    WalletPool.updateWalletPool();

    // Update the block pool
    const BlockPool = CreateBlockPool({ blockchain: this });
    BlockPool.updateBlockPool();

    // Update the transaction pool
    const TransactionPool = CreateTransactionPool({ blockchain: this });
    TransactionPool.updateTransactionPool();

    // Update the blockchain pool
    const BlockchainPool = CreateBlockchainPool({ blockchain: this });
    BlockchainPool.updateBlockchainPool();
  }

  getBlocks() {
    return this.chain;
  }

  saveBlockchain() {
    const blockchainJSON = JSON.stringify(this);
    fs.writeFileSync(
      path.join(blockchainDirectory, 'blockchain.json'),
      blockchainJSON
    );
  }

  static loadBlockchain() {
    const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
    if (fs.existsSync(blockchainPath)) {
      const blockchainJSON = fs.readFileSync(blockchainPath, 'utf-8');
      return JSON.parse(blockchainJSON);
    } else {
      throw new Error('No existing blockchain found.');
    }
  }
}

module.exports = Blockchain;
