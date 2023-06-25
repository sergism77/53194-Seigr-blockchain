'use strict';

import Wallet from './wallet';
import { newWallet } from './newWallet';
import { saveWallet } from './saveWallet';
import Transaction from './transaction';
import Blockchain from './blockchain';
import { verifySignature } from './utils';
import { STARTING_BALANCE } from './config';

class WalletTest {
    wallet: Wallet;
    blockchain: Blockchain;

    constructor() {
        this.wallet = new Wallet();
        this.blockchain = new Blockchain();
    }

    testWallet(): void {
        console.log('wallet: ', this.wallet);
        console.log('public key: ', this.wallet.publicKey);
        console.log('private key: ', this.wallet.privateKey);
        console.log('starting balance: ', this.wallet.balance);
        console.log('wallet toString: ', this.wallet.toString());
    }

    testSignData(): void {
        const data: string = 'test-data';
        const signature: string = this.wallet.sign(data);
        console.log('signature: ', signature);
        console.log('verify signature: ', verifySignature(this.wallet.publicKey, data, signature));
    }

    testCreateTransaction(): void {
        const recipient: string = 'test-recipient';
        const amount: number = 50;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }

    testCreateTransactionWithAmountExceedingBalance(): void {
        const recipient: string = 'test-recipient';
        const amount: number = 5000;
        const transaction: Transaction = Transaction.createTransaction(this.wallet, recipient, amount);
        console.log('transaction: ', transaction);
    }
}

const walletTest: WalletTest = new WalletTest();
walletTest.testWallet();
walletTest.testSignData();
walletTest.testCreateTransaction();
walletTest.testCreateTransactionWithAmountExceedingBalance();

export default WalletTest;