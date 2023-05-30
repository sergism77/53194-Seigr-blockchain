const fs = require('fs');
const path = require('path');
const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { createGenesisWallet, createWallet, saveWallet, loadWallet } = require('./walletUtils');
const { mineGenesisWalletPool, saveGenesisWalletPool, loadGenesisWalletPool } = require('./genesisWalletPool');
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
    const { mineGenesisTransactionPool, mineGenesisTransactionPoolRewardTimestamp, mineGenesisTransactionPoolRewardInput, mineGenesisTransactionPoolRewardOutput, mineGenesisTransactionPoolRewardHash, mineGenesisTransactionPoolRewardSignature, mineGenesisTransactionPoolRewardPublicKey, mineGenesisTransactionPoolRewardAmount, mineGenesisTransactionPoolRewardAddress } = require('./genesisTransactionPool.js');
const { genesisTransaction, createGenesisTransactionPool, createGenesisTransaction, saveGenesisTransaction, loadGenesisTransaction } = require('./genesisTransaction.js');
const { createBlockchain, blockchain, saveBlockchain, loadBlockchain } = require('./blockchain.js');
const { mineGenesisBlockchain, saveGenesisBlockchain, loadGenesisBlockchain } = require('./genesisBlockchain.js');
const { createWalletPool, walletPool, saveWalletPool, loadWalletPool } = require('./walletPool.js');
const { createBlockPool, blockPool, saveBlockPool, loadBlockPool } = require('./blockPool.js');
const { mineGenesisBlockPool, saveGenesisBlockPool, loadGenesisBlockPool } = require('./genesisBlockPool.js');
const genesisWallet = new createGenesisWallet();
const genesisBlock = new mineGenesisBlock({ genesisWallet });
const genesisBlockchain = mineGenesisBlockchain({ genesisBlock });
//const genesisWalletPool = mineGenesisWalletPool({ genesisWalletPool });
const genesisBlockPool = mineGenesisBlockPool({ genesisBlock });
//const genesisTransactionPool = mineGenesisTransactionPool({ genesisTransactionPool });
//const saveGenesisWallet = saveGenesisWallet({ genesisWallet });
//const loadGenesisWallet = loadGenesisWallet({ genesisWallet });
//const transactionPool = createTransactionPool({ transaction });

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
    createGenesisWalletPool,
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
    transactionPool

};

module.exports = { SeigrBlockchain };