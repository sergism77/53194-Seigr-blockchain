'use strict';

import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

const blockchainDirectory: string = path.join(os.homedir(), 'Seigr', 'blockchain');

class BlockchainPool {
  private blockchain: any;

  constructor({ blockchain }: { blockchain: any }) {
    this.blockchain = blockchain;
  }

  public updateBlockchainPool(): any {
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

const CreateBlockchainPool = ({ blockchain }: { blockchain: any }): BlockchainPool => {
  return new BlockchainPool({ blockchain });
};

export { BlockchainPool, CreateBlockchainPool };