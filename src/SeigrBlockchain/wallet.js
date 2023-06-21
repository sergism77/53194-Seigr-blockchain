const { STARTING_BALANCE } = require('./config');
const { cryptoHash, verifySignature } = require('./utils');
const Transaction = require('./transaction');
const ec = require('elliptic').ec('secp256k1');
const { createGenesisWallet, createWallet, saveWallet } = require('./walletUtils');
const crypto = require('crypto');
const base58 = require('bs58');

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;
    this.keyPair = ec.genKeyPair();
    this.address = this.generateAddress(this.keyPair.getPublic().encode('hex'));
    this.createGenesisWallet = createGenesisWallet;
    this.createWallet = createWallet;
    this.saveWallet = saveWallet;
  }

  publicKey() {
    return this.keyPair.getPublic().encode('hex');
  }

  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }

  generateAddress(publicKey) {
    const publicKeyHash = crypto.createHash('sha256').update(publicKey).digest();
    const addressBytes = Buffer.concat([Buffer.from([0x53, 0x19, 0x4e]), publicKeyHash]);
    const checksum = crypto.createHash('sha256').update(addressBytes).digest();
    const addressWithChecksum = Buffer.concat([addressBytes, checksum.subarray(0, 4)]);
    const address = base58.encode(addressWithChecksum);
    return address;
  }

  createTransaction({ recipient, amount, chain }) {
    if (chain) {
      this.balance = Wallet.calculateBalance({
        chain,
        address: this.address,
      });
    }
    if (amount > this.balance) {
      throw new Error('Amount exceeds balance');
    }

    return new Transaction({ senderWallet: this, recipient, amount });
  }

  static verifyTransaction({ transaction }) {
    const {
      input: { address, signature },
      outputMap,
    } = transaction;
    const outputTotal = Object.values(outputMap).reduce(
      (total, outputAmount) => total + outputAmount
    );
    if (outputTotal !== transaction.input.amount) {
      console.error(`Invalid transaction from ${address}`);
      return false;
    }
    if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }
    return true;
  }

  static calculateBalance({ chain, address }) {
    let hasConductedTransaction = false;
    let outputsTotal = 0;
    for (let i = chain.length - 1; i > 0; i--) {
      const block = chain[i];
      for (let transaction of block.data) {
        if (transaction.input.address === address) {
          hasConductedTransaction = true;
        }
        const addressOutput = transaction.outputMap[address];
        if (addressOutput) {
          outputsTotal = outputsTotal + addressOutput;
        }
      }
      if (hasConductedTransaction) {
        break;
      }
    }
    return hasConductedTransaction
      ? outputsTotal
      : STARTING_BALANCE + outputsTotal;
  }

  static blockchainWallet() {
    const blockchainWallet = new this();
    blockchainWallet.address = 'blockchain-wallet';
    return blockchainWallet;
  }
}

module.exports = Wallet;
