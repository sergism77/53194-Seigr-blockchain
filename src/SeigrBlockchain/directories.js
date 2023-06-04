const fs = require('fs');
const path = require('path');
const os = require('os');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const blockDirectory = path.join(os.homedir(), 'Seigr', 'blocks');
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
const walletPoolDirectory = path.join(os.homedir(), 'Seigr', 'walletPools');
const blockPoolDirectory = path.join(os.homedir(), 'Seigr', 'blockPools');
const transactionPoolDirectory = path.join(os.homedir(), 'Seigr', 'transactionPools');
const genesisWalletDirectory = path.join(os.homedir(), 'Seigr', 'genesisWallet');
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