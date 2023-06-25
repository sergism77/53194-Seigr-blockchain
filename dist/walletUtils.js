"use strict";
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
const config_1 = require("./config");
const elliptic_1 = require("elliptic");
const transaction_1 = require("./transaction");
const ellipticCurve = new elliptic_1.ec('secp256k1');
const walletDirectory = path.join(os.homedir(), 'SeigrBlockchain', 'wallets');
class WalletUtils {
    static createWallet() {
        const wallet = new Wallet();
        fs.writeFileSync(path.join(walletDirectory, `${wallet.address}.json`), JSON.stringify(wallet));
        return wallet;
    }
    static loadWallet(address) {
        const walletPath = path.join(walletDirectory, `${address}.json`);
        if (!fs.existsSync(walletPath)) {
            throw new Error('Wallet does not exist');
        }
        const walletData = fs.readFileSync(walletPath, 'utf8');
        const wallet = Wallet.fromJSON(walletData);
        return wallet;
    }
}
class Wallet {
    constructor() {
        this.balance = config_1.STARTING_BALANCE;
        this.keyPair = ellipticCurve.genKeyPair();
        this.address = this.keyPair.getPublic().encode('hex');
    }
    publicKey() {
        return this.keyPair.getPublic().encode('hex');
    }
    sign(data) {
        return this.keyPair.sign((0, utils_1.CryptoHash)(data));
    }
    createTransaction({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Wallet.calculateBalance({
                chain,
                address: this.address,
            });
        }
        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }
        return new transaction_1.Transaction({ senderWallet: this, recipient, amount });
    }
    static calculateBalance({ chain, address }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;
        for (let i = chain.length - 1; i > 0; i--) {
            const block = chain[i];
            for (let transaction of block.data) {
                if (transaction.input.address === address) {
                    hasConductedTransaction = true;
                }
                const addressOutput = transaction.outputMap[address];
                if (addressOutput) {
                    outputsTotal = outputsTotal + addressOutput;
                }
            }
            if (hasConductedTransaction) {
                break;
            }
        }
        return hasConductedTransaction ? outputsTotal : config_1.STARTING_BALANCE + outputsTotal;
    }
    static blockchainWallet() {
        const blockchainWallet = new this();
        blockchainWallet.address = 'blockchain-wallet';
        return blockchainWallet;
    }
    static fromJSON(walletData) {
        const { balance, keyPair, address } = JSON.parse(walletData);
        const wallet = new Wallet();
        wallet.balance = balance;
        wallet.keyPair = ellipticCurve.keyFromPrivate(keyPair.privateKey, 'hex');
        wallet.address = address;
        return wallet;
    }
    toJSON() {
        return JSON.stringify({
            balance: this.balance,
            keyPair: {
                privateKey: this.keyPair.getPrivate('hex'),
            },
            address: this.address,
        });
    }
}
module.exports = WalletUtils;
