'use strict';

import Transaction from './transaction';

class CPUWallet {
  private _address: string;
  private _balance: number;
  private _transactions: Transaction[];

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

  public createTransaction(to: string, amount: number): Transaction {
    return new Transaction(this._address, to, amount);
  }

  public get transactions(): Transaction[] {
    return this._transactions;
  }

  public addTransaction(transaction: Transaction): void {
    this._transactions.push(transaction);
  }

  public get address(): string {
    return this._address;
  }

  public get balance(): number {
    return this._balance;
  }

  public set balance(value: number) {
    this._balance = value;
  }
}

class CPUWalletMap {
  private _wallets: {[address: string]: CPUWallet};

  constructor() {
    this._wallets = {};
  }

  public get wallets(): {[address: string]: CPUWallet} {
    return this._wallets;
  }

  public getWallet(address: string): CPUWallet {
    return this._wallets[address];
  }

  public createWallet(): CPUWallet {
    const wallet = new CPUWallet();
    this._wallets[wallet.address] = wallet;
    return wallet;
  }
}

class CPUWalletMapSingleton {
  private static instance: CPUWalletMap;

  private constructor() {
    if (!CPUWalletMapSingleton.instance) {
      CPUWalletMapSingleton.instance = new CPUWalletMap();
    }
  }

  public static getInstance(): CPUWalletMap {
    return CPUWalletMapSingleton.instance;
  }
}

export { CPUWallet, CPUWalletMap, CPUWalletMapSingleton };