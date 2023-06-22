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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeigrBlockchain = void 0;
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var elliptic_1 = require("elliptic");
var utils_1 = require("./utils");
var block_js_1 = require("./block.js");
var walletUtils_1 = require("./walletUtils");
var wallet_1 = __importDefault(require("./wallet"));
var genesisBlock_1 = require("./genesisBlock");
var createBlockchain_1 = __importDefault(require("./createBlockchain"));
var loadBlockchain_1 = __importDefault(require("./loadBlockchain"));
var walletPool_1 = require("./walletPool");
var blockPool_1 = require("./blockPool");
var logger_1 = require("./logger");
var logger = new logger_1.Logger();
var walletDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'wallets');
var blockDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blocks');
var transactionDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'transactions');
var blockchainDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockchain');
var walletPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'walletPools');
var blockPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'blockPools');
var transactionPoolDirectory = path_1.default.join(os_1.default.homedir(), 'Seigr', 'transactionPools');
var ensureDirectoriesExist = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                return [4 /*yield*/, fs_1.promises.mkdir(walletDirectory, { recursive: true })];
            case 1:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(blockDirectory, { recursive: true })];
            case 2:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(transactionDirectory, { recursive: true })];
            case 3:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(blockchainDirectory, { recursive: true })];
            case 4:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(walletPoolDirectory, { recursive: true })];
            case 5:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(blockPoolDirectory, { recursive: true })];
            case 6:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(transactionPoolDirectory, { recursive: true })];
            case 7:
                _a.sent();
                return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                logger.error('Error creating directories:', error_1);
                throw new Error('Error creating directories');
            case 9: return [2 /*return*/];
        }
    });
}); };
var loadOrCreateSenderWallet = function () { return __awaiter(void 0, void 0, void 0, function () {
    var senderWalletPath, newSenderWallet, walletData, error_2, writeError_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                senderWalletPath = path_1.default.join(walletDirectory, 'sender-wallet.json');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 8]);
                return [4 /*yield*/, fs_1.promises.readFile(senderWalletPath, 'utf8')];
            case 2:
                walletData = _a.sent();
                newSenderWallet = JSON.parse(walletData);
                return [3 /*break*/, 8];
            case 3:
                error_2 = _a.sent();
                logger.error("Error reading wallet from disk: ".concat(error_2));
                newSenderWallet = (0, walletUtils_1.createWallet)({ Wallet: wallet_1.default });
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, fs_1.promises.writeFile(senderWalletPath, JSON.stringify(newSenderWallet))];
            case 5:
                _a.sent();
                logger.log('New sender wallet generated successfully.');
                return [3 /*break*/, 7];
            case 6:
                writeError_1 = _a.sent();
                logger.error("Error writing sender wallet to disk: ".concat(writeError_1));
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 8];
            case 8: return [2 /*return*/, newSenderWallet];
        }
    });
}); };
var loadOrCreateBlockchain = function () { return __awaiter(void 0, void 0, void 0, function () {
    var blockchainPath, _a, genesisWallet, genesisBlock, blockchain;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                blockchainPath = path_1.default.join(blockchainDirectory, 'blockchain.json');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 7]);
                return [4 /*yield*/, fs_1.promises.access(blockchainPath)];
            case 2:
                _b.sent();
                return [2 /*return*/, (0, loadBlockchain_1.default)()];
            case 3:
                _a = _b.sent();
                return [4 /*yield*/, loadOrCreateSenderWallet()];
            case 4:
                genesisWallet = _b.sent();
                genesisBlock = new genesisBlock_1.GenesisBlock({ genesisWallet: genesisWallet });
                return [4 /*yield*/, (0, block_js_1.saveBlock)(genesisBlock)];
            case 5:
                _b.sent();
                blockchain = new createBlockchain_1.default();
                blockchain.addBlock(genesisBlock);
                return [4 /*yield*/, saveBlockchain(blockchain)];
            case 6:
                _b.sent();
                return [2 /*return*/, blockchain];
            case 7: return [2 /*return*/];
        }
    });
}); };
var saveBlockchain = function (blockchain) { return __awaiter(void 0, void 0, void 0, function () {
    var blockchainPath, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                blockchainPath = path_1.default.join(blockchainDirectory, 'blockchain.json');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fs_1.promises.writeFile(blockchainPath, JSON.stringify(blockchain, null, 2), 'utf8')];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                logger.error("Error saving blockchain: ".concat(error_3));
                throw new Error('Error saving blockchain');
            case 4: return [2 /*return*/];
        }
    });
}); };
var createBlock = function (previousHash, processedTransactions) {
    var ec = new elliptic_1.ec('secp256k1');
    var keyPair = ec.keyFromPrivate('private key');
    var minerIdentifier = keyPair.getPublic().encode('hex');
    return new block_js_1.Block({
        timestamp: Date.now(),
        lastHash: previousHash,
        hash: (0, utils_1.cryptoHash)(previousHash),
        data: processedTransactions,
        nonce: 0,
        difficulty: 0,
        transactions: processedTransactions,
        miner: minerIdentifier,
    });
};
var SeigrBlockchain = /** @class */ (function () {
    function SeigrBlockchain() {
        this.chain = [];
        this.walletPool = null;
        this.blockPool = null;
    }
    SeigrBlockchain.prototype.initializePools = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, walletPool_1.CreateWalletPool)()];
                    case 1:
                        _a.walletPool = _c.sent();
                        _b = this;
                        return [4 /*yield*/, (0, blockPool_1.CreateBlockPool)()];
                    case 2:
                        _b.blockPool = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SeigrBlockchain.prototype.addBlock = function (transactions) {
        return __awaiter(this, void 0, void 0, function () {
            var previousHash, processedTransactions, newBlock, batchSize_1, batches, _i, batches_1, batch, wallets, _a, batch_1, transaction, wallet, error_4;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!transactions || transactions.length === 0) {
                            throw new Error('Block does not contain any transactions.');
                        }
                        previousHash = this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : null;
                        processedTransactions = transactions.slice();
                        newBlock = createBlock(previousHash, processedTransactions);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 12, , 13]);
                        return [4 /*yield*/, (0, block_js_1.saveBlock)(newBlock)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, Promise.all(processedTransactions.map(function (transaction) {
                                return fs_1.promises.unlink(path_1.default.join(transactionPoolDirectory, "".concat(transaction.id, ".json")));
                            }))];
                    case 3:
                        _b.sent();
                        batchSize_1 = 10;
                        batches = processedTransactions.reduce(function (batches, transaction, idx) {
                            var batchIndex = Math.floor(idx / batchSize_1);
                            batches[batchIndex] = batches[batchIndex] || [];
                            batches[batchIndex].push(transaction);
                            return batches;
                        }, []);
                        _i = 0, batches_1 = batches;
                        _b.label = 4;
                    case 4:
                        if (!(_i < batches_1.length)) return [3 /*break*/, 7];
                        batch = batches_1[_i];
                        wallets = new Map();
                        for (_a = 0, batch_1 = batch; _a < batch_1.length; _a++) {
                            transaction = batch_1[_a];
                            wallet = new wallet_1.default({ walletId: transaction.input.address });
                            wallets.set(wallet.walletId, wallet);
                        }
                        return [4 /*yield*/, Promise.all(Array.from(wallets.values()).map(function (wallet) {
                                var balance = wallet.calculateBalance({ blockchain: _this });
                                return wallet.updateBalance({ blockchain: _this, balance: balance });
                            }))];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        this.chain.push(newBlock);
                        return [4 /*yield*/, saveBlockchain(this)];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, this.walletPool.updateWalletPool()];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, this.blockPool.saveBlockPool()];
                    case 10:
                        _b.sent();
                        return [4 /*yield*/, this.blockPool.updateBlockchainPool(this)];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        error_4 = _b.sent();
                        logger.error('Error adding block:', error_4);
                        throw new Error('Error adding block');
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return SeigrBlockchain;
}());
exports.SeigrBlockchain = SeigrBlockchain;
var createOrLoadBlockchain = function () { return __awaiter(void 0, void 0, void 0, function () {
    var blockchain;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ensureDirectoriesExist()];
            case 1:
                _a.sent();
                return [4 /*yield*/, loadOrCreateBlockchain()];
            case 2:
                blockchain = _a.sent();
                return [4 /*yield*/, blockchain.initializePools()];
            case 3:
                _a.sent();
                return [2 /*return*/, blockchain];
        }
    });
}); };
exports.default = createOrLoadBlockchain;
