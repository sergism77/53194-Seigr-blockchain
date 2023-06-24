'use strict';

import { Transaction } from './transaction';

class TransactionPool {
  transactions: Transaction[];
  transactionMap: { [key: string]: Transaction };
  senderWallet: any;

  constructor() {
    this.transactions = [];
    this.transactionMap = {};
    this.senderWallet = null;
  }

  setSenderWallet(senderWallet: any) {
    this.senderWallet = senderWallet;
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionMap[transaction.id] = transaction;
  }

  findTransaction(address: string) {
    return this.transactions.find(
      (transaction) => transaction.input.address === address
    );
  }

  validTransactions() {
    return this.transactions.filter((transaction) => {
      const outputTotal = transaction.outputs.reduce(
        (total, output) => total + output.amount,
        0
      );

      if (transaction.input.amount !== outputTotal) {
        console.log(`Invalid transaction from ${transaction.input.address}`);
        return false;
      }

      if (!Transaction.verifyTransaction(transaction)) {
        console.log(`Invalid signature from ${transaction.input.address}`);
        return false;
      }

      return true;
    });
  }

  clear() {
    this.transactions = [];
    this.transactionMap = {};
  }

  clearBlockchainTransactions(blockchain: any) {
    for (let i = 1; i < blockchain.chain.length; i++) {
      const block = blockchain.chain[i];

      for (let transaction of block.data) {
        const transactionInPool = this.transactionMap[transaction.id];

        if (transactionInPool) {
          transactionInPool.update(transaction);
        }
      }
    }
  }
}

class TransactionPoolMap {
  transactionPoolMap: { [key: string]: TransactionPool };

  constructor() {
    this.transactionPoolMap = {};
  }

  setTransactionPoolMap(transactionPoolMap: { [key: string]: TransactionPool }) {
    this.transactionPoolMap = transactionPoolMap;
  }
}

class CreateTransactionPool {
  blockchain: any;

  constructor({ blockchain }: { blockchain: any }) {
    this.blockchain = blockchain;
  }

  updateTransactionPool() {

    const transactionPool = new TransactionPool();

    for (let i = 1; i < this.blockchain.chain.length; i++) {

      const block = this.blockchain.chain[i];

      for (let transaction of block.data) {

        if (!transactionPool.transactionMap[transaction.id]) {

          transactionPool.setSenderWallet(transaction.senderWallet);

          transactionPool.addTransaction(transaction);

        }
      }
    }

    return transactionPool;

  }
}


export { TransactionPool, TransactionPoolMap, CreateTransactionPool };