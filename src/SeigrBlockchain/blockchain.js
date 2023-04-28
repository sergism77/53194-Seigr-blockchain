//this is the Seigr blockchain core code
//how do we use sh-3 in our blockchain.js file? answer: we use the cryptoHash function in our blockchain.js file to hash the block data
const Block = require('./block');
const { cryptoHash } = require('./utils');
const { REWARD_INPUT, MINING_REWARD } = require('./config');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }
    
    addBlock({ data }) {
        const newBlock = Block.mineBlock({
        lastBlock: this.chain[this.chain.length - 1],
        data
        });
    
        this.chain.push(newBlock);
    }
    
    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
        return false;
        }
    
        for (let i = 1; i < chain.length; i++) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];
    
        const actualLastHash = chain[i - 1].hash;
    
        if (lastHash !== actualLastHash) return false;
    
        const validatedHash = cryptoHash(
            timestamp,
            lastHash,
            data,
            nonce,
            difficulty
        );
    
        if (hash !== validatedHash) return false;
        }
    
        return true;
    }
    
    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
        console.error('The incoming chain must be longer');
        return;
        }
    
        if (!Blockchain.isValidChain(chain)) {
        console.error('The incoming chain must be valid');
        return;
        }
    
        console.log('replacing chain with', chain);
        this.chain = chain;
    }
    
    validTransactionData({ chain }) {
        for (let i = 1; i < chain.length; i++) {
        const block = chain[i];
        let rewardTransactionCount = 0;
    
        const transactionSet = new Set();
        let hasConductedTransaction = false;
    
        for (let transaction of block.data) {
            if (transaction.input.address === REWARD_INPUT.address) {
            rewardTransactionCount += 1;
    
            if (rewardTransactionCount > 1) {
                console.error('Miner rewards exceed limit');
                return false;
            }
    
            if (Object.values(transaction.outputMap)[0] !== MINING_REWARD) {
                console.error('Miner reward amount is invalid');
                return false;
            }
            } else {
            if (!Transaction.validTransaction(transaction)) {
                console.error('Invalid transaction');
                return false;
            }
    
            const trueBalance = Wallet.calculateBalance({
                chain: this.chain,
                address: transaction.input.address
            });
    
            if (transaction.input.amount !== trueBalance) {
                console.error('Invalid input amount');
                return false;
            }

            if (transactionSet.has(transaction)) {
                hasConductedTransaction = true;
            }

            transactionSet.add(transaction);    

            }


        }

        if (hasConductedTransaction) {
            return false;
        }
        }

        return true;
    }

    replaceChain(chain, validateTransactions, onSuccess) {
        if (chain.length <= this.chain.length) {
        console.error('The incoming chain must be longer');
        return;
        }

        if (!Blockchain.isValidChain(chain)) {
        console.error('The incoming chain must be valid');
        return;
        }

        if (validateTransactions && !this.validTransactionData({ chain })) {
        console.error('The incoming chain has invalid data');
        return;
        }

        if (onSuccess) onSuccess();
        console.log('replacing chain with', chain);
        this.chain = chain;
    }

}

module.exports = Blockchain;