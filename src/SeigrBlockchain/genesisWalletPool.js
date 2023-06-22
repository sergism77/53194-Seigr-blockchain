'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');
const { ec } = require('./utils');

const config = {
  walletDirectory: path.join(os.homedir(), 'Seigr', 'wallets'),
  blockDirectory: path.join(os.homedir(), 'Seigr', 'blocks'),
  transactionDirectory: path.join(os.homedir(), 'Seigr', 'transactions'),
  blockchainDirectory: path.join(os.homedir(), 'Seigr', 'blockchain'),
  walletPoolDirectory: path.join(os.homedir(), 'Seigr', 'walletPools'),
  blockPoolDirectory: path.join(os.homedir(), 'Seigr', 'blockPools'),
  transactionPoolDirectory: path.join(os.homedir(), 'Seigr', 'transactionPools'),
  genesisWalletDirectory: path.join(os.homedir(), 'Seigr', 'genesisWallet'),
  p2pDirectory: path.join(os.homedir(), 'Seigr', 'p2p'),
  minerDirectory: path.join(os.homedir(), 'Seigr', 'miner'),
  genesisBlockDirectory: path.join(os.homedir(), 'Seigr', 'genesisBlock'),
};

class GenesisWalletPool {
  constructor(address) {
    this.address = address;
    this.balance = 0;
    this.publicKey = ec.keyFromPublic(this.address, 'hex').getPublic().encode('hex');
  }

  save() {
    fs.writeFileSync(
      path.join(config.walletDirectory, `${this.address}.json`),
      JSON.stringify(this)
    );
  }

  static load(address) {
    const filePath = path.join(config.walletDirectory, `${address}.json`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Wallet file does not exist for address: ${address}`);
    }

    const walletData = JSON.parse(fs.readFileSync(filePath));
    const wallet = new GenesisWalletPool(walletData.address);
    wallet.balance = walletData.balance;
    wallet.publicKey = walletData.publicKey;

    return wallet;
  }
}

module.exports = GenesisWalletPool;
