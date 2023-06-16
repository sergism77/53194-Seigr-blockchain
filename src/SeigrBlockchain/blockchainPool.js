const fs = require('fs');
const path = require('path');

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

module.exports = BlockchainPool;
