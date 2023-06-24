'use strict';

import { GENESIS_DATA } from './genesis';
import { MINE_RATE } from './config';

import { cryptoHash } from './utils';

import CreateTransaction from './createTransaction';

class CreateTransactionPool {
    timestamp: number;
    lastHash: string;
    hash: string;
    data: string;
    nonce: number;
    difficulty: number;
    transactions: CreateTransaction[];
    miner: string;

    constructor({ timestamp, lastHash, hash, data, nonce, difficulty, transactions, miner }: {
        timestamp: number;
        lastHash: string;
        hash: string;
        data: string;
        nonce: number;
        difficulty: number;
        transactions: CreateTransaction[];
        miner: string;
    }) {
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

    static mineTransactionPool({ lastBlock, transactions, miner }: {
        lastBlock: CreateTransactionPool;
        transactions: CreateTransaction[];
        miner: string;
    }) {
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

    static adjustDifficulty({ originalBlock, timestamp }: {
        originalBlock: CreateTransactionPool;
        timestamp: number;
    }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if ((timestamp - originalBlock.timestamp) > MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }
}

export default CreateTransactionPool;