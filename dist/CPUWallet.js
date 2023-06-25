'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPUWalletMapSingleton = exports.CPUWalletMap = exports.CPUWallet = void 0;
const transaction_1 = __importDefault(require("./transaction"));
class CPUWallet {
    constructor() {
        this._address = "CPU";
        this._balance = 0;
        this._transactions = [];
        this._transactions.push(new transaction_1.default("genesis", this._address, 0));
    }
    createTransaction(to, amount) {
        return new transaction_1.default(this._address, to, amount);
    }
    get transactions() {
        return this._transactions;
    }
    addTransaction(transaction) {
        this._transactions.push(transaction);
    }
    get address() {
        return this._address;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
exports.CPUWallet = CPUWallet;
class CPUWalletMap {
    constructor() {
        this._wallets = {};
    }
    get wallets() {
        return this._wallets;
    }
    getWallet(address) {
        return this._wallets[address];
    }
    createWallet() {
        const wallet = new CPUWallet();
        this._wallets[wallet.address] = wallet;
        return wallet;
    }
}
exports.CPUWalletMap = CPUWalletMap;
class CPUWalletMapSingleton {
    constructor() {
        if (!CPUWalletMapSingleton.instance) {
            CPUWalletMapSingleton.instance = new CPUWalletMap();
        }
    }
    static getInstance() {
        return CPUWalletMapSingleton.instance;
    }
}
exports.CPUWalletMapSingleton = CPUWalletMapSingleton;
