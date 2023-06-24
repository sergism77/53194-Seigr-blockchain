'use strict';

import Transaction from './transaction';
import Wallet from './wallet';
import { verifySignature } from '../util';
import Blockchain from './blockchain';
import { STARTING_BALANCE } from './config';

class TransactionTest {
    wallet: Wallet;
    blockchain: Blockchain;
    walletPool: any;

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
        const recipient: string = 'test-recipient';
        const amount: number = 50;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance() {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
}

export default TransactionTest;