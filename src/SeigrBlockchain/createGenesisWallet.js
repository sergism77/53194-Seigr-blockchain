const Wallet = require('./wallet');

function createGenesisWallet() {
    const wallet = new Wallet();
    wallet.address = "Seigr";
    wallet.publicKey = "Seigr";
    wallet.privateKey = "Seigr";
    wallet.balance = 0;
    wallet.transactions = [];
    return wallet;
}

module.exports = createGenesisWallet;