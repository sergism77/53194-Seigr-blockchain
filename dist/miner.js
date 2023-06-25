"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = require("crypto-js");
const block_1 = __importDefault(require("./block"));
const transaction_1 = __importDefault(require("./transaction"));
const wallet_1 = __importDefault(require("./wallet"));
const config_1 = __importDefault(require("./config"));
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
        validTransactions.push(transaction_1.default.rewardTransaction({ minerWallet: wallet }));
        const block = block_1.default.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: validTransactions,
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
        validTransactions.push(transaction_1.default.rewardTransaction({ stakeWallet: wallet }));
        const block = block_1.default.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: validTransactions,
        });
        chain.push(block);
        this.pubsub.broadcastChain();
        this.transactionPool.clear();
    }
    static walletMiner({ chain, transactionPool, wallet }) {
        const minerWalletOutput = {
            address: wallet.publicKey,
            amount: config_1.default.miningReward,
        };
        const stakeWalletOutput = {
            address: wallet.publicKey,
            amount: config_1.default.stakeReward,
        };
        let blockData = [
            transaction_1.default.rewardTransaction({ minerWallet: wallet }),
            transaction_1.default.rewardTransaction({ stakeWallet: wallet }),
        ];
        for (let transaction of transactionPool.transactions) {
            if (!transactionPool.validTransaction(transaction)) {
                console.error("Invalid transaction");
                return;
            }
            blockData.push(transaction);
        }
        return block_1.default.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: blockData,
        });
    }
    static rewardMiner({ chain, transactionPool, wallet }) {
        const minerWalletOutput = {
            address: wallet.publicKey,
            amount: config_1.default.miningReward,
        };
        const stakeWalletOutput = {
            address: wallet.publicKey,
            amount: config_1.default.stakeReward,
        };
        let blockData = [
            transaction_1.default.rewardTransaction({ minerWallet: wallet }),
            transaction_1.default.rewardTransaction({ stakeWallet: wallet }),
        ];
        for (let transaction of transactionPool.transactions) {
            if (!transactionPool.validTransaction(transaction)) {
                console.error("Invalid transaction");
                return;
            }
            blockData.push(transaction);
        }
        return block_1.default.mineBlock({
            lastBlock: chain[chain.length - 1],
            data: blockData,
        });
    }
    static validTransactionData({ chain }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const transactionSet = new Set();
            let rewardTransactionCount = 0;
            for (let transaction of block.data) {
                if (transaction.input.address === wallet_1.default.blockchainWalletAddress) {
                    rewardTransactionCount += 1;
                    if (rewardTransactionCount > 1) {
                        console.error("Miner rewards exceed limit");
                        return false;
                    }
                    if (Object.values(transaction.outputMap)[0] !== config_1.default.miningReward) {
                        console.error("Miner reward amount is invalid");
                        return false;
                    }
                }
                else {
                    if (!transaction_1.default.validTransaction(transaction)) {
                        console.error("Invalid transaction");
                        return false;
                    }
                    const trueBalance = wallet_1.default.calculateBalance({
                        chain: chain,
                        address: transaction.input.address,
                    });
                    if (transaction.input.amount !== trueBalance) {
                        console.error("Invalid input amount");
                        return false;
                    }
                    if (transactionSet.has(transaction)) {
                        console.error("An identical transaction appears more than once in the block");
                        return false;
                    }
                    else {
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
                if (transaction.input.address === wallet_1.default.blockchainWalletAddress) {
                    rewardTransactionCount += 1;
                    if (rewardTransactionCount > 1) {
                        console.error("Stake rewards exceed limit");
                        return false;
                    }
                    if (Object.values(transaction.outputMap)[0] !== config_1.default.stakeReward) {
                        console.error("Stake reward amount is invalid");
                        return false;
                    }
                }
                else {
                    if (!transaction_1.default.validTransaction(transaction)) {
                        console.error("Invalid transaction");
                        return false;
                    }
                    const trueBalance = wallet_1.default.calculateBalance({
                        chain: chain,
                        address: transaction.input.address,
                    });
                    if (transaction.input.amount !== trueBalance) {
                        console.error("Invalid input amount");
                        return false;
                    }
                    if (transactionSet.has(transaction)) {
                        console.error("An identical transaction appears more than once in the block");
                        return false;
                    }
                    else {
                        transactionSet.add(transaction);
                    }
                }
            }
        }
        return true;
    }
    static validChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(block_1.default.genesis())) {
            return false;
        }
        for (let i = 1; i < chain.length; i++) {
            const { timestamp, lastHash, hash, nonce, difficulty, data, } = chain[i];
            const actualLastHash = chain[i - 1].hash;
            const lastDifficulty = chain[i - 1].difficulty;
            if (lastHash !== actualLastHash) {
                return false;
            }
            const validatedHash = block_1.default.hash(timestamp, lastHash, data, nonce, difficulty);
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
        if (difference > config_1.default.mineRate) {
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
        if (difference > config_1.default.stakeRate) {
            return difficulty - 1;
        }
        return difficulty + 1;
    }
    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return (0, crypto_js_1.SHA256)(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }
    static blockHash(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;
        return block_1.default.hash(timestamp, lastHash, data, nonce, difficulty);
    }
    static mineBlock({ lastBlock, data }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = block_1.default.adjustDifficulty({
                originalBlock: lastBlock,
                timestamp,
            });
            hash = block_1.default.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== "0".repeat(difficulty));
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
            difficulty = block_1.default.adjustStakeDifficulty({
                originalBlock: lastBlock,
                timestamp,
            });
            hash = block_1.default.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== "0".repeat(difficulty));
        return new this({ timestamp, lastHash, data, nonce, difficulty, hash });
    }
    static genesis() {
        return new this(GENESIS_DATA);
    }
    static validateBlock(block) {
        const { timestamp, lastHash, hash, nonce, difficulty, data, } = block;
        const lastDifficulty = block.lastDifficulty;
        if (lastHash !== block.lastHash) {
            return false;
        }
        const validatedHash = block_1.default.hash(timestamp, lastHash, data, nonce, difficulty);
        if (hash !== validatedHash) {
            return false;
        }
        if (Math.abs(lastDifficulty - difficulty) > 1) {
            return false;
        }
        return true;
    }
    static validateStakeBlock(block) {
        const { timestamp, lastHash, hash, nonce, difficulty, data, } = block;
        const lastDifficulty = block.lastDifficulty;
        if (lastHash !== block.lastHash) {
            return false;
        }
        const validatedHash = block_1.default.hash(timestamp, lastHash, data, nonce, difficulty);
        if (hash !== validatedHash) {
            return false;
        }
        if (Math.abs(lastDifficulty - difficulty) > 1) {
            return false;
        }
        return true;
    }
}
exports.default = Miner;
