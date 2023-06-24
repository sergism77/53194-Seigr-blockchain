'use strict';

import * as fs from 'fs';
import * as path from 'path';

function saveBlockchain(blockchainInstance: any): void {
  const blockchainDirectory: string = path.join(__dirname, 'blockchain');
  const blockchainPath: string = path.join(blockchainDirectory, 'blockchain.json');
  const blockchainData: string = JSON.stringify(blockchainInstance);

  fs.mkdirSync(blockchainDirectory, { recursive: true });
  fs.writeFileSync(blockchainPath, blockchainData);
}

export default saveBlockchain;