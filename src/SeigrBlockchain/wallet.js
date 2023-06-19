const { STARTING_BALANCE } = require('./config');
const { cryptoHash, verifySignature } = require('./utils');
const Transaction = require('./transaction');
const ec = require('elliptic').ec('secp256k1');
const { createGenesisWallet, createWallet, saveWallet } = require('./walletUtils');

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;
    this.keyPair = ec.genKeyPair();
    this.address = this.keyPair.getPublic().encode('hex');
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

  createTransaction({ recipient, amount, chain }) {
    if (chain) {
      this.balance = Wallet.calculateBalance({
        chain,
        address: this.publicKey(),
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
