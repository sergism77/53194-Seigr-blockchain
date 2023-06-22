'use strict';

const fs = require('fs');
const path = require('path');

function saveBlockchain(blockchainInstance) {
  const blockchainDirectory = path.join(__dirname, 'blockchain');
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');
  const blockchainData = JSON.stringify(blockchainInstance);

  fs.mkdirSync(blockchainDirectory, { recursive: true });
  fs.writeFileSync(blockchainPath, blockchainData);
}

module.exports = saveBlockchain;
