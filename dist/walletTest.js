'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = __importDefault(require("./wallet"));
const transaction_1 = __importDefault(require("./transaction"));
const blockchain_1 = __importDefault(require("./blockchain"));
const util_1 = require("../SeigrBlockchain/util");
class WalletTest {
    constructor() {
        this.wallet = new wallet_1.default();
        this.blockchain = new blockchain_1.default();
    }
    testWallet() {
        console.log('wallet: ', this.wallet);
        console.log('public key: ', this.wallet.publicKey);
        console.log('private key: ', this.wallet.privateKey);
        console.log('starting balance: ', this.wallet.balance);
        console.log('wallet toString: ', this.wallet.toString());
    }
    testSignData() {
        const data = 'test-data';
        const signature = this.wallet.sign(data);
        console.log('signature: ', signature);
        console.log('verify signature: ', (0, util_1.verifySignature)(this.wallet.publicKey, data, signature));
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
}
const walletTest = new WalletTest();
walletTest.testWallet();
walletTest.testSignData();
walletTest.testCreateTransaction();
walletTest.testCreateTransactionWithAmountExceedingBalance();
exports.default = WalletTest;
