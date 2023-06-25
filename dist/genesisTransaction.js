"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineGenesisTransaction = exports.GenesisTransaction = void 0;
const createTransaction_1 = require("./createTransaction");
const utils_1 = require("./utils");
const config_1 = require("./config");
const genesisTransaction_1 = __importDefault(require("./genesisTransaction"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const elliptic_1 = require("elliptic");
const ec = new elliptic_1.ec('secp256k1');
class GenesisTransaction {
    constructor({ timestamp, input, output, hash, signature, publicKey, amount, address, }) {
        this.timestamp = timestamp;
        this.input = input;
        this.output = output;
        this.hash = hash;
        this.signature = signature;
        this.publicKey = publicKey;
        this.amount = amount;
        this.address = address;
    }
    static genesis() {
        return new this(genesisTransaction_1.default);
    }
    static mineGenesisTransaction() {
        const timestamp = Date.now();
        const input = null;
        const output = null;
        const hash = null;
        const signature = null;
        const publicKey = null;
        const amount = null;
        const address = null;
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address,
        });
    }
    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address, }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address,
        });
    }
    static saveTransaction({ transaction }) {
        const transactionPath = path_1.default.join(os_1.default.homedir(), 'SeigrBlockchain', 'transaction.json');
        fs_1.default.writeFileSync(transactionPath, JSON.stringify(transaction));
    }
    static loadTransaction() {
        const transactionPath = path_1.default.join(os_1.default.homedir(), 'SeigrBlockchain', 'transaction.json');
        const transactionJSON = fs_1.default.readFileSync(transactionPath);
        const transaction = JSON.parse(transactionJSON);
        return transaction;
    }
    static rewardTransaction({ minerWallet }) {
        const timestamp = Date.now();
        const input = config_1.REWARD_INPUT;
        const output = { address: minerWallet.publicKey, amount: config_1.MINING_REWARD };
        const hash = (0, utils_1.cryptoHash)(timestamp, input, output);
        const signature = 'reward';
        const publicKey = 'reward';
        const amount = config_1.MINING_REWARD;
        const address = minerWallet.publicKey;
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address,
        });
    }
    static verifyTransaction(transaction) {
        const { input: { address, signature, publicKey }, output: { address: outputAddress, amount }, hash, } = transaction;
        const outputHash = (0, utils_1.cryptoHash)(Date.now(), address, {
            address: outputAddress,
            amount,
        });
        const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
        return keyFromPublic.verify(outputHash, signature);
    }
    static updateTransaction({ transaction, senderWallet, recipient, amount, }) {
        const senderOutput = transaction.output.find((output) => output.address === senderWallet.publicKey);
        if (amount > senderOutput.amount) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }
        senderOutput.amount = senderOutput.amount - amount;
        transaction.output.push({ address: recipient, amount });
        transaction.input = createTransaction_1.createTransaction.createInput({
            senderWallet,
            outputMap: transaction.output,
        });
        transaction.hash = (0, utils_1.cryptoHash)(Date.now(), transaction.input, transaction.output);
        return transaction;
    }
    static createTransaction({ senderWallet, recipient, amount }) {
        if (amount > senderWallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }
        return createTransaction_1.createTransaction.createTransaction({
            senderWallet,
            recipient,
            amount,
        });
    }
}
exports.GenesisTransaction = GenesisTransaction;
class MineGenesisTransaction extends createTransaction_1.createTransaction {
    constructor({ timestamp, input, output, hash, signature, publicKey, amount, address, }) {
        super({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address,
        });
    }
}
exports.MineGenesisTransaction = MineGenesisTransaction;
