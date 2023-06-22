'use strict';

const BlockchainNode = require('./blockchainNode');
const BlockchainNodeList = require('./blockchainNodeList');

class BlockchainNodeListManagerClient {
  #blockchainNodeList = new BlockchainNodeList();

  /**
   * Add a blockchain node to the blockchain node list.
   * @param {BlockchainNode} blockchainNode - The blockchain node to add.
   */
  addBlockchainNode(blockchainNode) {
    this.#blockchainNodeList.addBlockchainNode(blockchainNode);
  }

  /**
   * Get the blockchain node list.
   * @returns {BlockchainNodeList} - The blockchain node list.
   */
  getBlockchainNodeList() {
    return this.#blockchainNodeList;
  }

  /**
   * Get the string representation of the blockchain node list manager client.
   * @returns {string} - The string representation of the blockchain node list manager client.
   */
  toString() {
    return (
      'Blockchain Node List Manager Client: \n' +
      'Blockchain Node List: ' +
      this.#blockchainNodeList.toString()
    );
  }
}

module.exports = BlockchainNodeListManagerClient;
