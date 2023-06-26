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
const os_1 = __importDefault(require("os"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
const block_js_1 = require("./block.js");
const wallet_1 = __importDefault(require("./wallet"));
const walletPool_1 = require("./walletPool");
const blockPool_1 = require("./blockPool");
const transactionPool_1 = require("./transactionPool");
const blockchainPool_1 = require("./blockchainPool");
const blockchainDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockchain');
const transactionPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'transaction-pool');
class Blockchain {
    constructor() {
        this.chain = [];
    }
    addBlock(transactions, minerIdentifier) {
        return __awaiter(this, void 0, void 0, function* () {
            // Custom logic for adding blocks to the blockchain
            if (!transactions || Object.keys(transactions).length === 0) {
                throw new Error('Block does not contain any transactions.');
            }
            const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : '';
            const newBlock = new block_js_1.Block({
                index: 0,
                previousHash: '',
                id: '',
                timestamp: Date.now(),
                lastHash: previousHash,
                hash: (0, utils_1.CryptoHash)(previousHash),
                data: transactions,
                nonce: 0,
                difficulty: 0,
                transactions: transactions,
                miner: minerIdentifier,
            });
            try {
                yield (0, block_js_1.SaveBlock)(newBlock);
                for (const transactionId of Object.keys(transactions)) {
                    const transactionFilePath = path_1.default.join(transactionPoolDirectory, `${transactionId}.json`);
                    if (yield fileExists(transactionFilePath)) {
                        yield promises_1.default.unlink(transactionFilePath);
                    }
                }
                for (const transaction of Object.values(transactions)) {
                    if (transaction &&
                        transaction.input &&
                        transaction.input.address &&
                        typeof transaction.input.address === 'string' // Check if the address is a string
                    ) {
                        const wallet = new wallet_1.default({ address: transaction.input.address });
                        const walletBalance = wallet_1.default.calculateBalance({
                            chain: this.chain,
                            address: wallet.address,
                        });
                        yield wallet.updateBalance(walletBalance);
                    }
                }
                yield this.saveBlockchain();
                yield this.updatePools();
            }
            catch (error) {
                console.error('Error adding block:', error);
                throw error;
            }
        });
    }
    updatePools() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const walletPool = new walletPool_1.CreateWalletPool({ chain: this.chain });
                yield walletPool.updateWalletPool();
                const blockPool = new blockPool_1.CreateBlockPool({ chain: this.chain });
                yield blockPool.updateBlockPool();
                const transactionPool = new transactionPool_1.CreateTransactionPool({ chain: this.chain });
                yield transactionPool.updateTransactionPool();
                const blockchainPool = new blockchainPool_1.CreateBlockchainPool({ blockchain: this });
                yield blockchainPool.updateBlockchainPool();
            }
            catch (error) {
                console.error('Error updating pools:', error);
                throw error;
            }
        });
    }
    getBlocks() {
        return this.chain;
    }
    saveBlockchain() {
        return __awaiter(this, void 0, void 0, function* () {
            const blockchainPath = path_1.default.join(blockchainDirectory, 'blockchain.json');
            try {
                yield promises_1.default.writeFile(blockchainPath, JSON.stringify(this));
            }
            catch (error) {
                console.error('Error saving blockchain:', error);
                throw error;
            }
        });
    }
    static loadBlockchain() {
        return __awaiter(this, void 0, void 0, function* () {
            const blockchainPath = path_1.default.join(blockchainDirectory, 'blockchain.json');
            try {
                const blockchainJSON = yield promises_1.default.readFile(blockchainPath, 'utf-8');
                const blockchainData = JSON.parse(blockchainJSON);
                const blockchain = new Blockchain();
                blockchain.chain = blockchainData.chain.map((blockData) => new block_js_1.Block(blockData));
                return blockchain;
            }
            catch (error) {
                console.error('Error loading blockchain:', error);
                throw error;
            }
        });
    }
}
function fileExists(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield promises_1.default.access(filePath);
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
exports.default = Blockchain;
