const fs = require('fs');
const os = require('os');
const path = require('path');
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');

class BlockchainPool {
  constructor({ blockchain }) {
    this.blockchain = blockchain;
  }

  updateBlockchainPool() {
    try {
      const blockchainPool = this.blockchain.getBlocks();
      const blockchainPoolString = JSON.stringify(blockchainPool);
      fs.mkdirSync(blockchainDirectory, { recursive: true });
      fs.writeFileSync(path.join(blockchainDirectory, 'blockchain.json'), blockchainPoolString);
      return blockchainPool;
    } catch (error) {
      console.error('Error updating blockchain pool:', error);
      throw error;
    }
  }
}

const CreateBlockchainPool = ({ blockchain }) => {
  return new BlockchainPool({ blockchain });
};

module.exports = { BlockchainPool, CreateBlockchainPool };
