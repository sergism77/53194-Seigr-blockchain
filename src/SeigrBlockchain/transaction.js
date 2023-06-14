const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');

const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');

class Wallet {
  constructor() {
    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
    this.balance = STARTING_BALANCE;
  }

  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }
}

const senderWallet = new Wallet();


class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.id = cryptoHash(Date.now().toString());
    this.outputMap = this.createOutputMap({
      senderWallet,
      recipient,
      amount,
    });
    this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
  }

  createOutputMap() {
    const outputMap = {};
  
    if (this.senderWallet) {
      outputMap[this.senderWallet.publicKey()] = this.senderWallet.balance - this.amount;
    }
  
    outputMap[this.recipient] = this.amount;
  
    return outputMap;
  }
  
  
  createInput({ senderWallet, outputMap }) {
    return {
      timestamp: Date.now(),
      amount: senderWallet.balance,
      address: senderWallet.publicKey(), // Corrected line
      signature: senderWallet.sign(outputMap),
    };
  }

  static validateTransaction(transaction) {
    const {
      input: { address, amount, signature },
      outputMap,
    } = transaction;
    if (amount !== outputMap[address]) {
      console.error(`Invalid transaction from ${address}`);
      return false;
    }
    if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }
    return true;
  }
}


class TransactionPool {
  constructor() {
    this.transactions = [];
  }

  updateOrAddTransaction(transaction) {
    const transactionWithId = this.transactions.find(
      (t) => t.id === transaction.id
    );

    if (transactionWithId) {
      this.transactions[
        this.transactions.indexOf(transactionWithId)
      ] = transaction;
    } else {
      this.transactions.push(transaction);
    }
  }

  existingTransaction({ inputAddress }) {
    return this.transactions.find(
      (transaction) => transaction.input.address === inputAddress
    );
  }

  validTransactions() {
    return this.transactions.filter((transaction) =>
      Transaction.validateTransaction(transaction)
    );
  }

  clear() {
    this.transactions = [];
  }

  clearBlockchainTransactions({ chain }) {
    for (let block of chain) {
      for (let transaction of block.data) {
        const transactionWithId = this.transactions.find(
          (t) => t.id === transaction.id
        );
        if (transactionWithId) {
          this.transactions.splice(
            this.transactions.indexOf(transactionWithId),
            1
          );
        }
      }
    }
  }

  saveTransactionPool() {
    const transactionPoolPath = path.join(
      transactionDirectory,
      'transaction-pool.json'
    );
    fs.writeFileSync(
      transactionPoolPath,
      JSON.stringify(this.transactions)
    );
  }

  loadTransactionPool() {
    const transactionPoolPath = path.join(
      transactionDirectory,
      'transaction-pool.json'
    );
    if (fs.existsSync(transactionPoolPath)) {
      const transactions = JSON.parse(
        fs.readFileSync(transactionPoolPath, 'utf-8')
      );
      this.transactions = transactions;
    }
  }
}

const createTransaction = ({ senderWallet, recipient, amount }) => {
  if (amount > senderWallet.balance) {
    throw new Error('Amount exceeds balance');
  }

  return new Transaction({
    senderWallet: senderWallet, // Make sure the senderWallet object is passed correctly
    recipient: recipient,
    amount: amount,
  });
};


const createTransactionPool = () => {
  const transactionPool = new TransactionPool();
  transactionPool.loadTransactionPool();
  return transactionPool;
};

const saveTransactionPool = (transactionPool) => {
  transactionPool.saveTransactionPool();
};

const loadTransactionPool = () => {
  const transactionPool = new TransactionPool();
  transactionPool.loadTransactionPool();
  return transactionPool;
};

const createTransactionPoolRewardTimestamp = ({ transactionPool, wallet }) => {
  const timestamp = Date.now();
  const transaction = new Transaction({
    senderWallet: wallet.blockchainWallet(),
    recipient: wallet.blockchainWallet().address,
    amount: STARTING_BALANCE,
  });
  transactionPool.updateOrAddTransaction(transaction);
};

const createTransactionPoolRewardInput = ({ transactionPool, wallet }) => {
  return transactionPool.transactions.find(
    (transaction) =>
      Object.keys(transaction.outputMap).length === 1 &&
      transaction.outputMap[wallet.blockchainWallet().address] ===
        STARTING_BALANCE
  ).input;
};

const createTransactionPoolRewardOutput = ({ transactionPool, wallet }) => {
  return transactionPool.transactions.find(
    (transaction) =>
      Object.keys(transaction.outputMap).length === 1 &&
      transaction.outputMap[wallet.blockchainWallet().address] ===
        STARTING_BALANCE
  ).outputMap;
};

const saveTransaction = ({ transaction }) => {
  const transactionPath = path.join(
    transactionDirectory,
    `${transaction.id}.json`
  );
  fs.writeFileSync(transactionPath, JSON.stringify(transaction));
};

const loadTransaction = ({ transactionId }) => {
  const transactionPath = path.join(
    transactionDirectory,
    `${transactionId}.json`
  );
  if (fs.existsSync(transactionPath)) {
    const transaction = JSON.parse(
      fs.readFileSync(transactionPath, 'utf-8')
    );
    return transaction;
  }
  return null;
};

module.exports = {
  createTransaction,
  createTransactionPool,
  saveTransactionPool,
  loadTransactionPool,
  Transaction,
  createTransactionPoolRewardTimestamp,
  createTransactionPoolRewardInput,
  createTransactionPoolRewardOutput,
  saveTransaction,
  loadTransaction,
};
