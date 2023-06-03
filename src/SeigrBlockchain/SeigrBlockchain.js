const fs = require('fs');
const path = require('path');
const os = require('os');

const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { createGenesisWallet,
    saveGenesisWallet,
    loadGenesisWallet,
    createWallet,
    saveWallet,
    loadWallet } = require('./walletUtils');
const wallet = require('./wallet');
const { mineGenesisWalletPool,
    saveGenesisWalletPool,
    loadGenesisWalletPool,
    genesisWalletPool } = require('./genesisWalletPool');
const { createBlock, block, saveBlock, loadBlock } = require('./block.js');
const { mineGenesisBlock, saveGenesisBlock, loadGenesisBlock } = require('./genesisBlock.js');
const { createTransactionPool, 
    saveTransactionPool,
    loadTransactionPool,
    transaction, 
    transactionPool, 
    createTransaction, 
    saveTransaction, 
    loadTransaction } = require('./transaction.js');
    const { mineGenesisTransactionPool,
        mineGenesisTransactionPoolRewardTimestamp,
        mineGenesisTransactionPoolRewardInput,
        mineGenesisTransactionPoolRewardOutput,
        mineGenesisTransactionPoolRewardHash,
        mineGenesisTransactionPoolRewardSignature,
        mineGenesisTransactionPoolRewardPublicKey,
        mineGenesisTransactionPoolRewardAmount,
        mineGenesisTransactionPoolRewardAddress } = require('./genesisTransactionPool.js');
const { genesisTransaction,
    createGenesisTransactionPool,
    createGenesisTransaction,
    saveGenesisTransaction,
    loadGenesisTransaction } = require('./genesisTransaction.js');
const { createBlockchain,
    blockchain,
    saveBlockchain,
    loadBlockchain } = require('./blockchain.js');
const { mineGenesisBlockchain,
    saveGenesisBlockchain,
    loadGenesisBlockchain } = require('./genesisBlockchain.js');
const { createWalletPool,
    walletPool,
    saveWalletPool,
    loadWalletPool } = require('./walletPool.js');
const { createBlockPool, blockPool, saveBlockPool, loadBlockPool } = require('./blockPool.js');
const { mineGenesisBlockPool, saveGenesisBlockPool, loadGenesisBlockPool } = require('./genesisBlockPool.js');
const genesisWallet = new createGenesisWallet();
const genesisBlock = new mineGenesisBlock({ genesisWallet });
const genesisBlockchain = mineGenesisBlockchain({ genesisBlock });
const genesisBlockPool = mineGenesisBlockPool({ genesisBlock });
const p2pServer = require('./p2pServer');


const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');
const genesisWalletDirectory = path.join(os.homedir(), 'Seigr', 'genesisWallet');
const p2pDirectory = path.join(os.homedir(), 'Seigr', 'p2p');
const miner = path.join(os.homedir(), 'Seigr', 'miner');





//we need to check if all the seigr directories exist, if not, create them. If they do, do nothing.
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
if (!fs.existsSync(genesisWalletDirectory)) {
    fs.mkdirSync(genesisWalletDirectory, { recursive: true });
}
if (!fs.existsSync(p2pDirectory)) {
    fs.mkdirSync(p2pDirectory, { recursive: true });
}
if (!fs.existsSync(miner)) {
    fs.mkdirSync(miner, { recursive: true });
}


const SeigrBlockchain = {
    createWallet,
    createBlock,
    createTransaction,
    createBlockchain,
    createWalletPool,
    createBlockPool,
    createTransactionPool,
    createGenesisWallet,
    mineGenesisBlock,
    createGenesisTransactionPool,
    createGenesisTransaction,
    mineGenesisBlockchain,
    mineGenesisWalletPool,
    mineGenesisBlockPool,
    saveWallet,
    saveBlock,
    saveTransaction,
    saveBlockchain,
    saveWalletPool,
    saveBlockPool,
    saveGenesisWallet,
    saveGenesisBlock,
    saveGenesisTransaction,
    saveGenesisBlockchain,
    saveGenesisWalletPool,
    saveGenesisBlockPool,
    loadWallet,
    loadBlock,
    loadTransaction,
    loadBlockchain,
    loadWalletPool,
    loadBlockPool,
    loadGenesisWallet,
    loadGenesisBlock,
    loadGenesisTransaction,
    loadGenesisBlockchain,
    loadGenesisWalletPool,
    loadGenesisBlockPool,
    cryptoHash,
    verifySignature,
    STARTING_BALANCE,
    ec,
    fs,
    path,
    wallet,
    block,
    transaction,
    blockchain,
    walletPool,
    blockPool,
    genesisWallet,
    genesisBlock,
    genesisTransaction,
    genesisBlockchain,
    genesisWalletPool,
    genesisBlockPool,
    transactionPool,
    p2pServer,
    mineGenesisTransactionPool,
    mineGenesisTransactionPoolRewardTimestamp,
    mineGenesisTransactionPoolRewardInput,
    mineGenesisTransactionPoolRewardOutput,



};

module.exports = { SeigrBlockchain };
