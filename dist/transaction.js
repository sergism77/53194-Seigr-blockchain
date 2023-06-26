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
exports.findUnspentTxOut = exports.isValidTransactionStructure = exports.getTransactionId = exports.encryptPrivateKey = exports.LoadTransaction = exports.SaveTransaction = exports.CreateTransaction = exports.Transaction = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const os = __importStar(require("os"));
const utils_1 = require("./utils");
const elliptic = __importStar(require("elliptic"));
const crypto = __importStar(require("crypto"));
const ec = new elliptic.ec('secp256k1');
// Update transactionDirectory to be configurable
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
function getTransactionId(transaction) {
    const transactionData = JSON.stringify(transaction);
    return (0, utils_1.CryptoHash)(transactionData);
}
exports.getTransactionId = getTransactionId;
function isValidTransactionStructure(transaction) {
    if (typeof transaction.id !== 'string' || typeof transaction.input !== 'object' || typeof transaction.outputMap !== 'object') {
        return false;
    }
    const { input, outputMap } = transaction;
    if (Object.keys(input).length !== 4) {
        return false;
    }
    if (typeof input.timestamp !== 'number' || typeof input.amount !== 'number' || typeof input.address !== 'string' || typeof input.signature !== 'string') {
        return false;
    }
    if (Object.keys(outputMap).length < 1) {
        return false;
    }
    for (const output of Object.values(outputMap)) {
        if (typeof output !== 'number') {
            return false;
        }
    }
    return true;
}
exports.isValidTransactionStructure = isValidTransactionStructure;
function findUnspentTxOut(transactionId, outputIndex, unspentTxOuts) {
    return unspentTxOuts.find((utxo) => utxo.transactionId === transactionId && utxo.index === outputIndex);
}
exports.findUnspentTxOut = findUnspentTxOut;
class Transaction {
    constructor({ senderWallet, recipient, amount }) {
        this.id = (0, utils_1.CryptoHash)(Date.now().toString());
        this.outputMap = this.createOutputMap(senderWallet, recipient, amount);
        this.input = this.createInput(senderWallet, this.outputMap);
    }
    createOutputMap(senderWallet, recipient, amount) {
        const outputMap = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey()] = senderWallet.balance - amount;
        return outputMap;
    }
    createInput(senderWallet, outputMap) {
        const signature = senderWallet.sign(JSON.stringify(outputMap));
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey(),
            signature: signature.toDER('hex'),
        };
    }
    verifyTransaction() {
        const { address, amount, signature } = this.input;
        const { outputMap } = this;
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
    update({ recipient, amount }) {
        const transaction = this;
        if (amount > transaction.outputMap[transaction.input.address]) {
            throw new Error('Amount exceeds balance');
        }
        if (!transaction.outputMap[recipient]) {
            transaction.outputMap[recipient] = amount;
        }
        else {
            transaction.outputMap[recipient] += amount;
        }
        transaction.outputMap[transaction.input.address] -= amount;
        transaction.input.amount = transaction.outputMap[transaction.input.address];
    }
}
exports.Transaction = Transaction;
class SaveTransaction {
    constructor({ transaction }) {
        this.transaction = transaction;
    }
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
