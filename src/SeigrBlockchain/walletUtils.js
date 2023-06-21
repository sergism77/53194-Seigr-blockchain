const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { verifySignature } = require('./utils');

const walletDirectory = path.join(os.homedir(), 'SeigrBlockchain', 'wallets');

class WalletUtils {
  static createWallet() {
    const wallet = new Wallet();
    fs.writeFileSync(
      path.join(walletDirectory, `${wallet.address}.json`),
      JSON.stringify(wallet)
    );
    return wallet;
  }

  static loadWallet(address) {
    const walletPath = path.join(walletDirectory, `${address}.json`);
    if (!fs.existsSync(walletPath)) {
      throw new Error('Wallet does not exist');
    }
    const walletData = fs.readFileSync(walletPath, 'utf8');
    const wallet = Wallet.fromJSON(walletData);
    return wallet;
  }
}

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;
    this.keyPair = ec.genKeyPair();
    this.address = this.keyPair.getPublic().encode('hex');
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
        address: this.address,
      });
    }
    if (amount > this.balance) {
      throw new Error('Amount exceeds balance');
    }

    return new Transaction({ senderWallet: this, recipient, amount });
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
    return hasConductedTransaction ? outputsTotal : STARTING_BALANCE + outputsTotal;
  }

  static blockchainWallet() {
    const blockchainWallet = new this();
    blockchainWallet.address = 'blockchain-wallet';
    return blockchainWallet;
  }

  static fromJSON(walletData) {
    const { balance, keyPair, address } = JSON.parse(walletData);
    const wallet = new Wallet();
    wallet.balance = balance;
    wallet.keyPair = ec.keyFromPrivate(keyPair.privateKey, 'hex');
    wallet.address = address;
    return wallet;
  }

  toJSON() {
    return JSON.stringify({
      balance: this.balance,
      keyPair: {
        privateKey: this.keyPair.getPrivate('hex'),
      },
      address: this.address,
    });
  }
}

module.exports = WalletUtils;
