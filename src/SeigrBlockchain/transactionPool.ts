import { Transaction } from './transaction';
import Wallet from './wallet';

class TransactionPool {
  transactions: Transaction[];
  transactionMap: { [key: string]: Transaction };
  senderWallet: Wallet | null;

  constructor() {
    this.transactions = [];
    this.transactionMap = {};
    this.senderWallet = null;
  }

  setSenderWallet(senderWallet: Wallet | null): void {
    this.senderWallet = senderWallet;
  }

  addTransaction(transaction: Transaction | Transaction[]): void {
    if (Array.isArray(transaction)) {
      transaction.forEach((tx) => {
        this.transactions.push(tx);
        this.transactionMap[tx.id] = tx;
      });
    } else {
      this.transactions.push(transaction);
      this.transactionMap[transaction.id] = transaction;
    }
  }

  findTransaction(address: string): Transaction | undefined {
    return this.transactions.find(
      (transaction) => transaction.input.address === address
    );
  }

  validTransactions(): Transaction[] {
    return this.transactions.filter((transaction) => {
      const outputTotal = Object.values(transaction.outputMap).reduce(
        (total: number, outputAmount: number) => total + outputAmount,
        0
      );

      if (transaction.input.amount !== outputTotal) {
        console.log(`Invalid transaction from ${transaction.input.address}`);
        return false;
      }

      if (!transaction.verifyTransaction()) {
        console.log(`Invalid signature from ${transaction.input.address}`);
        return false;
      }

      return true;
    });
  }

  clear(): void {
    this.transactions = [];
    this.transactionMap = {};
  }

  clearBlockchainTransactions(blockchain: any): void {
    for (let i = 1; i < blockchain.chain.length; i++) {
      const block = blockchain.chain[i];

      for (let transaction of block.data) {
        const transactionInPool = this.transactionMap[transaction.id];

        if (transactionInPool) {
          transactionInPool.update({
            recipient: transaction.outputMap[transaction.senderWallet.publicKey()],
            amount: transaction.outputMap[transaction.senderWallet.publicKey()],
          });
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

  setTransactionPoolMap(transactionPoolMap: {
    [key: string]: TransactionPool;
  }): void {
    this.transactionPoolMap = transactionPoolMap;
  }
}

class CreateTransactionPool {
  blockchain: any;

  constructor({ blockchain }: { blockchain: any }) {
    this.blockchain = blockchain;
  }

  updateTransactionPool(): TransactionPool {
    const transactionPool = new TransactionPool();

    for (let i = 1; i < this.blockchain.chain.length; i++) {
      const block = this.blockchain.chain[i];

      for (let transaction of block.data) {
        if (!transactionPool.transactionMap[transaction.id]) {
          transactionPool.setSenderWallet(transaction.senderWallet);
          transactionPool.addTransaction(new Transaction(transaction));
        }
      }
    }

    return transactionPool;
  }
}

class UpdateTransactionPool {
  transactionPool: TransactionPool;
  transactionPoolMap: TransactionPoolMap;

  constructor({
    transactionPool,
    transactionPoolMap,
  }: {
    transactionPool: TransactionPool;
    transactionPoolMap: TransactionPoolMap;
  }) {
    this.transactionPool = transactionPool;
    this.transactionPoolMap = transactionPoolMap;
  }

  updateTransactionPool(): TransactionPool {
    for (let transactionPoolKey in this.transactionPoolMap.transactionPoolMap) {
      const transactionPool = this.transactionPoolMap.transactionPoolMap[
        transactionPoolKey
      ];
      transactionPool.setSenderWallet(transactionPool.senderWallet);
      transactionPool.addTransaction(transactionPool.transactions);
    }

    return this.transactionPool;
  }
}

export {
  TransactionPool,
  TransactionPoolMap,
  CreateTransactionPool,
  UpdateTransactionPool,
};
