class CPUWallet extends Wallet {
  constructor() {
    super();
    this.address = "CPU";
  }

  createTransaction(to, amount) {
    return new Transaction(this.address, to, amount);
  }
}

class CPUWalletMap extends WalletMap {
  constructor() {
    super();
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