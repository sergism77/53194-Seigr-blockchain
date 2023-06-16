const Blockchain = require('./blockchain');

class createBlockchain extends Blockchain {
  constructor() {
    super();
    this.chain = []; // Initialize this.chain as an empty array
  }

  // Add custom methods for the createBlockchain class if needed
}

module.exports = createBlockchain;
