const fs = require('fs');
const path = require('path');
const os = require('os');

const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { createBlock, Block, saveBlock, loadBlock } = require('./block.js');
const { createTransaction, saveTransaction, loadTransaction, Transaction } = require('./transaction.js');
const { createBlockchain, saveBlockchain, loadBlockchain } = require('./blockchain.js');
const { createWallet } = require('./walletUtils');
const Wallet = require('./wallet');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');

if (!fs.existsSync(walletDirectory)) {
    fs.mkdirSync(walletDirectory, { recursive: true });
}
if (!fs.existsSync(blockDirectory)) {
    fs.mkdirSync(blockDirectory, { recursive: true });
}
if (!fs.existsSync(transactionDirectory)) {
    fs.mkdirSync(transactionDirectory, { recursive: true });
}
if (!fs.existsSync(blockchainDirectory)) {
    fs.mkdirSync(blockchainDirectory, { recursive: true });
}
if (!fs.existsSync(walletPoolDirectory)) {
    fs.mkdirSync(walletPoolDirectory, { recursive: true });
}
if (!fs.existsSync(blockPoolDirectory)) {
    fs.mkdirSync(blockPoolDirectory, { recursive: true });
}
if (!fs.existsSync(transactionPoolDirectory)) {
    fs.mkdirSync(transactionPoolDirectory, { recursive: true });
}

const senderWallet = new createWallet({ Wallet });

const transaction = createTransaction({ senderWallet });

const blockchainInstance = new createBlockchain();

const SeigrBlockchain = {
    createBlock,
    createTransaction,
    createBlockchain: blockchainInstance,
    saveBlock,
    saveTransaction,
    saveBlockchain,
    loadBlock,
    loadTransaction,
    loadBlockchain,
    cryptoHash,
    verifySignature,
    STARTING_BALANCE,
    ec,
    fs,
    path,
    Transaction,
    Block,
};

module.exports = SeigrBlockchain;
