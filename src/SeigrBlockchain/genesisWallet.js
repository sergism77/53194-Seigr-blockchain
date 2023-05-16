
const { REWARD_INPUT, MINING_REWARD } = require('./config');
const { Transaction } = require('./transaction');
const CreateTransaction = require('./createTransaction');

const CreateWallet = require('./createWallet');
const { cryptoHash } = require('./utils');
const GENESIS_DATA = require('./genesis');
const GENESIS_TRANSACTION_DATA = require('./genesisTransaction');

class genesisWallet {
    constructor({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        this.timestamp = timestamp;
        this.input = input;
        this.output = output;
        this.hash = hash;
        this.signature = signature;
        this.publicKey = publicKey;
        this.amount = amount;
        this.address = address;
    }

    static genesis() {
        return new this(GENESIS_TRANSACTION_DATA);
    }

    static mineGenesisWallet({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address
        });
    }
    //we want to show the address and the privatekey of the genesis wallet
    static showGenesisWallet() {
        const wallet = CreateWallet.createWallet();
        const address = wallet.address;
        const privateKey = wallet.privateKey;
        return { address, privateKey };
    }

    static mineGenesisWalletTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address
        });
    }

    static mineGenesisWalletTransactionPool({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address
        });
    }

    static mineGenesisWalletTransactionPoolMap({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address
        });
    }

    static mineGenesisWalletTransactionPoolMapArray({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address
        });
    }

    static mineGenesisWalletTransactionPoolMapArrayMap({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address
        });
    }

}

module.exports = genesisWallet;