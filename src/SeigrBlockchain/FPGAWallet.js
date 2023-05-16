const { Wallet } = require('ethers');
const { Transaction } = require('./Transaction');


class FPGAWallet {
    constructor() {
        this._wallet = new Wallet();
        this._wallet.generateKeyPair();

        this._wallet.generateAddress();

        this._name = "FPGA";

        this._type = "FPGA";

        this._hashrate = 0;

        this._power = 0;

        this._price = 0;

        this._hashratePerWatt = 0;

        this._hashratePerDollar = 0;

    }

    get publicKey() {
        return this._wallet.publicKey;
    }

    get privateKey() {
        return this._wallet.privateKey;
    }

    get address() {
        return this._wallet.address;
    }

    get balance() {
        return this._wallet.balance;
    }

    createTransaction(to, amount) {
        return new Transaction(this.address, to, amount);
    }

    signTransaction(transaction) {
        return this._wallet.sign(transaction);
    }

    static validTransaction(transaction) {
        const {
            input: { address, amount, signature },
            outputMap
        } = transaction;

        const outputTotal = Object.values(outputMap).reduce(
            (total, outputAmount) => total + outputAmount
        );

        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        
        if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }

        return true;
    }

    static rewardTransaction({ minerWallet }) {
        return new this({
            input: REWARD_INPUT,
            outputMap: { [minerWallet.address]: MINING_REWARD }
        });
    }

    updateTransaction({ senderWallet, recipient, amount }) {
        if (amount > this.outputMap[senderWallet.address]) {
            throw new Error('Amount exceeds balance');
        }

        if (!this.outputMap[recipient]) {
            this.outputMap[recipient] = amount;
        } else {
            this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }

        this.outputMap[senderWallet.address] = this.outputMap[senderWallet.address] - amount;

        this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
    }

    createInput({ senderWallet, outputMap }) {
        return {
            timestamp: Date.now(),
            address: senderWallet.address,
            amount: senderWallet.balance,
            signature: senderWallet.sign(outputMap)
        };
    }

    static calculateBalance({ address, chain }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;

        for (let i = chain.length - 1; i > 0; i--) {
            const block = chain[i];

            for (let transaction of block.data) {
                if (transaction.input.address === address) {
                    hasConductedTransaction = true;
                }

                const addressOutput = transaction.outputMap[address];

                if (addressOutput) {
                    outputsTotal = outputsTotal + addressOutput;
                }
            }

            if (hasConductedTransaction) {
                break;
            }
        }

        return hasConductedTransaction ? outputsTotal : STARTING_BALANCE + outputsTotal;
    }

    static blockchainWallet() {
        const blockchainWallet = new this();
        blockchainWallet.address = 'blockchain-wallet';
        return blockchainWallet;
    }

    static isValidWallet(wallet) {
        if (!wallet.publicKey) {
            return false;
        }

        return true;
    }

    static isValidAddress(address) {
        if (!address) {
            return false;
        }

        return true;
    }

    static isValidSignature({ publicKey, data, signature }) {
        return verifySignature({ publicKey, data, signature });
    }

    static verifySignature({ publicKey, data, signature }) {
        const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
        return keyFromPublic.verify(cryptoHash(data), signature);
    }

    static createHash(data) {
        return crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
    }

    static createSignature({ privateKey, data }) {
        return ec.keyFromPrivate(privateKey, 'hex').sign(createHash(data));
    }



}

class FPGAWalletMap {
    constructor() {
        this._wallets = {};

        this._wallets[FPGAWallet.blockchainWallet().address] = FPGAWallet.blockchainWallet();

        this._wallets[FPGAWallet.fpgaWallet().address] = FPGAWallet.fpgaWallet();

        this._wallets[FPGAWallet.cpuWallet().address] = FPGAWallet.cpuWallet();

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

    static validWallet(wallet) {
        return Object.values(this._wallets).includes(wallet);
    }

    static validAddress(address) {
        return Object.keys(this._wallets).includes(address);
    }

    static validSignature({ publicKey, data, signature }) {
        const wallet = this._wallets[publicKey];

        return wallet.verifySignature({ data, signature });
    }

    static blockchainWallet() {
        return this._wallets[FPGAWallet.blockchainWallet().address];
    }

    static fpgaWallet() {
        return this._wallets[FPGAWallet.fpgaWallet().address];
    }

    static cpuWallet() {
        return this._wallets[FPGAWallet.cpuWallet().address];
    }

    static createHash(data) {
        return FPGAWallet.createHash(data);
    }

    static createSignature({ privateKey, data }) {
        return FPGAWallet.createSignature({ privateKey, data });
    }

    static calculateBalance({ address, chain }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;

        for (let i = chain.length - 1; i > 0; i--) {
            const block = chain[i];

            for (let transaction of block.data) {
                if (transaction.input.address === address) {
                    hasConductedTransaction = true;
                }

                const addressOutput = transaction.outputMap[address];

                if (addressOutput) {
                    outputsTotal = outputsTotal + addressOutput;
                }
            }

            if (hasConductedTransaction) {
                break;
            }
        }

        return hasConductedTransaction ? outputsTotal : STARTING_BALANCE + outputsTotal;
    }

    static validTransaction(transaction) {
        const {
            input: { address, amount, signature },
            outputMap
        } = transaction;

        const outputTotal = Object.values(outputMap).reduce(
            (total, outputAmount) => total + outputAmount
        );

        if (amount !== outputTotal) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        
        if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }

        return true;
    }

    static rewardTransaction({ minerWallet }) {
        return new this({
            input: REWARD_INPUT,
            outputMap: { [minerWallet.address]: MINING_REWARD }
        });
    }


}

class FPGAWalletMapSingleton {
    constructor() {
        if (!FPGAWalletMapSingleton.instance) {
            FPGAWalletMapSingleton.instance = new FPGAWalletMap();
        }

        return FPGAWalletMapSingleton.instance;

    }

    getInstance() {
        return FPGAWalletMapSingleton.instance;
    }

}

module.exports = { FPGAWallet, FPGAWalletMap, FPGAWalletMapSingleton };