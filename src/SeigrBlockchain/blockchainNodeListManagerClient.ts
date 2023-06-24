'use strict';

import BlockchainNode from './blockchainNode';
import BlockchainNodeList from './blockchainNodeList';

class BlockchainNodeListManagerClient {
  #blockchainNodeList = new BlockchainNodeList();

  /**
   * Add a blockchain node to the blockchain node list.
   * @param {BlockchainNode} blockchainNode - The blockchain node to add.
   */
  addBlockchainNode(blockchainNode: BlockchainNode): void {
    this.#blockchainNodeList.addBlockchainNode(blockchainNode);
  }

  /**
   * Get the blockchain node list.
   * @returns {BlockchainNodeList} - The blockchain node list.
   */
  getBlockchainNodeList(): BlockchainNodeList {
    return this.#blockchainNodeList;
  }

  /**
   * Get the string representation of the blockchain node list manager client.
   * @returns {string} - The string representation of the blockchain node list manager client.
   */
  toString(): string {
    return (
      'Blockchain Node List Manager Client: ' +
      'Blockchain Node List: ' +
      this.#blockchainNodeList.toString()
    );
  }
}

export default BlockchainNodeListManagerClient;