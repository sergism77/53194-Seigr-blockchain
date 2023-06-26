"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionPool = exports.CreateTransactionPool = exports.TransactionPoolMap = exports.TransactionPool = exports.Transaction = void 0;
const transaction_1 = require("./transaction");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return transaction_1.Transaction; } });
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
        if (Array.isArray(transaction)) {
            transaction.forEach((tx) => {
                this.transactions.push(tx);
                this.transactionMap[tx.id] = tx;
            });
        }
        else {
            this.transactions.push(transaction);
            this.transactionMap[transaction.id] = transaction;
        }
    }
    findTransaction(address) {
        return this.transactions.find((transaction) => transaction.input.address === address);
    }
    validTransactions() {
        return this.transactions.filter((transaction) => {
            const outputTotal = Object.values(transaction.outputMap).reduce((total, outputAmount) => total + outputAmount, 0);
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
    clear() {
        this.transactions = [];
        this.transactionMap = {};
    }
    clearBlockchainTransactions(blockchain) {
        for (let i = 1; i < blockchain.chain.length; i++) {
            const block = blockchain.chain[i];
            for (let transaction of block.data) {
                const transactionInPool = this.transactionMap[transaction.id];
                if (transactionInPool && transactionInPool.id === transaction.id) {
                    transactionInPool.update({
                        recipient: transaction.outputMap[transaction.senderWallet.publicKey()],
                        amount: transaction.outputMap[transaction.senderWallet.publicKey()],
                    });
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
                    transactionPool.addTransaction(new transaction_1.Transaction(transaction));
                }
            }
        }
        return transactionPool;
    }
}
exports.CreateTransactionPool = CreateTransactionPool;
class UpdateTransactionPool {
    constructor({ transactionPool, transactionPoolMap, }) {
        this.transactionPool = transactionPool;
        this.transactionPoolMap = transactionPoolMap;
    }
    updateTransactionPool() {
        for (let transactionPoolKey in this.transactionPoolMap.transactionPoolMap) {
            const transactionPool = this.transactionPoolMap.transactionPoolMap[transactionPoolKey];
            transactionPool.setSenderWallet(transactionPool.senderWallet);
            transactionPool.addTransaction(transactionPool.transactions);
        }
        return this.transactionPool;
    }
}
exports.UpdateTransactionPool = UpdateTransactionPool;
