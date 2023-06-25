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
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPrivateKey = exports.Wallet = exports.LoadTransaction = exports.SaveTransaction = exports.CreateTransaction = exports.Transaction = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const utils_1 = require("./utils");
const config_1 = require("./config");
const elliptic = __importStar(require("elliptic"));
const crypto = __importStar(require("crypto"));
const ec = new elliptic.ec('secp256k1');
// Update transactionDirectory to be configurable
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
class Wallet {
    constructor() {
        this.keyPair = ec.genKeyPair();
        this.publicKey = this.keyPair.getPublic('hex');
        this.balance = config_1.STARTING_BALANCE;
    }
    /**
     * Signs the given data using the wallet's private key.
     * @param {string} data - The data to sign.
     * @returns {string} - The signature.
     */
    sign(data) {
        return this.keyPair.sign((0, utils_1.CryptoHash)(data)).toDER('hex');
    }
    /**
     * Retrieves the transaction history for the user from the transaction directory.
     * @returns {Transaction[]} - The array of transactions.
     */
    getTransactionHistory() {
        const transactions = [];
        const files = fs.readdirSync(transactionDirectory);
        for (const file of files) {
            const transactionFile = path.join(transactionDirectory, file);
            const transactionData = fs.readFileSync(transactionFile, 'utf8');
            const transaction = JSON.parse(transactionData);
            transactions.push(transaction);
        }
        return transactions;
    }
}
exports.Wallet = Wallet;
class Transaction {
    constructor({ senderWallet, recipient, amount }) {
        this.id = (0, utils_1.CryptoHash)(Date.now().toString());
        this.outputMap = this.createOutputMap({
            senderWallet,
            recipient,
            amount,
        });
        this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
    }
    createOutputMap({ senderWallet, recipient, amount }) {
        const outputMap = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;
        return outputMap;
    }
    createInput({ senderWallet, outputMap, }) {
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(JSON.stringify(outputMap)),
        };
    }
    /**
     * Validates a transaction's amount and signature.
     * @param {Transaction} transaction - The transaction to validate.
     * @returns {boolean} - Indicates whether the transaction is valid.
     */
    static validateTransaction(transaction) {
        const { input: { address, amount, signature }, outputMap, } = transaction;
        if (amount !== outputMap[address]) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!(0, utils_1.VerifySignature)(address, JSON.stringify(outputMap), signature)) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }
        return true;
    }
}
exports.Transaction = Transaction;
class SaveTransaction {
    constructor({ transaction }) {
        this.transaction = transaction;
    }
    /**
     * Saves the transaction to a file.
     */
    saveTransaction() {
        const transactionFile = path.join(transactionDirectory, `${this.transaction.id}.json`);
        fs.writeFileSync(transactionFile, JSON.stringify(this.transaction));
    }
}
exports.SaveTransaction = SaveTransaction;
const CreateTransaction = ({ senderWallet, recipient, amount }) => {
    if (amount > senderWallet.balance) {
        throw new Error('Amount exceeds balance');
    }
    return new Transaction({
        senderWallet,
        recipient,
        amount,
    });
};
exports.CreateTransaction = CreateTransaction;
const LoadTransaction = ({ transactionId }) => {
    const transactionFile = path.join(transactionDirectory, `${transactionId}.json`);
    if (!fs.existsSync(transactionFile)) {
        throw new Error('Transaction file not found');
    }
    const transactionData = fs.readFileSync(transactionFile, 'utf8');
    try {
        return JSON.parse(transactionData);
    }
    catch (error) {
        throw new Error('Invalid transaction file');
    }
};
exports.LoadTransaction = LoadTransaction;
const encryptPrivateKey = (privateKey, passphrase) => {
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(passphrase, 'salt', 24);
    const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
    let encryptedPrivateKey = cipher.update(privateKey, 'utf8', 'hex');
    encryptedPrivateKey += cipher.final('hex');
    return {
        encryptedPrivateKey,
        iv: iv.toString('hex'),
    };
};
exports.encryptPrivateKey = encryptPrivateKey;
