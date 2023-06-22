'use strict';

const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const { v4: uuidv4 } = require('uuid');
const TransactionInput = require('./transactionInput.js');
const TransactionOutput = require('./transactionOutput.js');
const SeigrBlockchainTransaction = require('./transaction.js');
const BlockBodyTransaction = require('./blockBodyTransaction.js');

class BlockchainBody {
  constructor() {
    this.SHA256 = SHA256;
    this.ec = new EC('secp256k1');
    this.uuidv4 = uuidv4;
    this.TransactionInput = TransactionInput;
    this.TransactionOutput = TransactionOutput;
    this.SeigrBlockchainTransaction = SeigrBlockchainTransaction;
    this.BlockBodyTransaction = BlockBodyTransaction;
  }

  toString() {
    return (
      'Blockchain Body: \n' +
      'SHA256: ' +
      this.SHA256 +
      '\n' +
      'EC: ' +
      this.ec +
      '\n' +
      'UUIDv4: ' +
      this.uuidv4 +
      '\n' +
      'Transaction Input: ' +
      this.TransactionInput +
      '\n' +
      'Transaction Output: ' +
      this.TransactionOutput +
      '\n' +
      'Seigr Blockchain Transaction: ' +
      this.SeigrBlockchainTransaction +
      '\n' +
      'Block Body Transaction: ' +
      this.BlockBodyTransaction +
      '\n'
    );
  }
}

module.exports = BlockchainBody;
