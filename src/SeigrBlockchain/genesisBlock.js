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
    fs.writeFile(genesisBlockFile, JSON.stringify(this), (err) => {
      if (err) {
        console.error('Error saving genesis block:', err);
      }
    });
  }

  static loadGenesisBlock(blockchainDirectory) {
    if (!fs.existsSync(genesisBlockDirectory)) {
      fs.mkdirSync(genesisBlockDirectory, { recursive: true });
    }
    
    const genesisBlockFiles = fs.readdirSync(genesisBlockDirectory);
    if (genesisBlockFiles.length === 0) {
      console.error('No genesis block found.');
      return null;
    }

    const genesisBlockFile = path.join(genesisBlockDirectory, genesisBlockFiles[0]);
    const genesisBlockData = fs.readFileSync(genesisBlockFile, 'utf8');
    return JSON.parse(genesisBlockData);
  }
}

module.exports = { GenesisBlock };
