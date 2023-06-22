'use strict';

const transaction = require('./transaction');
const Wallet = require('./wallet');
const { verifySignature } = require('../util');
const Blockchain = require('./blockchain');
const { STARTING_BALANCE } = require('./config');

class TransactionTest {
    constructor() {
        this.wallet = new Wallet();
        this.blockchain = new Blockchain();

        this.walletPool = this.blockchain.walletPool;

        this.walletPool.setSenderWallet(this.wallet);

        this.blockchain.walletPool = this.walletPool;

        this.blockchain.walletPool.setSenderWallet(this.wallet);

        this.blockchain.walletPool.blockchain = this.blockchain;

    

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
        const transaction = transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient = 'test-recipient';
        const amount = 5000;
        const transaction = transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
}

module.exports = TransactionTest;