'use strict';

import * as fs from 'fs';
import * as path from 'path';

function loadBlockchain(): any {
  const blockchainDirectory: string = path.join(__dirname, 'blockchain');
  const blockchainPath: string = path.join(blockchainDirectory, 'blockchain.json');

  if (fs.existsSync(blockchainPath)) {
    const blockchainData: string = fs.readFileSync(blockchainPath, 'utf8');
    return JSON.parse(blockchainData);
  } else {
    return null;
  }
}

export default loadBlockchain;