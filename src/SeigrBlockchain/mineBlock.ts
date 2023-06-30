/* The CreateBlock class is responsible for creating and mining blocks in a blockchain. */
import { CryptoHash } from './utils';
import { config } from './config';
import { Transaction } from './transaction';
import CreateTransaction from './createTransaction';

interface BlockData {
    timestamp: number;
    lastHash: string;
    hash: string;
    data: string;
    nonce: number;
    difficulty: number;
    transactions: Transaction[];
    miner: string;
}


class CreateBlock {
    timestamp: number;
    lastHash: string;
    hash: string;
    data: string;
    nonce: number;
    difficulty: number;
    transactions: Transaction[];
    miner: string;

    constructor({ timestamp, lastHash, hash, data, nonce, difficulty, transactions, miner }: BlockData) {
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
        const genesisData = config.getGenesisData();
        return new this(genesisData);
    }

    static mineBlock({ lastBlock, transactions, miner }: { lastBlock: CreateBlock, transactions: Transaction[], miner: string }) {
        let hash, timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = CreateBlock.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = CryptoHash(timestamp, lastHash, transactions, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        const data = ''; // Set the appropriate value for data

        return new this({
            timestamp,
            lastHash,
            transactions,
            difficulty,
            nonce,
            miner,
            hash,
            data, // Add data property to the object
        });
    }

    static adjustDifficulty({ originalBlock, timestamp }: { originalBlock: CreateBlock, timestamp: number }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        const mineRate = config.getMineRate();
        if ((timestamp - originalBlock.timestamp) > mineRate) return difficulty - 1;

        return difficulty + 1;
    }
}

export default CreateBlock;
