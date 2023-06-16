const fs = require('fs');
const path = require('path');

function loadBlockchain() {
  const blockchainDirectory = path.join(__dirname, 'blockchain');
  const blockchainPath = path.join(blockchainDirectory, 'blockchain.json');

  if (fs.existsSync(blockchainPath)) {
    const blockchainData = fs.readFileSync(blockchainPath, 'utf8');
    return JSON.parse(blockchainData);
  } else {
    return null;
  }
}

module.exports = loadBlockchain;
