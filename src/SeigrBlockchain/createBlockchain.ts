'use strict';

import Blockchain from './blockchain';

class createBlockchain extends Blockchain {
  constructor(genesisBlock: any) {
    super();
    this.chain = [genesisBlock];
  }

  // Add custom methods for the createBlockchain class if needed
}

export default createBlockchain;