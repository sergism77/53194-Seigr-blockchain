const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

class BlockchainNode {
  constructor(blockchainNodeAddress) {
    this.blockchainNodeAddress = blockchainNodeAddress;
    this.id = SHA256(this.blockchainNodeAddress).toString();
  }

  getBlockchainNodeAddress() {
    return this.blockchainNodeAddress;
  }

  getId() {
    return this.id;
  }

  toString() {
    return (
      'Blockchain Node: \n' +
      'Blockchain Node Address: ' +
      this.blockchainNodeAddress +
      '\n' +
      'Id: ' +
      this.id +
      '\n'
    );
  }
}

module.exports = BlockchainNode;
