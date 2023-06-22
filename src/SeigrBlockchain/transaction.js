'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const crypto = require('crypto');

const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');

class Wallet {
  /**
   * Represents a wallet that holds a key pair for signing transactions.
   * @constructor
   */
  constructor() {
    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
    this.balance = STARTING_BALANCE;
  }

  /**
   * Signs the given data using the wallet's private key.
   * @param {string} data - The data to sign.
   * @returns {string} - The signature.
   */
  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }
}

class Transaction {
  /**
   * Represents a transaction in the blockchain.
   * @constructor
   * @param {Object} options - The options for creating a transaction.
   * @param {Wallet} options.senderWallet - The sender's wallet.
   * @param {string} options.recipient - The recipient's public key.
   * @param {number} options.amount - The transaction amount.
   */
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
  /**
   * Saves the transaction to a file.
   * @constructor
   * @param {Object} options - The options for saving the transaction.
   * @param {Transaction} options.transaction - The transaction to be saved.
   */
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

  if (!fs.existsSync(transactionFile)) {
    throw new Error('Transaction file not found');
  }

  const transactionData = fs.readFileSync(transactionFile, 'utf8');

  try {
    return JSON.parse(transactionData);
  } catch (error) {
    throw new Error('Invalid transaction file');
  }
};

const encryptPrivateKey = (privateKey, passphrase) => {
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(passphrase, 'salt', 24);
  const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
  let encryptedPrivateKey = cipher.update(privateKey, 'utf8', 'hex');
  encryptedPrivateKey += cipher.final('hex');

  return {
    encryptedPrivateKey,
    iv: iv.toString('hex'),
  };
};

module.exports = {
  Transaction,
  CreateTransaction,
  SaveTransaction,
  LoadTransaction,
  Wallet,
  encryptPrivateKey,
};
