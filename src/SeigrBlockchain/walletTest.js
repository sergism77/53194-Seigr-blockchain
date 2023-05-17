
const Wallet = require('./wallet');
const { newWallet } = require('./newWallet');
const { saveWallet } = require('./saveWallet');
const Transaction = require('./transaction');
const Blockchain = require('../SeigrBlockchain/blockchain');
const { verifySignature } = require('../SeigrBlockchain/util');
const { STARTING_BALANCE } = require('../SeigrBlockchain/config');

class WalletTest {
    constructor() {
        this.wallet = new Wallet();
        this.blockchain = new Blockchain();
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
        console.log('verify signature: ', verifySignature(this.wallet.publicKey, data, signature));
    }

    testCreateTransaction() {
        const recipient = 'test-recipient';
        const amount = 50;
        const transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
}

const walletTest = new WalletTest();
walletTest.testWallet();
walletTest.testSignData();
walletTest.testCreateTransaction();
walletTest.testCreateTransactionWithAmountExceedingBalance();

module.exports = WalletTest;

