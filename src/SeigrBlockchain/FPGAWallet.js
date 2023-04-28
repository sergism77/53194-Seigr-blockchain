class FPGAWallet {
    constructor() {
        this._wallet = new Wallet();
        this._wallet.generateKeyPair();
    }

    get publicKey() {
        return this._wallet.publicKey;
    }

    get privateKey() {
        return this._wallet.privateKey;
    }
}

class FPGAWalletMap {
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
        const wallet = new FPGAWallet();
        this._wallets[wallet.publicKey] = wallet;
        return wallet;
    }
}

class FPGAWalletMapSingleton {
    constructor() {
        if (!FPGAWalletMapSingleton.instance) {
            FPGAWalletMapSingleton.instance = new FPGAWalletMap();
        }
    }

    getInstance() {
        return FPGAWalletMapSingleton.instance;
    }
}

module.exports = { FPGAWallet, FPGAWalletMap, FPGAWalletMapSingleton };