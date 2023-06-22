'use strict';

const Wallet = require('./wallet');
const Transaction = require('./transaction');

class CPUWallet{ 
  constructor() {
    this.address = "CPU";

    this.balance = 0

    this._transactions = [];

    this._transactions.push(
      new Transaction(
        "genesis",
        this.address,
        0
      )
    );

  }

  createTransaction(to, amount) {
    return new Transaction(this.address, to, amount);
  }

  get transactions() {
    return this._transactions;
  }

  addTransaction(transaction) {
    this._transactions.push(transaction);
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  get publicKey() {
    return this._publicKey;
  }

  set publicKey(value) {
    this._publicKey = value;
  }

  get privateKey() {
    return this._privateKey;
  }

  set privateKey(value) {
    this._privateKey = value;
  }

  get keyPair() {
    return this._keyPair;
  }

  set keyPair(value) {
    this._keyPair = value;
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

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
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