'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = __importDefault(require("./wallet"));
const CPUWallet_1 = __importDefault(require("./CPUWallet"));
const GPUWallet_1 = __importDefault(require("./GPUWallet"));
class WalletMap {
    constructor() {
        this._walletMap = new Map();
    }
    get walletMap() {
        return this._walletMap;
    }
    set walletMap(value) {
        this._walletMap = value;
    }
    getWallet(address) {
        return this._walletMap.get(address);
    }
    createWallet() {
        const wallet = new wallet_1.default();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }
    createCPUWallet() {
        const wallet = new CPUWallet_1.default();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }
    createGPUWallet() {
        const wallet = new GPUWallet_1.default();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }
    toString() {
        return "Wallet Map: " + this._walletMap;
    }
    print() {
        console.log(this.toString());
    }
}
exports.default = WalletMap;
