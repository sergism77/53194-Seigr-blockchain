const fs = require('fs');
const path = require('path');
const os = require('os');
const { cryptoHash } = require('./utils');
const { STARTING_BALANCE } = require('./config');
const { createWallet, saveWallet, loadWallet } = require('./walletUtils');

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
    const genesisBlockFile = path.join(genesisBlockDirectory, `${this.hash}.json`);
    fs.writeFileSync(genesisBlockFile, JSON.stringify(this));
  }

  static loadGenesisBlock() {
    const genesisBlockFiles = fs.readdirSync(genesisBlockDirectory);
    const genesisBlockFile = path.join(genesisBlockDirectory, genesisBlockFiles[0]);
    const genesisBlockData = fs.readFileSync(genesisBlockFile);
    return JSON.parse(genesisBlockData);
  }
}

module.exports = { GenesisBlock };
