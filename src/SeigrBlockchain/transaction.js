const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');

const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');

class Wallet {
  constructor() {
    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
    this.balance = STARTING_BALANCE;
  }

  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }
}

class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.id = cryptoHash(Date.now().toString());
    this.outputMap = this.createOutputMap({
      senderWallet,
      recipient,
      amount,
    });
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
      signature: senderWallet.sign(outputMap),
    };
  }

  static validateTransaction(transaction) {
    const {
      input: { address, amount, signature },
      outputMap,
    } = transaction;

    if (amount !== outputMap[address]) {
      console.error(`Invalid transaction from ${address}`);
      return false;
    }

    if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }

    return true;
  }

  signTransaction() {
    const key = ec.keyFromPrivate(this.senderWallet.keyPair.getPrivate());
    const sign = key.sign(this.calculateHash());
    this.input.signature = sign.toDER('hex');
  }
}

class SaveTransaction {
  constructor({ transaction }) {
    this.transaction = transaction;
  }

  saveTransaction() {
    const transactionFile = path.join(transactionDirectory, `${this.transaction.id}.json`);
    fs.writeFileSync(transactionFile, JSON.stringify(this.transaction));
  }
}

const CreateTransaction = ({ senderWallet, recipient, amount }) => {
  if (amount > senderWallet.balance) {
    throw new Error('Amount exceeds balance');
  }

  return new Transaction({
    senderWallet,
    recipient,
    amount,
  });
};

const LoadTransaction = ({ transactionId }) => {
  const transactionFile = path.join(transactionDirectory, `${transactionId}.json`);
  const transaction = JSON.parse(fs.readFileSync(transactionFile));

  return transaction;
};

module.exports = {
  Transaction,
  CreateTransaction,
  SaveTransaction,
  LoadTransaction,
  Wallet,
};
