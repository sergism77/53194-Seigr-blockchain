"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBlock = exports.SaveBlock = exports.Block = void 0;
/* The Block class represents a block in a blockchain and provides methods for mining, validating, and
saving blocks. */
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const utils_1 = require("./utils");
const transaction_1 = require("./transaction");
const genesis_1 = require("./genesis");
const lodash_1 = require("lodash");
const elliptic_1 = require("elliptic");
const ellipticCurve = new elliptic_1.ec('secp256k1');
const walletDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'wallets');
const blockchainDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockchain');
/* The Block class defines the properties and methods for creating and managing blocks in a blockchain. */
class Block {
    /**
     * This function constructs a block object with the given data and generates a unique ID for the block.
     * @param {BlockData} data - The parameter `data` is an object of type `BlockData` which contains all
     * the necessary data to create a new block in a blockchain. It includes the index of the block, the
     * timestamp of when it was created, the hash of the previous block, the hash of the current block, the
     */
    constructor(data) {
        this.index = data.index;
        this.timestamp = data.timestamp;
        this.previousHash = data.previousHash;
        this.lastHash = data.lastHash;
        this.hash = data.hash;
        this.data = data.data;
        this.nonce = data.nonce;
        this.difficulty = data.difficulty;
        this.transactions = data.transactions;
        this.miner = data.miner;
        this.id = data.id; // Generate the unique ID for the block
    }
    /**
     * The function "genesis" returns a new block with the data specified in the constant "GENESIS_DATA".
     * @returns A new Block object with the data specified in the GENESIS_DATA constant.
     */
    static genesis() {
        return new Block(genesis_1.GENESIS_DATA);
    }
    /**
     * This function adjusts the difficulty of a block based on the original block's difficulty and
     * timestamp.
     * @param  - The `adjustDifficulty` function takes in an object with two properties:
     * @returns The function `adjustDifficulty` returns a number, which is the adjusted difficulty level
     * based on the original block's difficulty and timestamp.
     */
    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;
        if (difficulty < 1)
            return 1;
        if (timestamp - originalBlock.timestamp > Block.MINE_RATE)
            return difficulty - 1;
        return difficulty + 1;
    }
    /**
     * The function checks if a given block is valid by comparing its hash and difficulty with the previous
     * block's hash and difficulty.
     * @param {Block} block - a block object that contains information about the current block being
     * validated, including its index, timestamp, hash, data, nonce, difficulty, transactions, and miner.
     * @param {Block} lastBlock - The `lastBlock` parameter is an object of type `Block` that represents
     * the last block in the blockchain before the current block being validated. It contains information
     * such as the index, timestamp, hash, data, nonce, difficulty, transactions, and miner of the last
     * block.
     * @returns A boolean value is being returned, which indicates whether the given block is valid or not.
     */
    static isValidBlock(block, lastBlock) {
        const { index, timestamp, hash, data, nonce, difficulty, transactions, miner } = block;
        const lastDifficulty = lastBlock.difficulty;
        const lastHash = lastBlock.hash;
        const expectedHash = (0, utils_1.CryptoHash)(index, timestamp, lastHash, data, nonce, difficulty);
        if (hash !== expectedHash)
            return false;
        if (Math.abs(lastDifficulty - difficulty) > 1)
            return false;
        return true;
    }
    /**
     * This function checks if a given blockchain is valid by verifying each block's validity and ensuring
     * they are linked correctly.
     * @param {Block[]} chain - An array of Block objects representing a blockchain.
     * @returns A boolean value indicating whether the given chain of blocks is valid or not.
     */
    static isValidChain(chain) {
        if (!(0, lodash_1.isEqual)(chain[0], Block.genesis()))
            return false;
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i - 1];
            if (!Block.isValidBlock(block, lastBlock))
                return false;
            if (block.lastHash !== lastBlock.hash)
                return false;
        }
        return true;
    }
    /**
     * This function replaces the current blockchain with a new one if it is longer and valid.
     * @param {Block[]} chain - An array of Block objects representing the new blockchain that will replace
     * the current one.
     * @returns Nothing is being returned. The function is of type `void`, which means it does not return
     * any value.
     */
    static replaceChain(chain) {
        if (chain.length <= this.chain.length) {
            console.error('The incoming chain must be longer');
            return;
        }
        if (!Block.isValidChain(chain)) {
            console.error('The incoming chain must be valid');
            return;
        }
        console.log('Replacing chain with', chain);
        this.chain = chain;
    }
    /**
     * The function mines a new block with valid transactions from the transaction pool and adds it to the
     * blockchain.
     * @param  - The `mineTransactionPool` function takes in an object with two properties:
     * @returns a mined block.
     */
    static mineTransactionPool({ transactionPool, wallet }) {
        const validTransactions = transactionPool.validTransactions().slice();
        validTransactions.push(transaction_1.Transaction.rewardTransaction({ minerWallet: wallet }));
        const block = Block.mineBlock({
            lastBlock: Block.chain[Block.chain.length - 1],
            data: validTransactions,
            wallet,
        });
        Block.chain.push(block);
        return block;
    }
    /**
     * This function saves a block as a JSON file in a specified directory.
     */
    saveBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            const blockPath = path_1.default.join(blockchainDirectory, `${this.hash}.json`);
            try {
                yield promises_1.default.writeFile(blockPath, JSON.stringify(this));
            }
            catch (error) {
                console.error(`Failed to save block at ${blockPath}`, error);
            }
        });
    }
    /**
     * This function loads a block from a file in JSON format and returns it as a Block object, or returns
     * null if it fails.
     * @param {string} hash - The hash parameter is a string representing the hash of a block that needs to
     * be loaded from a file.
     * @returns a Promise that resolves to a Block object or null if the block cannot be loaded.
     */
    static loadBlock(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const blockPath = path_1.default.join(blockchainDirectory, `${hash}.json`);
            try {
                const blockJsonBuffer = yield promises_1.default.readFile(blockPath);
                const blockJson = blockJsonBuffer.toString(); // Convert Buffer to string
                return new this(JSON.parse(blockJson));
            }
            catch (error) {
                console.error(`Failed to load block at ${blockPath}`, error);
                return null;
            }
        });
    }
    /**
     * This function mines a new block with a given set of data and adds it to the blockchain.
     * @param  - - `lastBlock`: The last block in the blockchain, which this new block will be linked to.
     * @returns A new block object is being returned.
     */
    static mineBlock({ lastBlock, data, wallet }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const index = lastBlock.index + 1;
        const difficulty = lastBlock.difficulty;
        let nonce = 0;
        let hash, miner;
        do {
            nonce++;
            hash = (0, utils_1.CryptoHash)(index, timestamp, lastHash, data, nonce, difficulty);
            miner = ellipticCurve.keyFromPrivate(wallet.getPrivateKey()).getPublic().encode('hex', true);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
        return new this({
            index,
            timestamp,
            previousHash: lastHash,
            lastHash,
            hash,
            data,
            nonce,
            difficulty,
            transactions: data,
            miner,
            id: Block.generateBlockId(index, hash),
        });
    }
    static generateBlockId(index, hash) {
        return `${index}-${hash}`;
    }
}
exports.Block = Block;
Block.chain = [];
Block.MINE_RATE = 60000; // Define MINE_RATE static property
const SaveBlock = (block) => __awaiter(void 0, void 0, void 0, function* () {
    const blockPath = path_1.default.join(blockchainDirectory, `${block.hash}.json`);
    try {
        yield promises_1.default.writeFile(blockPath, JSON.stringify(block));
    }
    catch (error) {
        console.error(`Failed to save block at ${blockPath}`, error);
    }
});
exports.SaveBlock = SaveBlock;
const LoadBlock = (blockHash) => __awaiter(void 0, void 0, void 0, function* () {
    const blockPath = path_1.default.join(blockchainDirectory, `${blockHash}.json`);
    try {
        const blockJsonBuffer = yield promises_1.default.readFile(blockPath);
        const blockJson = blockJsonBuffer.toString(); // Convert Buffer to string
        return new Block(JSON.parse(blockJson));
    }
    catch (error) {
        console.error(`Failed to load block at ${blockPath}`, error);
        return null;
    }
});
exports.LoadBlock = LoadBlock;
// Create an instance of the Block class
const block = new Block({
    index: genesis_1.GENESIS_DATA.index,
    timestamp: Date.now(),
    previousHash: genesis_1.GENESIS_DATA.previousHash,
    lastHash: genesis_1.GENESIS_DATA.lastHash,
    hash: genesis_1.GENESIS_DATA.hash,
    data: genesis_1.GENESIS_DATA.data,
    nonce: genesis_1.GENESIS_DATA.nonce,
    difficulty: genesis_1.GENESIS_DATA.difficulty,
    transactions: genesis_1.GENESIS_DATA.transactions,
    miner: genesis_1.GENESIS_DATA.miner,
    id: Block.generateBlockId(genesis_1.GENESIS_DATA.index, genesis_1.GENESIS_DATA.hash),
});
// Use the block instance as needed
console.log(block);
