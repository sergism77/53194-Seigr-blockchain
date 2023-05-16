//this is the create transaction pool function
//this function will create the transaction pool of the Seigr blockchain
//
const { GENESIS_DATA } = require('./genesis');
const { MINE_RATE } = require('./config');

const { cryptoHash } = require('./utils');

const CreateTransaction = require('./createTransaction');

class CreateTransactionPool {
    constructor({ timestamp, lastHash, hash, data, nonce, difficulty, transactions, miner }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.transactions = transactions;
        this.miner = miner;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineTransactionPool({ lastBlock, transactions, miner }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = CreateTransactionPool.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, lastHash, transactions, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({
            timestamp,
            lastHash,
            transactions,
            difficulty,
            nonce,
            miner,
            hash
        });
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }
}

module.exports = CreateTransactionPool;