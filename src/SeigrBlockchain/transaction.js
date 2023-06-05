//this is the transaction class

const { v4: uuidv4 } = require('uuid');
const { verifySignature } = require('./utils.js');
const { REWARD_INPUT, MINING_REWARD } = require('./config');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


class createTransaction {
    constructor({ senderWallet, recipient, amount, outputMap, input }) {
        this.id = uuidv4();
        this.outputMap = outputMap || this.createOutputMap({ senderWallet, recipient, amount });
        this.input = input || this.createInput({ senderWallet, outputMap: this.outputMap });
    }

    createOutputMap({ senderWallet, recipient, amount }) {
        const outputMap = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;
        return outputMap;
    }

    createInput({ senderWallet, outputMap }) {
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(outputMap)
        };
    }

    static validTransaction(transaction) {
        const { input: { address, amount, signature }, outputMap } = transaction;
        const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);
        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }

        return true;
    }

    static rewardTransaction({ minerWallet }) {
        return new this({
            input: REWARD_INPUT,
            outputMap: { [minerWallet.publicKey]: MINING_REWARD }
        });
    }

    update({ senderWallet, recipient, amount }) {
        if (amount > this.outputMap[senderWallet.publicKey]) {
            throw new Error('Amount exceeds balance');
        }
        if (!this.outputMap[recipient]) {
            this.outputMap[recipient] = amount;
        } else {
            this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }
        this.outputMap[senderWallet.publicKey] = this.outputMap[senderWallet.publicKey] - amount;
        this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
    }

    static transactionWithOutputs(senderWallet, outputs) {
        const transaction = new this();
        transaction.outputs.push(...outputs);
        transaction.signTransaction(senderWallet);
        return transaction;
    }

    static newTransaction(senderWallet, recipient, amount) {
        if (amount > senderWallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }
        return transaction.transactionWithOutputs(senderWallet, [
            { amount: senderWallet.balance - amount, address: senderWallet.publicKey },
            { amount, address: recipient }
        ]);
    }

    signTransaction(senderWallet) {
        this.input = {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(this.outputMap)
        }
    }
}

class transaction {
    constructor() {
        this.id = id;
        this.input = input;
        this.outputs = outputs;

        this.transaction = new transaction();
        this.transactionMap = new transactionMap();
        this.transactionPool = new transactionPool();
        this.transactionPoolMap = new transactionPoolMap();

        this.transactionMiner = new transactionMiner();
        this.transactionMinerMap = new transactionMinerMap();

    }

    update(senderWallet, recipient, amount) {
        const senderOutput = this.outputs.find(output => output.address === senderWallet.publicKey);

        if (amount > senderOutput.amount) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        senderOutput.amount = senderOutput.amount - amount;
        this.outputs.push({ amount, address: recipient });
        transaction.signTransaction(this, senderWallet);

        return this;
    }

    static transactionWithOutputs(senderWallet, outputs) {
        const transaction = new this();
        transaction.outputs.push(...outputs);
        transaction.signTransaction(senderWallet);
        return transaction;
    }

    static newTransaction(senderWallet, recipient, amount) {
        if (amount > senderWallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        return transaction.transactionWithOutputs(senderWallet, [
            { amount: senderWallet.balance - amount, address: senderWallet.publicKey },
            { amount, address: recipient }
        ]);
    }

    static rewardTransaction(minerWallet, blockchainWallet) {
        return transaction.transactionWithOutputs(blockchainWallet, [
            { amount: MINING_REWARD, address: minerWallet.publicKey }
        ]);
    }

    static signTransaction(transaction, senderWallet) {
        transaction.input = {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(transaction.outputs)
        }
    }

    static verifyTransaction(transaction) {
        return verifySignature(
            transaction.input.address,
            transaction.input.signature,
            transaction.outputs
        );
    }

    static transactionMap(transaction) {
        return transaction.transactionMap;
    }

    static transactionPoolMap(transaction) {
        return transaction.transactionPoolMap;
    }

    static transactionMinerMap(transaction) {
        return transaction.transactionMinerMap;
    }

    static transactionPool(transaction) {
        return transaction.transactionPool;
    }

    static transactionMiner(transaction) {
        return transaction.transactionMiner;
    }

    static transaction(transaction) {
        return transaction.transaction;
    }

    static transactionPoolMap(transaction) {
        return transaction.transactionPoolMap;
    }

    static transactionMinerMap(transaction) {
        return transaction.transactionMinerMap;
    }

    static transactionPool(transaction) {
        return transaction.transactionPool;
    }


}


class saveTransaction {
    constructor() {
        this.transaction = new Transaction();
        this.transactionMap = new TransactionMap();

        this.transactionPool = new TransactionPool();
        this.transactionPoolMap = new TransactionPoolMap();

        this.transactionMiner = new TransactionMiner();
        this.transactionMinerMap = new TransactionMinerMap();
    }

    saveTransaction(transaction) {
        this.transaction = transaction;
    }

    saveTransactionMap(transaction) {
        this.transactionMap = transaction;
    }

    saveTransactionPool(transaction) {
        this.transactionPool = transaction;
    }

    saveTransactionPoolMap(transaction) {
        this.transactionPoolMap = transaction;
    }

    saveTransactionMiner(transaction) {
        this.transactionMiner = transaction;
    }

    saveTransactionMinerMap(transaction) {
        this.transactionMinerMap = transaction;
    }

    saveAll(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllPool(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllPoolMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllMiner(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllMinerMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllTransaction(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    saveAllTransactionMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }



}

class loadTransaction{
    constructor() {
        this.transaction = new Transaction();
        this.transactionMap = new TransactionMap();

        this.transactionPool = new TransactionPool();
        this.transactionPoolMap = new TransactionPoolMap();

        this.transactionMiner = new TransactionMiner();
        this.transactionMinerMap = new TransactionMinerMap();
    }

    loadTransaction(transaction) {
        this.transaction = transaction;
    }

    loadTransactionMap(transaction) {
        this.transactionMap = transaction;
    }

    loadTransactionPool(transaction) {
        this.transactionPool = transaction;
    }

    loadTransactionPoolMap(transaction) {
        this.transactionPoolMap = transaction;
    }

    loadTransactionMiner(transaction) {
        this.transactionMiner = transaction;
    }

    loadTransactionMinerMap(transaction) {
        this.transactionMinerMap = transaction;
    }

    loadAll(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    loadAllMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    loadAllPool(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    loadAllPoolMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;
    }

    loadAllMiner(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;

    }

    loadAllMinerMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;

    }

    loadAllTransaction(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;

    }

    loadAllTransactionMap(transaction) {
        this.transaction = transaction;
        this.transactionMap = transaction;
        this.transactionPool = transaction;
        this.transactionPoolMap = transaction;
        this.transactionMiner = transaction;
        this.transactionMinerMap = transaction;

    }

}

class transactionPool {
    constructor() {
        this.transactionPool = [];
        this.transactionPoolMap = new TransactionPoolMap();

        this.transaction = new Transaction();
        this.transactionMap = new TransactionMap();

        this.transactionMiner = new TransactionMiner();
        this.transactionMinerMap = new TransactionMinerMap();
    
    }

    clear() {
        this.transactionPool = [];
    }

    clearMap() {
        this.transactionPoolMap = [];
    }

    clearAll() {
        this.transactionPool = [];
        this.transactionPoolMap = [];
    }

    setTransaction(transaction) {
        this.transactionPool.push(transaction);
    }

    setTransactionMap(transaction) {
        this.transactionPoolMap.push(transaction);
    }

    setTransactionAll(transaction) {
        this.transactionPool.push(transaction);
        this.transactionPoolMap.push(transaction);
    }

    existingTransaction(address) {
        return this.transactionPool.find(transaction => transaction.input.address === address);
    }

    existingTransactionMap(address) {
        return this.transactionPoolMap.find(transaction => transaction.input.address === address);
    }

    existingTransactionAll(address) {
        return this.transactionPool.find(transaction => transaction.input.address === address) && this.transactionPoolMap.find(transaction => transaction.input.address === address);
    }

    validTransactions() {
        return this.transactionPool.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    validTransactionsMap() {
        return this.transactionPoolMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    validTransactionsAll() {
        return this.transactionPool.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        }) && this.transactionPoolMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    clearBlockchainTransactions(blockchain) {
        for (let i = 0; i < blockchain.chain.length; i++) {
            const block = blockchain.chain[i];

            for (let transaction of block.data) {
                if (this.existingTransaction(transaction.input.address)) {
                    console.log(`Transaction from ${transaction.input.address} is already in the pool.`);
                    continue;
                }

                this.setTransaction(transaction);
            }
        }
    }

    clearBlockchainTransactionsMap(blockchain) {
        for (let i = 0; i < blockchain.chain.length; i++) {
            const block = blockchain.chain[i];

            for (let transaction of block.data) {
                if (this.existingTransactionMap(transaction.input.address)) {
                    console.log(`Transaction from ${transaction.input.address} is already in the pool.`);
                    continue;
                }

                this.setTransactionMap(transaction);
            }
        }
    }

    clearBlockchainTransactionsAll(blockchain) {
        for (let i = 0; i < blockchain.chain.length; i++) {
            const block = blockchain.chain[i];

            for (let transaction of block.data) {
                if (this.existingTransactionAll(transaction.input.address)) {
                    console.log(`Transaction from ${transaction.input.address} is already in the pool.`);
                    continue;
                }

                this.setTransactionAll(transaction);
            }
        }
    }

    setTransactionMiner(transaction) {
        this.transactionMiner.push(transaction);
    }

    setTransactionMinerMap(transaction) {
        this.transactionMinerMap.push(transaction);
    }

    setTransactionMinerAll(transaction) {
        this.transactionMiner.push(transaction);
        this.transactionMinerMap.push(transaction);
    }

    existingTransactionMiner(address) {
        return this.transactionMiner.find(transaction => transaction.input.address === address);
    }

    existingTransactionMinerMap(address) {
        return this.transactionMinerMap.find(transaction => transaction.input.address === address);
    }

    existingTransactionMinerAll(address) {
        return this.transactionMiner.find(transaction => transaction.input.address === address) && this.transactionMinerMap.find(transaction => transaction.input.address === address);
    }

    validTransactionsMiner() {
        return this.transactionMiner.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    validTransactionsMinerMap() {
        return this.transactionMinerMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    validTransactionsMinerAll() {
        return this.transactionMiner.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        }) && this.transactionMinerMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    clearTransactionPool() {
        this.transactionPool = [];
    }

    clearTransactionPoolMap() {
        this.transactionPoolMap = [];
    }

    clearTransactionPoolAll() {
        this.transactionPool = [];
        this.transactionPoolMap = [];
    }

    clearTransactionMiner() {
        this.transactionMiner = [];
    }

    clearTransactionMinerMap() {
        this.transactionMinerMap = [];
    }

    clearTransactionMinerAll() {
        this.transactionMiner = [];
        this.transactionMinerMap = [];
    }

    clearAll() {
        this.transactionPool = [];
        this.transactionPoolMap = [];
        this.transactionMiner = [];
        this.transactionMinerMap = [];
    }

    clearAllMap() {
        this.transactionPoolMap = [];
        this.transactionMinerMap = [];
    }


}

class createTransactionPoolRewardTimestamp {
    constructor() {
        this.createTransactionPoolRewardTimestamp = [];
    }

    setTransactionPoolRewardTimestamp(timestamp) {
        this.createTransactionPoolRewardTimestamp.push(timestamp);
    }

    clearTransactionPoolRewardTimestamp() {
        this.createTransactionPoolRewardTimestamp = [];
    }

    clearAll() {
        this.createTransactionPoolRewardTimestamp = [];
    }
}

class transactionMiner {
    constructor() {
        this.transactionMiner = [];
        this.transactionMinerMap = new TransactionMinerMap();
    }

    clear() {
        this.transactionMiner = [];
    }

    clearMap() {
        this.transactionMinerMap = [];
    }

    clearAll() {
        this.transactionMiner = [];
        this.transactionMinerMap = [];
    }

    setTransaction(transaction) {
        this.transactionMiner.push(transaction);
    }

    setTransactionMap(transaction) {
        this.transactionMinerMap.push(transaction);
    }

    setTransactionAll(transaction) {
        this.transactionMiner.push(transaction);
        this.transactionMinerMap.push(transaction);
    }

    existingTransaction(address) {
        return this.transactionMiner.find(transaction => transaction.input.address === address);
    }

    existingTransactionMap(address) {
        return this.transactionMinerMap.find(transaction => transaction.input.address === address);
    }

    existingTransactionAll(address) {
        return this.transactionMiner.find(transaction => transaction.input.address === address) && this.transactionMinerMap.find(transaction => transaction.input.address === address);
    }

    validTransactions() {
        return this.transactionMiner.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    validTransactionsMap() {
        return this.transactionMinerMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    validTransactionsAll() {
        return this.transactionMiner.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        }) && this.transactionMinerMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    mineTransaction() {
        const validTransactions = this.validTransactions();
        const senderWallet = Wallet.blockchainWallet();
        validTransactions.push(
            Transaction.rewardTransaction(this)
        );
        return validTransactions;

    }

    mineTransactionMap() {
        const validTransactions = this.validTransactionsMap();
        const senderWallet = Wallet.blockchainWallet();
        validTransactions.push(
            Transaction.rewardTransaction(this)
        );
        return validTransactions;
    }

    mineTransactionAll() {
        const validTransactions = this.validTransactionsAll();
        const senderWallet = Wallet.blockchainWallet();
        validTransactions.push(
            Transaction.rewardTransaction(this)
        );
        return validTransactions;
    }

    mine() {
        const validTransactions = this.mineTransaction();
        const senderWallet = Wallet.blockchainWallet();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPool.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineMap() {
        const validTransactions = this.mineTransactionMap();
        const senderWallet = Wallet.blockchainWallet();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAll() {
        const validTransactions = this.mineTransactionAll();
        const senderWallet = Wallet.blockchainWallet();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPool.clear();
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllMap() {
        const validTransactions = this.mineTransactionAll();
        const senderWallet = Wallet.blockchainWallet();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllPool() {
        const validTransactions = this.mineTransactionAll();
        const senderWallet = Wallet.blockchainWallet();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPool.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllPoolMap() {
        const validTransactions = this.mineTransactionAll();
        const senderWallet = Wallet.blockchainWallet();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPool.clear();
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

        
}

class transactionMap {
    constructor() {
        this.transactionMap = [];
    }

    clearMap() {
        this.transactionMap = [];
    }

    setTransactionMap(transaction) {
        this.transactionMap.push(transaction);
    }

    existingTransactionMap(address) {
        return this.transactionMap.find(transaction => transaction.input.address === address);
    }

    validTransactionsMap() {
        return this.transactionMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    mineTransactionMap() {
        const validTransactions = this.validTransactionsMap();
        validTransactions.push(
            Transaction.rewardTransaction(this)
        );
        return validTransactions;
    }

    mineMap() {
        const validTransactions = this.mineTransactionMap();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllMap() {
        const validTransactions = this.mineTransactionMap();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllPoolMap() {
        const validTransactions = this.mineTransactionMap();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPool.clear();
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }


}

class transactionPoolMap {
    constructor() {
        this.transactionPoolMap = [];
    }

    clearMap() {
        this.transactionPoolMap = [];
    }

    setTransactionPoolMap(transaction) {
        this.transactionPoolMap.push(transaction);
    }

    existingTransactionMap(address) {
        return this.transactionPoolMap.find(transaction => transaction.input.address === address);
    }

    validTransactionsMap() {
        return this.transactionPoolMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }


}

class transactionMinerMap {
    constructor() {
        this.transactionMinerMap = [];
    }

    clearMap() {
        this.transactionMinerMap = [];
    }

    setTransactionMinerMap(transaction) {
        this.transactionMinerMap.push(transaction);
    }

    existingTransactionMap(address) {
        return this.transactionMinerMap.find(transaction => transaction.input.address === address);
    }

    validTransactionsMap() {
        return this.transactionMinerMap.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) => {
                return total + output.amount;
            }, 0);

            if (transaction.input.amount !== outputTotal) {
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if (!transaction.verifyTransaction(transaction)) {
                console.log(`Invalid signature from ${transaction.input.address}.`);
                return;
            }

            return transaction;
        });
    }

    mineTransactionMap() {
        const validTransactions = this.validTransactionsMap();
        validTransactions.push(
            transaction.rewardTransaction(this)
        );
        return validTransactions;
    }

    mineMap() {
        const validTransactions = this.mineTransactionMap();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllMap() {
        const validTransactions = this.mineTransactionMap();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    mineAllPoolMap() {
        const validTransactions = this.mineTransactionMap();
        this.blockchain.addBlock({ data: validTransactions });
        this.transactionPool.clear();
        this.transactionPoolMap.clear();
        this.p2pServer.syncChains();
        this.p2pServer.broadcastClearTransactions();
        return validTransactions;
    }

    
}

class createTransactionPoolRewardInput {
    constructor({ transactionPoolMap }) {
        this.address = '*authorized-reward*';
        this.amount = transactionPoolMap.reward;
    }

    static createTransactionPoolRewardInput({ transactionPoolMap }) {
        return new this({ transactionPoolMap });
    }

}

class createTransactionPoolRewardOutput {
    constructor({ transactionPoolMap, ownerWallet }) {
        this.amount = transactionPoolMap.reward;
        this.address = ownerWallet.publicKey;
    }

    static createTransactionPoolRewardOutput({ transactionPoolMap, ownerWallet }) {
        return new this({ transactionPoolMap, ownerWallet });
    }

}

module.exports = { createTransaction, transaction, saveTransaction, loadTransaction, transactionPool, createTransactionPoolRewardTimestamp, createTransactionPoolRewardInput, createTransactionPoolRewardOutput, transactionMiner, transactionMap, transactionPoolMap, transactionMinerMap };