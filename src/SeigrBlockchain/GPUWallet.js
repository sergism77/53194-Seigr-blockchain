const { Wallet } = require('ethers');
const { Transaction } = require('./transaction');

class GPUWallet {
  constructor() {
    this.wallet = new Wallet();
    this.wallet.generateKeyPair();
    this.wallet.generateAddress();
  }

  getPublicKey() {
    return this.wallet.publicKey;
  }

  getPrivateKey() {
    return this.wallet.privateKey;
  }

  getAddress() {
    return this.wallet.address;
  }
}

class GPUWalletMap {
    constructor() {
        this.wallets = {};
    }
    
    getWallets() {
        return this.wallets;
    }
    
    getWallet(address) {
        return this.wallets[address];
    }
    
    createWallet() {
        const wallet = new GPUWallet();
        this.wallets[wallet.getAddress()] = wallet;
        return wallet;
    }
    }

class GPUWalletMapSingleton {
    constructor() {
        if (!GPUWalletMapSingleton.instance) {
        GPUWalletMapSingleton.instance = new GPUWalletMap();
        }
    }
    
    getInstance() {
        return GPUWalletMapSingleton.instance;
    }
}

module.exports = { GPUWallet, GPUWalletMap, GPUWalletMapSingleton };