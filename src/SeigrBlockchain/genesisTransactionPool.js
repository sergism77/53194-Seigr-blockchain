const { REWARD_INPUT, MINING_REWARD } = require('./config');
const { Transaction } = require('./transaction');
const createTransaction = require('./createTransaction');
const createWallet = require('./walletUtils');
const { cryptoHash } = require('./utils');
const GENESIS_DATA = require('./genesis');
const GENESIS_TRANSACTION_DATA = require('./genesisTransaction');
const timestamp = undefined || {};
const input = undefined || {};
const output = undefined || {};
const hash = undefined || {};
const signature = undefined || {};
const publicKey = undefined || {};
const amount = undefined || {};
const address = undefined || {};




class mineGenesisTransactionPool {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardTimestamp {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

    static mineGenesisTransactionPoolRewardTimestamp() {
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

    static mineGenesisTransactionPoolRewardTimestampInput() {
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

    static mineGenesisTransactionPoolRewardTimestampInputOutput() {
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

    static mineGenesisTransactionPoolRewardTimestampInputOutputHash() {
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

    static mineGenesisTransactionPoolRewardTimestampInputOutputHashSignature() {
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


class mineGenesisTransaction {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolReward {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardInput {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardOutput {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardHash {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardSignature {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardPublicKey {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardAmount {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

class mineGenesisTransactionPoolRewardAddress {
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

    static mineGenesisTransaction() {
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

    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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

module.exports = { mineGenesisTransactionPool, mineGenesisTransactionPoolRewardTimestamp, mineGenesisTransactionPoolRewardInput, mineGenesisTransactionPoolRewardOutput, mineGenesisTransactionPoolRewardHash, mineGenesisTransactionPoolRewardSignature, mineGenesisTransactionPoolRewardPublicKey, mineGenesisTransactionPoolRewardAmount, mineGenesisTransactionPoolRewardAddress };