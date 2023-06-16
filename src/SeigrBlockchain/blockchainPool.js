const fs = require('fs');
const os = require('os');
const path = require('path');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

class BlockchainPool {
  constructor({ blockchain }) {
    this.blockchain = blockchain;
  }

  updateBlockchainPool() {
    // Custom logic to update the blockchain pool
    const blockchainPool = this.blockchain.getBlocks();
    const blockchainPoolString = JSON.stringify(blockchainPool);
    fs.writeFileSync(path.join(blockchainDirectory, 'blockchain.json'), blockchainPoolString);

    return blockchainPool;
  }
}

const CreateBlockchainPool = ({ blockchain }) => {
  return new BlockchainPool({ blockchain });
};

module.exports = { BlockchainPool, CreateBlockchainPool };
