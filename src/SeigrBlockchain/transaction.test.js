//this is the transaction.test.js file

const Transaction = require('./transaction');
const Wallet = require('./wallet');
const { verifySignature } = require('../util');
const Blockchain = require('../blockchain');
const { STARTING_BALANCE } = require('../config');

class TransactionTest {
    constructor() {
        this.wallet = new Wallet();
        this.blockchain = new Blockchain();
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

module.exports = TransactionTest;