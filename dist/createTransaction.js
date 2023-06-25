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
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const ec = __importStar(require("elliptic"));
const ecInstance = new ec.ec('secp256k1');
class createTransaction {
    constructor({ senderWallet, recipient, amount, signature, hash, publicKey, address, timestamp, output }) {
        this.senderWallet = senderWallet;
        this.recipient = recipient;
        this.amount = amount;
        this.signature = signature;
        this.hash = hash;
        this.publicKey = publicKey;
        this.address = address;
        this.amount = amount;
        this.timestamp = timestamp;
        this.output = output;
        this.outputMap = this.createOutputMap({ senderWallet, recipient, amount });
        this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
    }
    createOutputMap({ senderWallet, recipient, amount }) {
        const outputMap = {};
        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance - amount;
        return outputMap;
    }
    createInput({ senderWallet, outputMap }) {
        return {
            timestamp: Date.now(),
            amount: senderWallet.balance,
            address: senderWallet.publicKey,
            signature: senderWallet.sign(outputMap)
        };
    }
    static validTransaction(transaction) {
        const { input: { address, amount, signature }, outputMap } = transaction;
        const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);
        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!ecInstance.keyFromPublic(address, 'hex').verify((0, utils_1.cryptoHash)(outputMap), signature)) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }
        return true;
    }
    update({ senderWallet, recipient, amount }) {
        if (amount > this.outputMap[senderWallet.publicKey]) {
            throw new Error('Amount exceeds balance');
        }
        if (!this.outputMap[recipient]) {
            this.outputMap[recipient] = amount;
        }
        else {
            this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }
        this.outputMap[senderWallet.publicKey] = this.outputMap[senderWallet.publicKey] - amount;
        this.input = this.createInput();
    }
}
exports.default = createTransaction;
