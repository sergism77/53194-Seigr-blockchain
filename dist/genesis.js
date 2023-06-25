'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENESIS_DATA = void 0;
const big_integer_1 = __importDefault(require("big-integer"));
const GENESIS_DATA = {
    chainId: 53194,
    nativeToken: {
        name: 'Seig',
        symbol: 'SEIG',
        decimals: 18,
        totalSupply: (0, big_integer_1.default)(0),
        maxSupply: (0, big_integer_1.default)(0),
        burnable: true,
        mintable: true,
        owner: 'genesisWallet.publicKey',
    },
    timestamp: 0,
    epoch: 53194,
    blockTime: 6,
    requestTime: 3,
    hybrid: true,
    difficulty: 1,
    reward: 0.005,
    gasless: true,
    maxBlockSize: 5319400,
    maxTransactionSize: 53194,
    maxTransactionFee: 0.000053194,
    milestones: {
        Bispedalen: 53194,
        Bjønndalen: 106388,
    },
    coinbaseAddress: 'genesisWallet.publicKey',
};
exports.GENESIS_DATA = GENESIS_DATA;
