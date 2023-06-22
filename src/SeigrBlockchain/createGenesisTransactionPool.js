'use strict';

class MineGenesisTransaction {
  constructor({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address
  }) {
    this.timestamp = timestamp;
    this.input = input;
    this.output = output;
    this.hash = hash;
    this.signature = signature;
    this.publicKey = publicKey;
    this.amount = amount;
    this.address = address;
  }

  static genesis() {
    return new this(GENESIS_TRANSACTION_DATA);
  }

  static mineGenesisTransaction() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static createTransaction({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address
  }) {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTransactionOutput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

// Class representing the GenesisTransactionPool
class GenesisTransactionPool {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  removeTransaction(transaction) {
    const index = this.transactions.indexOf(transaction);
    if (index > -1) {
      this.transactions.splice(index, 1);
    }
  }
}

module.exports = GenesisTransactionPool;
