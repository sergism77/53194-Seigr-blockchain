'use strict';

const Transaction = require('./transaction');

class CPUWallet {
  constructor() {
    this._address = "CPU";
    this._balance = 0;
    this._transactions = [];

    this._transactions.push(
      new Transaction(
        "genesis",
        this._address,
        0
      )
    );
  }

  createTransaction(to, amount) {
    return new Transaction(this._address, to, amount);
  }

  get transactions() {
    return this._transactions;
  }

  addTransaction(transaction) {
    this._transactions.push(transaction);
  }

  get address() {
    return this._address;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }
}

class CPUWalletMap {
  constructor() {
    this._wallets = {};
  }

  get wallets() {
    return this._wallets;
  }

  getWallet(address) {
    return this._wallets[address];
  }

  createWallet() {
    const wallet = new CPUWallet();
    this._wallets[wallet.address] = wallet;
    return wallet;
  }
}

class CPUWalletMapSingleton {
  constructor() {
    if (!CPUWalletMapSingleton.instance) {
      CPUWalletMapSingleton.instance = new CPUWalletMap();
    }
  }

  getInstance() {
    return CPUWalletMapSingleton.instance;
  }
}

module.exports = { CPUWallet, CPUWalletMap, CPUWalletMapSingleton };
