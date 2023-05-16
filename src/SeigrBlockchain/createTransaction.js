const transaction = require('./transaction');
const { STARTING_BALANCE } = require('./config');
const { cryptoHash } = require('./utils');
const ec = require('elliptic').ec;
const ecInstance = new ec('secp256k1');

class createTransaction {
    constructor({ senderWallet, recipient, amount }) {
        this.transaction = transaction;
        this.senderWallet = senderWallet;
        this.recipient = recipient;
        this.amount = amount;
        this.outputMap = this.createOutputMap();
        this.input = this.createInput();
    }

    createOutputMap() {
        const outputMap = {};
        outputMap[this.recipient] = this.amount;
        outputMap[this.senderWallet.publicKey] = this.senderWallet.balance - this.amount;
        return outputMap;
    }

    createInput() {
        const input = {
            timestamp: Date.now(),
            amount: this.senderWallet.balance,
            address: this.senderWallet.publicKey,
            signature: this.senderWallet.sign(this.outputMap)
        };
        return input;
    }

    static validTransaction(transaction) {
        const { input: { address, amount, signature }, outputMap } = transaction;
        const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);
        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!ecInstance.keyFromPublic(address, 'hex').verify(cryptoHash(outputMap), signature)) {
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
        } else {
            this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }
        this.outputMap[senderWallet.publicKey] = this.outputMap[senderWallet.publicKey] - amount;
        this.input = this.createInput();
    }
}

module.exports = createTransaction;