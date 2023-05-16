const { v4: uuidv4 } = require('uuid');
const { verifySignature } = require('./utils');
const { REWARD_INPUT, MINING_REWARD } = require('./config');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const cryptoHash = require('./utils');

class address {
    constructor() {
        this.id = id;
        this.input = input;
        this.outputs = outputs;
    }

    static verifyAddress(address) {
        return ec.verifySignature(
            address,
            signature,
            dataHash
        );
    }
        
    static createAddress() {
        return ec.genKeyPair();
    }

    static createHash(data) {
        return cryptoHash(
            timestamp,
            lastHash,
            data,
            nonce,
            difficulty
        );
    }

    
    static signAddress(dataHash, privateKey) {
        return ec.keyFromPrivate(privateKey).sign(dataHash);
    }

    static createTransaction({ senderWallet, recipient, amount }) {
        if (amount > senderWallet.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new this({
            id: uuidv4(),
            input: {
                timestamp: Date.now(),
                address: senderWallet.address,
                amount: senderWallet.balance,
                signature: senderWallet.signAddress(dataHash)
            },
            outputs: [
                { address: senderWallet.address, amount: senderWallet.balance - amount },
                { address: recipient, amount }
            ]
        });
    }

    static rewardTransaction({ minerWallet }) {
        return new this({
            id: REWARD_INPUT.id,
            input: REWARD_INPUT,
            outputs: [{ address: minerWallet.address, amount: MINING_REWARD }]
        });
    }

    update({ senderWallet, recipient, amount }) {
        const senderOutput = this.outputs.find(output => output.address === senderWallet.address);

        if (amount > senderOutput.amount) {
            throw new Error('Amount exceeds balance');
        }

        senderOutput.amount = senderOutput.amount - amount;

        this.outputs.push({ address: recipient, amount });

        this.input = {
            timestamp: Date.now(),
            address: senderWallet.address,
            amount: senderWallet.balance,
            signature: senderWallet.signAddress(dataHash)
        };
    }

    static transactionMap({ transactionPool }) {
        return transactionPool.transactionPool.map(transaction => transaction.transactionMap());
    }

    transactionMap() {
        return {
            id: this.id,
            input: this.input,
            outputs: this.outputs
        };
    }

    static transactionPoolMap({ transactionPool }) {
        const transactionPoolMap = {};

        transactionPool.transactionPool.forEach(transaction => {
            transactionPoolMap[transaction.id] = transaction;
        });

        return transactionPoolMap;
    }

    static transactionMinerMap({ transactionMiner }) {
        const transactionMinerMap = {};

        transactionMiner.transactionMiner.forEach(transaction => {
            transactionMinerMap[transaction.id] = transaction;
        });

        return transactionMinerMap;
    }

    static validTransaction(transaction) {
        const { input: { address, amount, signature }, outputs } = transaction;

        const outputTotal = outputs.reduce((total, output) => {
            return total + output.amount;
        }, 0);

        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }

        if (!verifySignature({ address, dataHash, signature })) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }

        return true;
    }

    static clearBlockchainTransactions({ chain, transactionPool }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            for (let transaction of block.data) {
                if (transactionPool.transactionPoolMap[transaction.id]) {
                    delete transactionPool.transactionPoolMap[transaction.id];
                }
            }
        }
    }

    static clearBlockchainTransactions({ chain, transactionMiner }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            for (let transaction of block.data) {
                if (transactionMiner.transactionMinerMap[transaction.id]) {
                    delete transactionMiner.transactionMinerMap[transaction.id];
                }
            }
        }
    }

    static clearBlockchainTransactions({ chain, transactionPool }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            for (let transaction of block.data) {
                if (transactionPool.transactionPoolMap[transaction.id]) {
                    delete transactionPool.transactionPoolMap[transaction.id];
                }
            }
        }
    }

    static clearBlockchainTransactions({ chain, transactionMiner }) {
        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            for (let transaction of block.data) {
                if (transactionMiner.transactionMinerMap[transaction.id]) {
                    delete transactionMiner.transactionMinerMap[transaction.id];
                }
            }
        }
    }

}

class addressPool {
    constructor() {
        this.addressPool = [];
        this.addressPoolMap = new AddressPoolMap();
    }

    static validAddressPool(addressPool) {
        for (let i = 0; i < addressPool.length; i++) {
            const address = addressPool[i];

            if (address.address === REWARD_INPUT.address) {
                console.error('The miner reward input is invalid');
                return false;
            }

            if (Object.values(address.addressMap).reduce((total, outputAmount) => total + outputAmount) !== address.input.amount) {
                console.error(`The address ${address.address} has an invalid balance`);
                return false;
            }

            if (!addressMap.verifyAddress(address)) {
                console.error(`The address ${address.address} has an invalid signature`);
                return false;
            }
        }

        return true;
    }

    static clearBlockchainAddressPool({ chain, addressPool }) {

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];

            for (let address of block.data) {
                if (addressPool.addressPoolMap[address.address]) {
                    delete addressPool.addressPoolMap[address.address];
                }
            }
        }
    }


}

class addressMiner {
    constructor() {
        this.addressMiner = [];
        this.addressMinerMap = new AddressMinerMap();
    }

    static validAddressMiner(addressMiner) {
        for (let i = 0; i < addressMiner.length; i++) {
            const address = addressMiner[i];

            if (address.address === REWARD_INPUT.address) {
                console.error('The miner reward input is invalid');
                return false;
            }

            if (Object.values(address.addressMap).reduce((total, outputAmount) => total + outputAmount) !== address.input.amount) {
                console.error(`The address ${address.address} has an invalid balance`);
                return false;
            }

            if (!addressMap.verifyAddress(address)) {
                console.error(`The address ${address.address} has an invalid signature`);
                return false;
            }
        }

        return true;
    }

    static clearBlockchainAddressMiner({ chain, addressMiner }) {
            
            for (let i = 1; i < chain.length; i++) {
                const block = chain[i];
    
                for (let address of block.data) {
                    if (addressMiner.addressMinerMap[address.address]) {
                        delete addressMiner.addressMinerMap[address.address];
                    }
                }
            }
    }

}

class addressMap {
    constructor() {
        this.addressMap = [];
    }

    static verifyAddress(address) {
        return verifySignature({
            publicKey: address.address,
            dataHash: hash(address.input),
            signature: address.input.signature
        });
    }

    static addressMap({ addressPool }) {
        const addressMap = {};

        addressPool.addressPool.forEach(address => {
            addressMap[address.address] = address;
        });

        return addressMap;
    }

    static addressMap({ addressMiner }) {
        const addressMap = {};

        addressMiner.addressMiner.forEach(address => {
            addressMap[address.address] = address;
        });

        return addressMap;
    }
        
}

class addressPoolMap {
    constructor() {
        this.addressPoolMap = [];
    }

    static addressPoolMap({ addressPool }) {
        const addressPoolMap = {};

        addressPool.addressPool.forEach(address => {
            addressPoolMap[address.id] = address;
        });

        return addressPoolMap;
    }

    static addressPoolMap({ addressMiner }) {
        const addressPoolMap = {};

        addressMiner.addressMiner.forEach(address => {
            addressPoolMap[address.id] = address;
        });

        return addressPoolMap;
    }


}

class addressMinerMap {
    constructor() {
        this.addressMinerMap = [];
    }

    static addressMinerMap({ addressMiner }) {
        const addressMinerMap = {};

        addressMiner.addressMiner.forEach(address => {
            addressMinerMap[address.id] = address;
        });

        return addressMinerMap;
    }

    static addressMinerMap({ addressPool }) {
        const addressMinerMap = {};

        addressPool.addressPool.forEach(address => {
            addressMinerMap[address.id] = address;
        });

        return addressMinerMap;
    }


}

module.exports = { address, addressPool, addressMiner, addressMap, addressPoolMap, addressMinerMap };