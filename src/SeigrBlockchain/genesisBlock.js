const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const { createWallet, saveWallet, loadWallet } = require('./walletUtils');
const { createBlock, saveBlock, loadBlock } = require('./block.js');

const walletDirectory = path.join(os.homedir(), 'Seigr', 'wallets');
const genesisBlockDirectory = path.join(os.homedir(), 'Seigr', 'genesisBlock');

class GenesisBlock {
  constructor({ genesisWallet }) {
    this.index = 0;
    this.timestamp = Date.now();
    this.previousHash = '0'.repeat(64);
    this.data = 'genesis block';
    this.hash = cryptoHash(this.index, this.timestamp, this.previousHash, this.data);
    this.saveGenesisBlock({ genesisWallet });
  }

  saveGenesisBlock({ genesisWallet }) {
    fs.writeFileSync(
      path.join(genesisBlockDirectory, `${this.hash}.json`),
      JSON.stringify(this)
    );
  }

  static loadGenesisBlock() {
    const genesisBlockFile = fs.readFileSync(
      path.join(genesisBlockDirectory, fs.readdirSync(genesisBlockDirectory)[0])
    );
    return JSON.parse(genesisBlockFile);
  }
}

module.exports = { GenesisBlock };
