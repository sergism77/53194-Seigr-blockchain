'use strict';

const WalletMap = require('./walletMap');
const Wallet = require('./wallet');
const CPUWallet = require('./CPUWallet');
const GPUWallet = require('./GPUWallet');
const SeigrBlockchain = require('./SeigrBlockchain');
const SeigrBlockchainTransaction = require('./SeigrBlockchainTransaction');
const Block = require('./block');
const BlockHeader = require('./blockHeader');
const BlockBody = require('./blockBody');
const BlockBodyTransaction = require('./blockBodyTransaction');
const Blockchain = require('./blockchain');
const BlockchainNode = require('./blockchainNode');
const BlockchainNodeList = require('./blockchainNodeList');
const BlockchainNodeListManager = require('./blockchainNodeListManager');
const BlockchainNodeListManagerClient = require('./blockchainNodeListManagerClient');
const BlockchainNodeListManagerServer = require('./blockchainNodeListManagerServer');
const TransactionInput = require('./transactionInput');
const TransactionOutput = require('./transactionOutput');
const Transaction = require('./transaction');
const TransactionPool = require('./transaction');

class WalletMap {
    constructor() {
        this._walletMap = new Map();
    }

    get walletMap() {
        return this._walletMap;
    }

    set walletMap(value) {
        this._walletMap = value;
    }

    getWallet(address) {
        return this._walletMap.get(address);
    }

    createWallet() {
        const wallet = new Wallet();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }

    createCPUWallet() {
        const wallet = new CPUWallet();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }

    createGPUWallet() {
        const wallet = new GPUWallet();
        this._walletMap.set(wallet.address, wallet);
        return wallet;
    }

    toString() {
        return "Wallet Map: " + this._walletMap;
    }

    print() {
        console.log(this.toString());
    }
}

module.exports = WalletMap;