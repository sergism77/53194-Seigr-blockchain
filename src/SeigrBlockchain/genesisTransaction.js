const { REWARD_INPUT, MINING_REWARD } = require('./config');
const { Transaction } = require('./transaction');
const CreateTransaction = require('./createTransaction');
const CreateWallet = require('./createWallet');
const { cryptoHash } = require('./utils');
const GENESIS_DATA = require('./genesis');
const GENESIS_TRANSACTION_DATA = require('./genesisTransaction');

class genesisTransaction {
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

    static mineGenesisTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

module.exports = genesisTransaction;