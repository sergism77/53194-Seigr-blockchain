//this is the transaction class

const { v4: uuidv4 } = require('uuid');
const { verifySignature } = require('./utils.js');
const { REWARD_INPUT, MINING_REWARD } = require('./config');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { cryptoHash, VerifySignature } = require('./utils.js');
const config = require('./config.js');
const { Wallet, publicKey } = require('./wallet.js');
const outputMap = require('./outputMap.js');

class transaction {
    constructor({ senderWallet, recipient, amount, outputMap, input }) { 
        this.id = uuidv4();
        this.outputMap = outputMap || this.outputMap({ senderWallet, recipient, amount }); 
        this.senderWallet = senderWallet;

    }
    //create a new outputMap class
    outputMap({ senderWallet, recipient, amount }) {
        const outputMap = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount; 
        return outputMap;
    }
    //create a new input class
    input({ senderWallet, outputMap }) {
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(outputMap)
        };
    }
    
    ownerWallet({ senderWallet, recipient, amount }) {
        if (amount > senderWallet.balance) {
            throw new Error('Amount exceeds balance');
        }
        return new this({ senderWallet, recipient, amount });
    }

    senderWallet({ senderWallet, recipient, amount }) {
        if (amount > senderWallet.balance) {
            throw new Error('Amount exceeds balance');
        }
        return new this({ senderWallet, recipient, amount });
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
        this.input = this.input({ senderWallet, outputMap: this.outputMap });
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

    static transactionWithOutputs({ senderWallet, outputs }) {
        const transaction = new this({ senderWallet, outputs });
        return transaction;
    }

    static transactionWithInput({ senderWallet, input }) {
        const transaction = new this({ senderWallet, input });
        return transaction;
    }

    //create new wallet class
    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
    }



}



class saveTransaction {
    constructor() {
        this.transaction = new transaction();
        this.transactionMap = new transactionMap();

        this.transactionPool = new transactionPool();
        this.transactionPoolMap = new transactionPoolMap();

        this.transactionMiner = new transactionMiner();
        this.transactionMinerMap = new transactionMinerMap();
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
        this.transaction = new transaction();
        this.transactionMap = new transactionMap();

        this.transactionPool = new transactionPool();
        this.transactionPoolMap = new transactionPoolMap();

        this.transactionMiner = new transactionMiner();
        this.transactionMinerMap = new transactionMinerMap();
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
        this.transactionPoolMap = new transactionPoolMap();

        this.transaction = new transaction();
        this.transactionMap = new transactionMap();

        this.transactionMiner = new transactionMiner();
        this.transactionMinerMap = new transactionMinerMap();
    
    }

    //create new wallet class
    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
    }



    createTransaction({ amount, senderWallet, recipient }) {
        if (amount > senderWallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        let transaction = this.transactionPool.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transaction) {

            transaction.update({ senderWallet, recipient, amount });

        } else {

            transaction = this.transaction.createTransaction({ senderWallet, recipient, amount });
            this.transactionPool.push(transaction);
        }

        return transaction;
    }

    createTransactionMap({ amount, senderWallet, recipient }) {
        if (amount > senderWallet.balance) {

            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        let transaction = this.transactionPoolMap.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transaction) {

            transaction.update({ senderWallet, recipient, amount });

        } else {

            transaction = this.transactionMap.createTransaction({ senderWallet, recipient, amount });
            this.transactionPoolMap.push(transaction);
        }

        return transaction;
    }

    createTransactionAll({ amount, senderWallet, recipient }) {

        if (amount > senderWallet.balance) {

            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        let transaction = this.transactionPool.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transaction) {

            transaction.update({ senderWallet, recipient, amount });

        } else {

            transaction = this.transaction.createTransaction({ senderWallet, recipient, amount });
            this.transactionPool.push(transaction);

        }

        let transactionMap = this.transactionPoolMap.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transactionMap) {

            transactionMap.update({ senderWallet, recipient, amount });

        } else {

            transactionMap = this.transactionMap.createTransaction({ senderWallet, recipient, amount });
            this.transactionPoolMap.push(transactionMap);
        }

        return transaction, transactionMap;
    }

    createTransactionMiner({ amount, senderWallet, recipient }) {
        if (amount > senderWallet.balance) {

            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }

        let transaction = this.transactionMiner.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transaction) {

            transaction.update({ senderWallet, recipient, amount });

        } else {

            transaction = this.transactionMiner.createTransaction({ senderWallet, recipient, amount });
            this.transactionMiner.push(transaction);

        }

        return transaction;

    }

    createTransactionMinerMap({ amount, senderWallet, recipient }) {

        if (amount > senderWallet.balance) {

            console.log(`Amount: ${amount} exceeds balance.`);
            return;

        }

        let transaction = this.transactionMinerMap.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transaction) {

            transaction.update({ senderWallet, recipient, amount });

        } else {

            transaction = this.transactionMinerMap.createTransaction({ senderWallet, recipient, amount });
            this.transactionMinerMap.push(transaction);

        }

        return transaction;

    }

    createTransactionMinerAll({ amount, senderWallet, recipient }) {

        if (amount > senderWallet.balance) {

            console.log(`Amount: ${amount} exceeds balance.`);

            return;

        }

        let transaction = this.transactionMiner.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transaction) {

            transaction.update({ senderWallet, recipient, amount });

        } else {

            transaction = this.transactionMiner.createTransaction({ senderWallet, recipient, amount });

            this.transactionMiner.push(transaction);

        }

        let transactionMap = this.transactionMinerMap.find(transaction => transaction.input.address === senderWallet.publicKey);

        if (transactionMap) {

            transactionMap.update({ senderWallet, recipient, amount });

        } else {

            transactionMap = this.transactionMinerMap.createTransaction({ senderWallet, recipient, amount });

            this.transactionMinerMap.push(transactionMap);

        }

        return transaction, transactionMap;

    }

    existingTransaction(address) {
        return this.transactionPool.find(transaction => transaction.input.address === address);

    }

    existingTransactionMap(address) {

        return this.transactionPoolMap.find(transaction => transaction.input.address === address);

    }

    existingTransactionMiner(address) {

        return this.transactionMiner.find(transaction => transaction.input.address === address);

    }

    existingTransactionMinerMap(address) {

        return this.transactionMinerMap.find(transaction => transaction.input.address === address);

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

    setTransactionPoolRewardTimestamp(timestamp) {
        this.transactionPoolRewardTimestamp.push(timestamp);
    }

    clearTransactionPoolRewardTimestamp() {
        this.transactionPoolRewardTimestamp = [];
    }

    clearAll() {
        this.transactionPool = [];
        this.transactionPoolMap = [];
        this.transactionMiner = [];
        this.transactionMinerMap = [];
        this.transactionPoolRewardTimestamp = [];
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
        this.transactionMinerMap = new transactionMinerMap();
    }

    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
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
            transaction.rewardTransaction(this)
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
            transaction.rewardTransaction(this)
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

    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
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

class transactionPoolMap {
    constructor() {
        this.transactionPoolMap = [];
    }

    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
    }



    ownerWallet() {
        return this.wallet;
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

    static newWallet({ senderWallet, recipient, amount }) {
    const transaction = new this({ senderWallet, recipient, amount });
    return transaction;
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

class transactionMinerPool {
    constructor() {
        this.transactionMinerPool = [];
    }

    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
    }

    clearPool() {
        this.transactionMinerPool = [];
    }

    setTransactionMinerPool(transaction) {
        this.transactionMinerPool.push(transaction);
    }

    existingTransactionPool(address) {
        return this.transactionMinerPool.find(transaction => transaction.input.address === address);
    }

    validTransactionsPool() {
        return this.transactionMinerPool.filter(transaction => {

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

    mineTransactionPool() {
        const validTransactions = this.validTransactionsPool();
        validTransactions.push(
            transaction.rewardTransaction(this)
        );

        return validTransactions;
    }

    minePool() {
        const validTransactions = this.mineTransactionPool();
        this.blockchain.addBlock({ data: validTransactions });

        this.transactionPoolMap.clear();

        this.p2pServer.syncChains();

        this.p2pServer.broadcastClearTransactions();

        return validTransactions;
    }

    mineAllPool() {
        const validTransactions = this.mineTransactionPool();
        this.blockchain.addBlock({ data: validTransactions });

        this.transactionPool.clear();

        this.transactionPoolMap.clear();

        this.p2pServer.syncChains();

        this.p2pServer.broadcastClearTransactions();

        return validTransactions;

    }

    mineAllPoolPool() {
        const validTransactions = this.mineTransactionPool();
        this.blockchain.addBlock({ data: validTransactions });

        this.transactionPool.clear();

        this.transactionPoolMap.clear();

        this.p2pServer.syncChains();

        this.p2pServer.broadcastClearTransactions();

        return validTransactions;

    }

    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
    }


}

class transactionMinerPoolMap {
    constructor() {
        this.transactionMinerPoolMap = [];
    }

    static newWallet({ senderWallet, recipient, amount }) {
        const transaction = new this({ senderWallet, recipient, amount });
        return transaction;
    }

    clearMap() {
        this.transactionMinerPoolMap = [];
    }

    setTransactionMinerPoolMap(transaction) {
        this.transactionMinerPoolMap.push(transaction);
    }

    existingTransactionPoolMap(address) {
        return this.transactionMinerPoolMap.find(transaction => transaction.input.address === address);

    }

    validTransactionsPoolMap() {

        return this.transactionMinerPoolMap.filter(transaction => {

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

    mineTransactionPoolMap() {

        const validTransactions = this.validTransactionsPoolMap();

        validTransactions.push(

            transaction.rewardTransaction(this)

        );

        return validTransactions;

    }

    mineMap() {

        const validTransactions = this.mineTransactionPoolMap();

        this.blockchain.addBlock({ data: validTransactions });

        this.transactionPoolMap.clear();

        this.p2pServer.syncChains();

        this.p2pServer.broadcastClearTransactions();

        return validTransactions;

    }

    mineAllMap() {

        const validTransactions = this.mineTransactionPoolMap();

        this.blockchain.addBlock({ data: validTransactions });

        this.transactionPoolMap.clear();

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
        this.ownerWallet = ownerWallet;
    }

    ownerWallet() {
        return this.ownerWallet;
    }

    publicKey() {
        return this.ownerWallet.publicKey;
    }

    static createTransactionPoolRewardOutput({ transactionPoolMap, ownerWallet }) {
        return new this({ transactionPoolMap, ownerWallet });
    }

}

module.exports = { transaction, saveTransaction, loadTransaction, transactionPool, createTransactionPoolRewardTimestamp, createTransactionPoolRewardInput, createTransactionPoolRewardOutput, transactionMiner, transactionMap, transactionPoolMap, transactionMinerMap };

//help me fix TypeError: Cannot read properties of undefined (reading 'publicKey') in this file, what do we need to do that isn't done yet? list:
//1. fix the error by adding the publicKey to the ownerWallet in the createTransactionPoolRewardOutput class