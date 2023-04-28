
const Block = require('./block');
const Transaction = require('../wallet/transaction');
const Wallet = require('../wallet/wallet');
const config = require('./config');

class Miner {
    constructor({ chain, transactionPool, wallet, pubsub }) {
        this.chain = chain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pubsub = pubsub;
    }

    mine() {
        const { chain, transactionPool, wallet } = this;
        const validTransactions = transactionPool.validTransactions();

        if (validTransactions.length < 1) {
            return;
        }

        validTransactions.push(
            Transaction.rewardTransaction({ minerWallet: wallet })
        );

        const block = Block.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: validTransactions
        });

        chain.push(block);

        this.pubsub.broadcastChain();

        this.transactionPool.clear();
    }

    stake() {
        const { chain, transactionPool, wallet } = this;
        const validTransactions = transactionPool.validTransactions();

        if (validTransactions.length < 1) {
            return;
        }

        validTransactions.push(
            Transaction.rewardTransaction({ stakeWallet: wallet })
        );

        const block = Block.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: validTransactions
        });

        chain.push(block);

        this.pubsub.broadcastChain();

        this.transactionPool.clear();
    }

    static walletMiner({ chain, transactionPool, wallet }) {
        const minerWalletOutput = {
            address: wallet.publicKey,
            amount: config.miningReward
        };

        const stakeWalletOutput = {
            address: wallet.publicKey,
            amount: config.stakeReward
        };

        let blockData = [
            Transaction.rewardTransaction({ minerWallet: wallet }),
            Transaction.rewardTransaction({ stakeWallet: wallet })
        ];

        for (let transaction of transactionPool.transactions) {
            if (!transactionPool.validTransaction(transaction)) {
                console.error('Invalid transaction');
                return;
            }

            blockData.push(transaction);
        }

        return Block.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: blockData
        });
    }

    static rewardMiner({ chain, transactionPool, wallet }) {
        const minerWalletOutput = {
            address: wallet.publicKey,
            amount: config.miningReward
        };
    
        const stakeWalletOutput = {
            address: wallet.publicKey,
            amount: config.stakeReward
        };
    
        let blockData = [
            Transaction.rewardTransaction({ minerWallet: wallet }),
            Transaction.rewardTransaction({ stakeWallet: wallet })
        ];
    
        for (let transaction of transactionPool.transactions) {
            if (!transactionPool.validTransaction(transaction)) {
                console.error('Invalid transaction');
                return;
            }
    
            blockData.push(transaction);
        }
    
        return Block.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: blockData
        });

    }
    
}


module.exports = Miner;