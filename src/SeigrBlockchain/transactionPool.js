//this is the transaction pool class

//import all needed modules
const transaction = require('./transaction');

class transactionPool {
    constructor() {
        this.transactions = [];
        this.transactionMap = {};
        this.senderWallet = null;
    }

    //set wallet
    setSenderWallet(senderWallet) {
        this.senderWallet = senderWallet;

    }


    //add transaction to the pool
    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    //find transaction by address
    findTransaction(address) {
        return this.transactions.find(transaction => transaction.input.address === address);
    }

    //validating transactions
    validTransactions() {
        return this.transactions.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}`);
                return;
            }

            if (!transaction.verifyTransaction()) {
                console.log(`Invalid signature from ${transaction.input.address}`);
                return;
            }

            return transaction;
        });
    }

    //clearing transactions
    clear() {
        this.transactions = [];
    }

    //clearing transactions
    clearBlockchainTransactions(blockchain) {
        for (let i = 1; i < blockchain.chain.length; i++) {
            const block = blockchain.chain[i];

            for (let transaction of block.data) {
                const transactionInPool = this.transactions.find(t => t.id === transaction.id);

                if (transactionInPool) {
                    transactionInPool.update(transaction);
                }
            }
        }
    }

}

class transactionPoolMap {
    constructor() {
        this.transactionPoolMap = {};
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }

    setTransactionPoolMap(transactionPoolMap) {
        this.transactionPoolMap = transactionPoolMap;
    }
}

module.exports = { transactionPool, transactionPoolMap };