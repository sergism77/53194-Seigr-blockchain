const { GENESIS_DATA } = require('./genesis');
const { MINE_RATE, timestamp } = require('./config');
const { cryptoHash } = require('./utils');
const createTransaction = require('./createTransaction');
const createBlock = require('./createBlock');
const hash = createBlock.hash;
const data = createBlock.data;
const nonce = createBlock.nonce;
const difficulty = createBlock.difficulty;
const transactions = createBlock.transactions;
const miner = createBlock.miner;


class createGenesisBlock {
    constructor() {
        this.timestamp = timestamp;
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

    static mineBlock({ lastBlock, transactions, miner }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = createBlock.adjustDifficulty({ originalBlock: lastBlock, timestamp });
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

module.exports = createGenesisBlock;