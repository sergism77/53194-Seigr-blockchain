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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const elliptic_1 = require("elliptic");
const utils_1 = require("./utils");
const block_1 = require("./block");
const wallet_1 = __importDefault(require("./wallet"));
const genesisBlock_1 = require("./genesisBlock");
const createBlockchain_1 = __importDefault(require("./createBlockchain"));
const loadBlockchain_1 = __importDefault(require("./loadBlockchain"));
const walletPool_1 = require("./walletPool");
const blockPool_1 = require("./blockPool");
const logger_1 = __importDefault(require("./logger"));
const walletDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'wallets');
const blockDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'transactionPools');
const ensureDirectoriesExist = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs_1.promises.mkdir(walletDirectory, { recursive: true });
        yield fs_1.promises.mkdir(blockDirectory, { recursive: true });
        yield fs_1.promises.mkdir(transactionDirectory, { recursive: true });
        yield fs_1.promises.mkdir(blockchainDirectory, { recursive: true });
        yield fs_1.promises.mkdir(walletPoolDirectory, { recursive: true });
        yield fs_1.promises.mkdir(blockPoolDirectory, { recursive: true });
        yield fs_1.promises.mkdir(transactionPoolDirectory, { recursive: true });
    }
    catch (error) {
        logger_1.default.error(`Error creating directories: ${error.message}`);
        throw new Error(`Error creating directories: ${error.message}`);
    }
});
const loadOrCreateSenderWallet = () => __awaiter(void 0, void 0, void 0, function* () {
    const senderWalletPath = path_1.default.join(walletDirectory, 'sender-wallet.json');
    try {
        yield fs_1.promises.access(senderWalletPath);
        const senderWalletContents = yield fs_1.promises.readFile(senderWalletPath, 'utf8');
        const senderWallet = JSON.parse(senderWalletContents);
        logger_1.default.info('Sender wallet loaded successfully.');
        return senderWallet;
    }
    catch (_a) {
        const ec = new elliptic_1.ec('secp256k1');
        const senderWallet = ec.genKeyPair();
        const publicKey = senderWallet.getPublic().encode('hex', false);
        const privateKey = senderWallet.getPrivate().toString(16);
        const newSenderWallet = { publicKey, privateKey };
        try {
            yield fs_1.promises.writeFile(senderWalletPath, JSON.stringify(newSenderWallet), 'utf8');
            logger_1.default.info('New sender wallet generated and saved successfully.');
        }
        catch (writeError) {
            logger_1.default.error(`Error writing sender wallet to disk: ${writeError.message}`);
        }
        return newSenderWallet;
    }
});
const loadOrCreateBlockchain = () => __awaiter(void 0, void 0, void 0, function* () {
    const blockchainPath = path_1.default.join(blockchainDirectory, 'blockchain.json');
    try {
        yield fs_1.promises.access(blockchainPath);
        return (0, loadBlockchain_1.default)();
    }
    catch (_b) {
        const genesisWallet = yield loadOrCreateSenderWallet();
        const genesisBlock = new genesisBlock_1.GenesisBlock({ genesisWallet });
        yield (0, block_1.SaveBlock)(genesisBlock);
        const blockchain = new createBlockchain_1.default();
        blockchain.addBlock(genesisBlock);
        yield saveBlockchain(blockchain);
        return blockchain;
    }
});
const saveBlockchain = (blockchain) => __awaiter(void 0, void 0, void 0, function* () {
    const blockchainPath = path_1.default.join(blockchainDirectory, 'blockchain.json');
    try {
        yield fs_1.promises.writeFile(blockchainPath, JSON.stringify(blockchain, null, 2), 'utf8');
    }
    catch (error) {
        logger_1.default.error(`Error saving blockchain: ${error.message}`);
        throw new Error(`Error saving blockchain: ${error.message}`);
    }
});
const createBlock = (previousHash, processedTransactions) => {
    const ec = new elliptic_1.ec('secp256k1');
    const keyPair = ec.genKeyPair(); // Generate a new private key each time
    const minerIdentifier = keyPair.getPublic().encode('hex', false);
    return new block_1.Block({
        timestamp: Date.now(),
        lastHash: previousHash,
        hash: (0, utils_1.CryptoHash)(previousHash),
        data: processedTransactions,
        nonce: 0,
        difficulty: 0,
        transactions: processedTransactions,
        miner: minerIdentifier,
    });
};
class SeigrBlockchain {
    constructor() {
        this.chain = [];
        this.walletPool = null;
        this.blockPool = null;
    }
    initializePools() {
        return __awaiter(this, void 0, void 0, function* () {
            this.walletPool = yield (0, walletPool_1.CreateWalletPool)();
            this.blockPool = yield (0, blockPool_1.CreateBlockPool)();
        });
    }
    addBlock(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!transactions || transactions.length === 0) {
                throw new Error('Block does not contain any transactions.');
            }
            const previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;
            const processedTransactions = transactions.slice(); // Use a copy of the transactions array
            const newBlock = createBlock(previousHash, processedTransactions);
            try {
                yield (0, block_1.SaveBlock)(newBlock);
                yield Promise.all(processedTransactions.map((transaction) => fs_1.promises.unlink(path_1.default.join(transactionPoolDirectory, `${transaction.id}.json`))));
                const walletUpdatePromises = processedTransactions.map((transaction) => __awaiter(this, void 0, void 0, function* () {
                    const wallet = new wallet_1.default({ walletId: transaction.input.address });
                    const walletBalance = wallet.calculateBalance({ blockchain: this });
                    yield wallet.updateBalance({ blockchain: this, balance: walletBalance });
                }));
                yield Promise.all(walletUpdatePromises);
                this.chain.push(newBlock);
                yield saveBlockchain(this);
                yield this.walletPool.updateWalletPool();
                yield this.blockPool.saveBlockPool();
                yield this.blockPool.updateBlockchainPool(this);
            }
            catch (error) {
                logger_1.default.error(`Error adding block: ${error.message}`);
                throw new Error(`Error adding block: ${error.message}`);
            }
        });
    }
}
const createOrLoadBlockchain = () => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDirectoriesExist();
    const blockchain = yield loadOrCreateBlockchain();
    yield blockchain.initializePools();
    return blockchain;
});
exports.default = createOrLoadBlockchain;
