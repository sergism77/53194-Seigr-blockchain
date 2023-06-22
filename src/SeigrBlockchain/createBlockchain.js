'use strict';

const Blockchain = require('./blockchain');

class createBlockchain extends Blockchain {
  constructor(genesisBlock) {
    super();
    this.chain = [genesisBlock];
  }

  // Add custom methods for the createBlockchain class if needed
}

module.exports = createBlockchain;
