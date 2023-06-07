const fs = require('fs');
const path = require('path');
const os = require('os');

const { cryptoHash, verifySignature } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const ec = require('elliptic').ec('secp256k1');
const { createWallet,
    saveWallet,
    loadWallet } = require('./walletUtils');
const wallet = require('./wallet');

const { createBlock, block, saveBlock, loadBlock } = require('./block.js');
const { genesisBlock, mineGenesisBlock, saveGenesisBlock, loadGenesisBlock } = require('./genesisBlock.js');
const { createTransactionPool, 
    saveTransactionPool,
    loadTransactionPool,
    transaction, 
    transactionPool, 
    createTransactionPoolRewardTimestamp,
    createTransactionPoolRewardInput,
    createTransactionPoolRewardOutput,
    saveTransaction, 
    loadTransaction } = require('./transaction.js');
const { mineGenesisTransactionPool,
    mineGenesisTransactionPoolReward,
    mineGenesisTransactionPoolRewardTransaction,
    mineGenesisTransactionPoolRewardTimestamp,
    mineGenesisTransactionPoolRewardInput,
    mineGenesisTransactionPoolRewardTransactionSignature,
    mineGenesisTransactionPoolRewardTransactionInput,
    mineGenesisTransactionPoolRewardTransactionOutput,
    mineGenesisTransactionPoolRewardTransactionHash,
    mineGenesisTransactionPoolRewardOutput,
    mineGenesisTransactionPoolRewardHash,
    mineGenesisTransactionPoolRewardSignature,
    mineGenesisTransactionPoolRewardPublicKey,
    mineGenesisTransactionPoolRewardTransactionPublicKey,
    mineGenesisTransactionPoolRewardTransactionAmount,
    mineGenesisTransactionPoolRewardTransactionAddress,
    mineGenesisTransactionPoolRewardAmount,
    mineGenesisTransactionPoolRewardAddress } = require('./genesisTransactionPool.js');
const { genesisTransaction,
    mineGenesisTransaction,
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
const { Miner } = require('./miner.js');
const { P2pServer, listen, connectToPeers } = require('./p2pServer.js');


//const genesisBlock = new mineGenesisBlock({ genesisBlock }); 
const genesisBlockchain = mineGenesisBlockchain({ genesisBlock });
const genesisBlockPool = mineGenesisBlockPool({ genesisBlock });
const genesisTransactionPool = new mineGenesisTransactionPool({ genesisTransaction });
//const genesisTransaction = new createGenesisTransaction({ genesisWallet }); 
//const genesisWalletPool = new mineGenesisWalletPool({ genesisWallet });
const genesisTransactionPoolRewardTimestamp = new mineGenesisTransactionPoolRewardTimestamp({ genesisTransactionPool });
const genesisTransactionPoolRewardInput = new mineGenesisTransactionPoolRewardInput({ genesisTransactionPool });
const genesisTransactionPoolRewardOutput = new mineGenesisTransactionPoolRewardOutput({ genesisTransactionPool });
const genesisTransactionPoolRewardHash = new mineGenesisTransactionPoolRewardHash({ genesisTransactionPool });
const genesisTransactionPoolRewardSignature = new mineGenesisTransactionPoolRewardSignature({ genesisTransactionPool });



const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');
const p2pDirectory = path.join(os.homedir(), 'Seigr', 'p2p');
const minerDirectory = path.join(os.homedir(), 'Seigr', 'miner');
const genesisBlockDirectory = path.join(os.homedir(), 'Seigr', 'genesisBlock');




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

if (!fs.existsSync(p2pDirectory)) {
    fs.mkdirSync(p2pDirectory, { recursive: true });
}
if (!fs.existsSync(minerDirectory)) {
    fs.mkdirSync(minerDirectory, { recursive: true });
}
if (!fs.existsSync(genesisBlockDirectory)) {
    fs.mkdirSync(genesisBlockDirectory, { recursive: true });
}


//we want to start the p2p server and start listening for peers and creating blocks
new listen({ P2pServer });
new connectToPeers({ P2pServer });


//we want to start the wallet and start creating wallets when needed
new createWallet({ wallet });


//we want to start the block and start creating blocks
new createBlock({ block });

//we want to start the transaction and start creating transactions
new transaction({ transaction });

//we want to start the blockchain and start creating blockchains
createBlockchain({ blockchain }); 

//we want to start the walletPool and start creating walletPools
createWalletPool({ walletPool });













const SeigrBlockchain = {
    createWallet,
    createBlock,
    createTransaction,
    createBlockchain,
    createWalletPool,
    createBlockPool,
    createTransactionPool,
    mineGenesisBlock,
    mineGenesisTransactionPool,
    mineGenesisTransaction,
    mineGenesisBlockchain,
    //mineGenesisWalletPool,
    mineGenesisBlockPool,
    saveWallet,
    saveBlock,
    saveTransaction,
    saveBlockchain,
    saveWalletPool,
    saveBlockPool,
    saveGenesisBlock,
    saveGenesisTransaction,
    saveGenesisBlockchain,
    saveGenesisBlockPool,
    loadWallet,
    loadBlock,
    loadTransaction,
    loadBlockchain,
    loadWalletPool,
    loadBlockPool,
    //loadGenesisWallet,
    loadGenesisBlock,
    loadGenesisTransaction,
    loadGenesisBlockchain,
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
    genesisBlock,
    genesisTransaction,
    genesisBlockchain,
    genesisBlockPool,
    transactionPool,
    p2pServer,
    mineGenesisTransactionPoolRewardTimestamp,
    mineGenesisTransactionPoolRewardInput,
    mineGenesisTransactionPoolRewardOutput,
    mineGenesisTransactionPoolRewardHash,
    mineGenesisTransactionPoolRewardSignature,
    mineGenesisTransactionPoolRewardPublicKey,
    mineGenesisTransactionPoolRewardAmount,
    mineGenesisTransactionPoolRewardAddress
};



module.exports = { SeigrBlockchain };