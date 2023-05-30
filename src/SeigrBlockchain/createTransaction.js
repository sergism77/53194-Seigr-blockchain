const transaction = require('./transaction');
const { STARTING_BALANCE } = require('./config');
const { cryptoHash } = require('./utils');
const ec = require('elliptic').ec;
const ecInstance = new ec('secp256k1');
const wallet = require('./wallet');
const createWallet = require('./walletUtils');

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
        }
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