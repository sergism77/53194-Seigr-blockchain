'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const utils_1 = require("./utils");
const config = {
    walletDirectory: path.join(os.homedir(), 'Seigr', 'wallets'),
    blockDirectory: path.join(os.homedir(), 'Seigr', 'blocks'),
    transactionDirectory: path.join(os.homedir(), 'Seigr', 'transactions'),
    blockchainDirectory: path.join(os.homedir(), 'Seigr', 'blockchain'),
    walletPoolDirectory: path.join(os.homedir(), 'Seigr', 'walletPools'),
    blockPoolDirectory: path.join(os.homedir(), 'Seigr', 'blockPools'),
    transactionPoolDirectory: path.join(os.homedir(), 'Seigr', 'transactionPools'),
    genesisWalletDirectory: path.join(os.homedir(), 'Seigr', 'genesisWallet'),
    p2pDirectory: path.join(os.homedir(), 'Seigr', 'p2p'),
    minerDirectory: path.join(os.homedir(), 'Seigr', 'miner'),
    genesisBlockDirectory: path.join(os.homedir(), 'Seigr', 'genesisBlock'),
};
class GenesisWalletPool {
    constructor(address) {
        this.address = address;
        this.balance = 0;
        this.publicKey = utils_1.ec.keyFromPublic(this.address, 'hex').getPublic().encode('hex');
    }
    save() {
        fs.writeFileSync(path.join(config.walletDirectory, `${this.address}.json`), JSON.stringify(this));
    }
    static load(address) {
        const filePath = path.join(config.walletDirectory, `${address}.json`);
        if (!fs.existsSync(filePath)) {
            throw new Error(`Wallet file does not exist for address: ${address}`);
        }
        const walletData = JSON.parse(fs.readFileSync(filePath).toString());
        const wallet = new GenesisWalletPool(walletData.address);
        wallet.balance = walletData.balance;
        wallet.publicKey = walletData.publicKey;
        return wallet;
    }
}
module.exports = GenesisWalletPool;
