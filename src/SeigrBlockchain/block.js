
const { GENESIS_DATA, MINE_RATE, STAKE_REWARD } = require('./config');
const { cryptoHash } = require('./utils');
const Stake = require('./stake');
const Transaction = require('./transaction');
const { REWARD_INPUT, MINING_REWARD } = require('./config');
const BlockHeader = require('./blockHeader');
const blockBody = require('./blockBody');


class Block {
    constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({ lastBlock, data }) {
        const lastHash = lastBlock.hash;
        let hash, timestamp;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({
            timestamp,
            lastHash,
            data,
            difficulty,
            nonce,
            hash
        });
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }

    static hashBlock({ timestamp, lastHash, data, nonce, difficulty }) {
        return cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    }

    static blockHash(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;

        return Block.hashBlock({ timestamp, lastHash, data, nonce, difficulty });
    }

    static validTransactionData({ chain }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const transactionSet = new Set();
            let rewardTransactionCount = 0;

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
                        chain,
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
            const stakeSet = new Set();
            let rewardStakeCount = 0;

            for (let stake of block.data) {
                if (stake.input.address === REWARD_INPUT.address) {
                    rewardStakeCount += 1;

                    if (rewardStakeCount > 1) {
                        console.error('Miner rewards exceed limit');
                        return false;
                    }

                    if (Object.values(stake.outputMap)[0] !== STAKE_REWARD) {
                        console.error('Miner reward amount is invalid');
                        return false;
                    }
                } else {
                    if (!Stake.validStake(stake)) {
                        console.error('Invalid stake');
                        return false;
                    }

                    const trueBalance = Wallet.calculateBalance({
                        chain,
                        address: stake.input.address
                    });

                    if (stake.input.amount !== trueBalance) {
                        console.error('Invalid input amount');
                        return false;
                    }

                    if (stakeSet.has(stake)) {
                        console.error('An identical stake appears more than once in the block');
                        return false;
                    } else {
                        stakeSet.add(stake);
                    }
                }
            }
        }

        return true;
    }

    static validBlock(block) {
        const { timestamp, lastHash, hash, nonce, difficulty, data } = block;
        const lastDifficulty = block.lastBlock.difficulty;

        if (Math.abs(lastDifficulty - difficulty) > 1) return false;

        if (cryptoHash(timestamp, lastHash, data, nonce, difficulty) !== hash) return false;

        return true;
    }

    static validBlockStructure(block) {
        return typeof block.timestamp === 'number'
            && typeof block.lastHash === 'string'
            && typeof block.hash === 'string'
            && typeof block.nonce === 'number'
            && typeof block.difficulty === 'number'
            && typeof block.data === 'object';
    }

    static validBlockHeaderStructure(block) {
        return typeof block.timestamp === 'number'
            && typeof block.lastHash === 'string'
            && typeof block.hash === 'string'
            && typeof block.nonce === 'number'
            && typeof block.difficulty === 'number';
    }

    static validBlockBodyStructure(block) {
        return typeof block.data === 'object';
    }

    static validBlockHeader(block) {
        const { timestamp, lastHash, hash, nonce, difficulty } = block;
        const lastDifficulty = block.lastBlock.difficulty;

        if (Math.abs(lastDifficulty - difficulty) > 1) return false;

        if (cryptoHash(timestamp, lastHash, nonce, difficulty) !== hash) return false;

        return true;
    }

    static validBlockBody(block) {
        const { data } = block;

        return true;
    }

    static validBlockChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.validBlock(block)) return false;

            const { timestamp, lastHash, hash, nonce, difficulty, data } = block;
            const lastDifficulty = chain[i - 1].difficulty;

            if (Math.abs(lastDifficulty - difficulty) > 1) return false;

            if (cryptoHash(timestamp, lastHash, data, nonce, difficulty) !== hash) return false;
        }

        return true;
    }

    static validBlockChainHeader(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.validBlockHeader(block)) return false;

            const { timestamp, lastHash, hash, nonce, difficulty } = block;
            const lastDifficulty = chain[i - 1].difficulty;

            if (Math.abs(lastDifficulty - difficulty) > 1) return false;

            if (cryptoHash(timestamp, lastHash, nonce, difficulty) !== hash) return false;
        }

        return true;
    }

    static validBlockChainBody(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.validBlockBody(block)) return false;

            const { data } = block;
        }

        return true;
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }

    static mineBlock({ lastBlock, beneficiary, data }) {
        let hash, timestamp;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastBlock.hash, data, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({ timestamp, lastHash: lastBlock.hash, data, difficulty, nonce, hash, beneficiary });
    }

    static mineBlockHeader({ lastBlock, beneficiary }) {
        let hash, timestamp;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastBlock.hash, nonce, difficulty);
        } while (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({ timestamp, lastHash: lastBlock.hash, difficulty, nonce, hash, beneficiary });
    }

    static mineBlockBody({ lastBlock, beneficiary, data }) {
        let timestamp = Date.now();
        let { difficulty } = lastBlock;
        let nonce = 0;
        let hash = cryptoHash(timestamp, lastBlock.hash, data, nonce, difficulty);

        return new this({ timestamp, lastHash: lastBlock.hash, data, difficulty, nonce, hash, beneficiary });
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static blockHash(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;

        return cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    }

    static blockHeaderHash(block) {
        const { timestamp, lastHash, nonce, difficulty } = block;

        return cryptoHash(timestamp, lastHash, nonce, difficulty);
    }

    static blockBodyHash(block) {
        const { data } = block;

        return cryptoHash(data);
    }

    static blockHashes(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;

        return [cryptoHash(timestamp, lastHash, data, nonce, difficulty), cryptoHash(timestamp, lastHash, nonce, difficulty), cryptoHash(data)];
    }

    static blockHeaderHashes(block) {
        const { timestamp, lastHash, nonce, difficulty } = block;

        return [cryptoHash(timestamp, lastHash, nonce, difficulty)];
    }

    static blockBodyHashes(block) {
        const { data } = block;

        return [cryptoHash(data)];
    }

    static blockHashesMatch(block) {
        const hash = Block.blockHash(block);

        return hash === block.hash;
    }

    static blockHeaderHashesMatch(block) {
        const hash = Block.blockHeaderHash(block);

        return hash === block.hash;
    }

    static blockBodyHashesMatch(block) {    
        const hash = Block.blockBodyHash(block);

        return hash === block.hash;
    }

    static blockHashesMatchChain(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockHashesMatch(block)) return false;
        }

        return true;
    }

    static blockHeaderHashesMatchChain(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockHeaderHashesMatch(block)) return false;
        }

        return true;
    }

    static blockBodyHashesMatchChain(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockBodyHashesMatch(block)) return false;
        }

        return true;
    }

    static blockHashesMatchChainHeader(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockHashesMatch(block)) return false;
        }

        return true;
    }

    static blockHeaderHashesMatchChainHeader(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockHeaderHashesMatch(block)) return false;
        }

        return true;
    }

    static blockBodyHashesMatchChainHeader(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockBodyHashesMatch(block)) return false;
        }

        return true;
    }

    static blockHashesMatchChainBody(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockHashesMatch(block)) return false;
        }

        return true;
    }

    static blockHeaderHashesMatchChainBody(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockHeaderHashesMatch(block)) return false;
        }

        return true;
    }

    static blockBodyHashesMatchChainBody(chain) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            if (!Block.blockBodyHashesMatch(block)) return false;
        }

        return true;
    }

    static validBlock(block) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = block;

        if (Block.blockHash(block) !== hash) return false;

        if (Math.abs(lastHash.length - hash.length) > 1) return false;

        if (lastHash === hash) return false;

        if (Block.blockHash({ timestamp, lastHash, data, nonce, difficulty }) !== hash) return false;

        if (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty)) return false;

        return true;

    }

    static validBlockHeader(block) {

        const { timestamp, lastHash, hash, nonce, difficulty } = block;

        if (Block.blockHeaderHash(block) !== hash) return false;

        if (Math.abs(lastHash.length - hash.length) > 1) return false;

        if (lastHash === hash) return false;

        if (Block.blockHeaderHash({ timestamp, lastHash, nonce, difficulty }) !== hash) return false;

        if (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty)) return false;

        return true;

    }

    static validBlockBody(block) {
            
            const { timestamp, lastHash, hash, data, nonce, difficulty } = block;
    
            if (Block.blockBodyHash(block) !== hash) return false;
    
            if (Math.abs(lastHash.length - hash.length) > 1) return false;
    
            if (lastHash === hash) return false;
    
            if (Block.blockBodyHash({ data }) !== hash) return false;
    
            if (hexToBinary(hash).substring(0, difficulty) !== '0'.repeat(difficulty)) return false;
    
            return true;
    
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }

    static adjustDifficultyHeader({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }

    static adjustDifficultyBody({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }

}

module.exports = Block;