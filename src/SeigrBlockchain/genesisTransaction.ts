import { Transaction } from './transaction';
import { createTransaction } from './createTransaction';
import { createWallet } from './walletUtils';
import { cryptoHash } from './utils';
import { REWARD_INPUT, MINING_REWARD } from './config';
import GENESIS_DATA from './genesis';
import GENESIS_TRANSACTION_DATA from './genesisTransaction';
import createGenesisTransactionPool from './genesisTransactionPool';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

class GenesisTransaction {
  timestamp: number;
  input: any;
  output: any;
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
    address,
  }: any) {
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
    const timestamp = Date.now();
    const input = null;
    const output = null;
    const hash = null;
    const signature = null;
    const publicKey = null;
    const amount = null;
    const address = null;
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address,
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
    address,
  }: any) {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address,
    });
  }

  static saveTransaction({ transaction }: any) {
    const transactionPath = path.join(
      os.homedir(),
      'SeigrBlockchain',
      'transaction.json'
    );
    fs.writeFileSync(transactionPath, JSON.stringify(transaction));
  }

  static loadTransaction() {
    const transactionPath = path.join(
      os.homedir(),
      'SeigrBlockchain',
      'transaction.json'
    );
    const transactionJSON = fs.readFileSync(transactionPath);
    const transaction = JSON.parse(transactionJSON);
    return transaction;
  }

  static rewardTransaction({ minerWallet }: any) {
    const timestamp = Date.now();
    const input = REWARD_INPUT;
    const output = { address: minerWallet.publicKey, amount: MINING_REWARD };
    const hash = cryptoHash(timestamp, input, output);
    const signature = 'reward';
    const publicKey = 'reward';
    const amount = MINING_REWARD;
    const address = minerWallet.publicKey;

    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address,
    });
  }

  static verifyTransaction(transaction: any) {
    const {
      input: { address, signature, publicKey },
      output: { address: outputAddress, amount },
      hash,
    } = transaction;
    const outputHash = cryptoHash(Date.now(), address, {
      address: outputAddress,
      amount,
    });
    const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
    return keyFromPublic.verify(outputHash, signature);
  }

  static updateTransaction({
    transaction,
    senderWallet,
    recipient,
    amount,
  }: any) {
    const senderOutput = transaction.output.find(
      (output: any) => output.address === senderWallet.publicKey
    );
    if (amount > senderOutput.amount) {
      console.log(`Amount: ${amount} exceeds balance.`);
      return;
    }
    senderOutput.amount = senderOutput.amount - amount;
    transaction.output.push({ address: recipient, amount });
    transaction.input = createTransaction.createInput({
      senderWallet,
      outputMap: transaction.output,
    });
    transaction.hash = cryptoHash(
      Date.now(),
      transaction.input,
      transaction.output
    );
    return transaction;
  }

  static createTransaction({ senderWallet, recipient, amount }: any) {
    if (amount > senderWallet.balance) {
      console.log(`Amount: ${amount} exceeds balance.`);
      return;
    }
    return createTransaction.createTransaction({
      senderWallet,
      recipient,
      amount,
    });
  }

  // Rest of the code...

}

class MineGenesisTransaction extends createTransaction {
  constructor({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address,
  }: any) {
    super({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address,
    });
  }

  // Rest of the code...


}

export { GenesisTransaction, MineGenesisTransaction };
