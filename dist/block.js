'use strict';
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
exports.loadBlock = exports.saveBlock = exports.Block = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const utils_1 = require("./utils");
const elliptic_1 = __importDefault(require("elliptic"));
const config_1 = require("./config");
const transaction_1 = require("./transaction");
const genesis_1 = require("./genesis");
const walletDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'wallets');
const blockchainDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockchain');
class Block {
    constructor({ index, timestamp, previousHash, lastHash, hash, data, nonce, difficulty, transactions, miner }) {
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.transactions = transactions;
        this.miner = miner;
    }
    static genesis() {
        return new Block(genesis_1.GENESIS_DATA);
    }
    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;
        if (difficulty < 1)
            return 1;
        if (timestamp - originalBlock.timestamp > config_1.MINE_RATE)
            return difficulty - 1;
        return difficulty + 1;
    }
    static isValidBlock(block, lastBlock) {
        const { index, timestamp, hash, data, nonce, difficulty, transactions, miner } = block;
        const lastDifficulty = lastBlock.difficulty;
        const lastHash = lastBlock.hash;
        const expectedHash = (0, utils_1.cryptoHash)(index, timestamp, lastHash, data, nonce, difficulty);
        if (hash !== expectedHash)
            return false;
        if (Math.abs(lastDifficulty - difficulty) > 1)
            return false;
        return true;
    }
    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
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
    static replaceChain(chain) {
        if (chain.length <= this.chain.length) {
            console.error('The incoming chain must be longer');
            return;
        }
        if (!Block.isValidChain(chain)) {
            console.error('The incoming chain must be valid');
            return;
        }
        console.log('replacing chain with', chain);
        this.chain = chain;
    }
    static mineTransactionPool({ transactionPool, wallet }) {
        const validTransactions = transactionPool.validTransactions().slice();
        validTransactions.push(transaction_1.Transaction.rewardTransaction({ minerWallet: wallet }));
        const block = this.mineBlock({ lastBlock: this.chain[this.chain.length - 1], data: validTransactions });
        this.chain.push(block);
        return block;
    }
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
    static loadBlock(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const blockPath = path_1.default.join(blockchainDirectory, `${hash}.json`);
            try {
                const blockJson = yield promises_1.default.readFile(blockPath);
                return new this(JSON.parse(blockJson));
            }
            catch (error) {
                console.error(`Failed to load block at ${blockPath}`, error);
                return null;
            }
        });
    }
    static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const index = lastBlock.index + 1;
        const difficulty = lastBlock.difficulty;
        let nonce = 0;
        let hash, miner;
        do {
            nonce++;
            hash = (0, utils_1.cryptoHash)(index, timestamp, lastHash, data, nonce, difficulty);
            miner = elliptic_1.default.genKeyPair().getPublic().encode('hex');
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
        return new this({ index, timestamp, lastHash, data, nonce, difficulty, hash, miner });
    }
}
exports.Block = Block;
const saveBlock = (block) => __awaiter(void 0, void 0, void 0, function* () {
    const blockPath = path_1.default.join(blockchainDirectory, `${block.hash}.json`);
    try {
        yield promises_1.default.writeFile(blockPath, JSON.stringify(block));
    }
    catch (error) {
        console.error(`Failed to save block at ${blockPath}`, error);
    }
});
exports.saveBlock = saveBlock;
const loadBlock = (blockHash) => __awaiter(void 0, void 0, void 0, function* () {
    const blockPath = path_1.default.join(blockchainDirectory, `${blockHash}.json`);
    try {
        const blockJson = yield promises_1.default.readFile(blockPath);
        return JSON.parse(blockJson);
    }
    catch (error) {
        console.error(`Failed to load block at ${blockPath}`, error);
        return null;
    }
});
exports.loadBlock = loadBlock;
