'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionPool = exports.TransactionPoolMap = exports.TransactionPool = void 0;
const transaction_1 = require("./transaction");
class TransactionPool {
    constructor() {
        this.transactions = [];
        this.transactionMap = {};
        this.senderWallet = null;
    }
    setSenderWallet(senderWallet) {
        this.senderWallet = senderWallet;
    }
    addTransaction(transaction) {
        this.transactions.push(transaction);
        this.transactionMap[transaction.id] = transaction;
    }
    findTransaction(address) {
        return this.transactions.find((transaction) => transaction.input.address === address);
    }
    validTransactions() {
        return this.transactions.filter((transaction) => {
            const outputTotal = transaction.outputs.reduce((total, output) => total + output.amount, 0);
            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}`);
                return false;
            }
            if (!transaction_1.Transaction.verifyTransaction(transaction)) {
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
    clearBlockchainTransactions(blockchain) {
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
exports.TransactionPool = TransactionPool;
class TransactionPoolMap {
    constructor() {
        this.transactionPoolMap = {};
    }
    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }
}
exports.TransactionPoolMap = TransactionPoolMap;
class CreateTransactionPool {
    constructor({ blockchain }) {
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
exports.CreateTransactionPool = CreateTransactionPool;
