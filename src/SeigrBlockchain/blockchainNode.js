const assert = require('assert');
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

// Test suite for the BlockchainNode class
describe('BlockchainNode', () => {
  const nodeAddress = 'http://localhost:53194';
  const node = new BlockchainNode(nodeAddress);

  it('should initialize blockchainNodeAddress and id properties when a new object is created', () => {
    assert.equal(node.getBlockchainNodeAddress(), nodeAddress);
    assert.equal(node.getId(), SHA256(nodeAddress).toString());
  });

  it('should return the blockchainNodeAddress property when `getBlockchainNodeAddress` is called', () => {
    assert.equal(node.getBlockchainNodeAddress(), nodeAddress);
  });

  it('should return the id property when `getId` is called', () => {
    assert.equal(node.getId(), SHA256(nodeAddress).toString());
  });

  it('should return a string representation of the object when `toString` is called', () => {
    const expectedString =
      'Blockchain Node: \n' +
      'Blockchain Node Address: ' +
      nodeAddress +
      '\n' +
      'Id: ' +
      SHA256(nodeAddress).toString() +
      '\n';

    assert.equal(node.toString(), expectedString);
  });
});

module.exports = BlockchainNode;
