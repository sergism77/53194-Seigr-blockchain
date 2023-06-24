'use strict';

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { cryptoHash } from './utils';
import { STARTING_BALANCE } from './config';
import { createWallet, saveWallet, loadWallet } from './walletUtils';

const genesisBlockDirectory = path.join(os.homedir(), 'Seigr', 'genesisBlock');

class GenesisBlock {
  index: number;
  timestamp: number;
  previousHash: string;
  data: string;
  hash: string;

  constructor({ genesisWallet }: { genesisWallet: any }) {
    this.index = 0;
    this.timestamp = Date.now();
    this.previousHash = '0'.repeat(64);
    this.data = 'genesis block';
    this.hash = cryptoHash(this.index, this.timestamp, this.previousHash, this.data);
    this.saveGenesisBlock({ genesisWallet });
  }

  saveGenesisBlock({ genesisWallet }: { genesisWallet: any }) {
    const genesisBlockFile = path.join(genesisBlockDirectory, `${this.hash}.json`);
    fs.writeFile(genesisBlockFile, JSON.stringify(this), (err: any) => {
      if (err) {
        console.error('Error saving genesis block:', err);
      }
    });
  }

  static loadGenesisBlock(blockchainDirectory: string) {
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

export { GenesisBlock };