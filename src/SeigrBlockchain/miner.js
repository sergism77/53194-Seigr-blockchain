
const Block = require('./block');
const Transaction = require('./transaction');
const Wallet = require('./wallet');
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

    static validTransactionData({ chain }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const transactionSet = new Set();
            let rewardTransactionCount = 0;

            for (let transaction of block.data) {
                if (transaction.input.address === Wallet.blockchainWalletAddress) {
                    rewardTransactionCount += 1;

                    if (rewardTransactionCount > 1) {
                        console.error('Miner rewards exceed limit');
                        return false;
                    }

                    if (Object.values(transaction.outputMap)[0] !== config.miningReward) {
                        console.error('Miner reward amount is invalid');
                        return false;
                    }
                } else {
                    if (!Transaction.validTransaction(transaction)) {
                        console.error('Invalid transaction');
                        return false;
                    }

                    const trueBalance = Wallet.calculateBalance({
                        chain: chain,
                        address: transaction.input.address
                    });

                    if (transaction.input.amount !== trueBalance) {
                        console.error('Invalid input amount');
                        return false;
                    }

                    if (transactionSet.has(transaction)) {
                        console.error('An identical transaction appears more than once in the block');
                        return false;
                    } else {
                        transactionSet.add(transaction);
                    }
                }
            }
        }

        return true;
    }

    static validStakeData({ chain }) {

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const transactionSet = new Set();
            let rewardTransactionCount = 0;

            for (let transaction of block.data) {
                if (transaction.input.address === Wallet.blockchainWalletAddress) {
                    rewardTransactionCount += 1;

                    if (rewardTransactionCount > 1) {
                        console.error('Stake rewards exceed limit');
                        return false;
                    }

                    if (Object.values(transaction.outputMap)[0] !== config.stakeReward) {
                        console.error('Stake reward amount is invalid');
                        return false;
                    }
                } else {
                    if (!Transaction.validTransaction(transaction)) {
                        console.error('Invalid transaction');
                        return false;
                    }

                    const trueBalance = Wallet.calculateBalance({
                        chain: chain,
                        address: transaction.input.address
                    });

                    if (transaction.input.amount !== trueBalance) {
                        console.error('Invalid input amount');
                        return false;
                    }

                    if (transactionSet.has(transaction)) {
                        console.error('An identical transaction appears more than once in the block');
                        return false;
                    } else {
                        transactionSet.add(transaction);
                    }
                }
            }
        }

        return true;
    }

    static validChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const { timestamp, lastHash, hash, nonce, difficulty, data } = chain[i];
            const actualLastHash = chain[i - 1].hash;
            const lastDifficulty = chain[i - 1].difficulty;

            if (lastHash !== actualLastHash) {
                return false;
            }

            const validatedHash = Block.hash(timestamp, lastHash, data, nonce, difficulty);

            if (hash !== validatedHash) {
                return false;
            }

            if (Math.abs(lastDifficulty - difficulty) > 1) {
                return false;
            }
        }

        return true;
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) {
            return 1;
        }

        const difference = timestamp - originalBlock.timestamp;

        if (difference > config.mineRate) {
            return difficulty - 1;
        }

        return difficulty + 1;
    }

    static adjustStakeDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) {
            return 1;
        }

        const difference = timestamp - originalBlock.timestamp;

        if (difference > config.stakeRate) {
            return difficulty - 1;
        }

        return difficulty + 1;
    }

    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return SHA256(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }

    static blockHash(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;

        return Block.hash(timestamp, lastHash, data, nonce, difficulty);
    }

    static mineBlock({ lastBlock, data }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({ timestamp, lastHash, data, nonce, difficulty, hash });
    }

    static stakeBlock({ lastBlock, data }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustStakeDifficulty({ originalBlock: lastBlock, timestamp });
            hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({ timestamp, lastHash, data, nonce, difficulty, hash });
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static validateBlock(block) {
        const { timestamp, lastHash, hash, nonce, difficulty, data } = block;
        const lastDifficulty = block.lastDifficulty;

        if (lastHash !== block.lastHash) {
            return false;
        }

        const validatedHash = Block.hash(timestamp, lastHash, data, nonce, difficulty);

        if (hash !== validatedHash) {
            return false;
        }

        if (Math.abs(lastDifficulty - difficulty) > 1) {
            return false;
        }

        return true;
    }

    static validateStakeBlock(block) {
        const { timestamp, lastHash, hash, nonce, difficulty, data } = block;
        const lastDifficulty = block.lastDifficulty;

        if (lastHash !== block.lastHash) {
            return false;
        }

        const validatedHash = Block.hash(timestamp, lastHash, data, nonce, difficulty);

        if (hash !== validatedHash) {
            return false;
        }

        if (Math.abs(lastDifficulty - difficulty) > 1) {
            return false;
        }

        return true;
    }

    
}


module.exports = Miner;