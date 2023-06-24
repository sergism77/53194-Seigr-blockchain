'use strict';

interface TransactionData {
  timestamp: number;
  input: string;
  output: string;
  hash: string;
  signature: string;
  publicKey: string;
  amount: number;
  address: string;
}

const GENESIS_TRANSACTION_DATA: TransactionData = {
  timestamp: 0,
  input: '',
  output: '',
  hash: '',
  signature: '',
  publicKey: '',
  amount: 0,
  address: ''
};

class MineGenesisTransaction {
  timestamp: number;
  input: string;
  output: string;
  hash: string;
  signature: string;
  publicKey: string;
  amount: number;
  address: string;

  constructor({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address
  }: TransactionData) {
    this.timestamp = timestamp;
    this.input = input;
    this.output = output;
    this.hash = hash;
    this.signature = signature;
    this.publicKey = publicKey;
    this.amount = amount;
    this.address = address;
  }

  static genesis(): MineGenesisTransaction {
    return new this(GENESIS_TRANSACTION_DATA);
  }

  static mineGenesisTransaction({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address
  }: TransactionData): MineGenesisTransaction {
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
  }: TransactionData): MineGenesisTransaction {
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

  static mineGenesisTransactionPoolRewardTransactionOutput({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address
  }: TransactionData): MineGenesisTransaction {
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
  transactions: MineGenesisTransaction[];

  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction: MineGenesisTransaction): void {
    this.transactions.push(transaction);
  }

  removeTransaction(transaction: MineGenesisTransaction): void {
    const index = this.transactions.indexOf(transaction);
    if (index > -1) {
      this.transactions.splice(index, 1);
    }
  }
}

export = GenesisTransactionPool;