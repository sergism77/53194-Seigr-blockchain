'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = __importDefault(require("./transaction"));
const wallet_1 = __importDefault(require("./wallet"));
const blockchain_1 = __importDefault(require("./blockchain"));
class TransactionTest {
    constructor() {
        this.wallet = new wallet_1.default();
        this.blockchain = new blockchain_1.default();
        this.walletPool = this.blockchain.walletPool;
        this.walletPool.setSenderWallet(this.wallet);
        this.blockchain.walletPool = this.walletPool;
        this.blockchain.walletPool.setSenderWallet(this.wallet);
        this.blockchain.walletPool.blockchain = this.blockchain;
    }
    testCreateTransaction() {
        const recipient = 'test-recipient';
        const amount = 50;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction_1.default.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
}
exports.default = TransactionTest;
