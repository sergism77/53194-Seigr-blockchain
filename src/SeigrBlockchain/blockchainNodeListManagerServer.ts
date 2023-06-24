'use strict';

import BlockchainNode from './blockchainNode';
import BlockchainNodeList from './blockchainNodeList';

class BlockchainNodeListManagerServer {
  private blockchainNodeList: BlockchainNodeList;

  constructor() {
    this.blockchainNodeList = new BlockchainNodeList();
  }

  /**
   * Add a blockchain node to the blockchain node list.
   * @param {BlockchainNode} blockchainNode - The blockchain node to add.
   */
  public addBlockchainNode(blockchainNode: BlockchainNode): void {
    this.blockchainNodeList.addBlockchainNode(blockchainNode);
  }

  /**
   * Get the blockchain node list.
   * @returns {BlockchainNodeList} - The blockchain node list.
   */
  public getBlockchainNodeList(): BlockchainNodeList {
    return this.blockchainNodeList;
  }

  /**
   * Get the string representation of the blockchain node list manager server.
   * @returns {string} - The string representation of the blockchain node list manager server.
   */
  public toString(): string {
    return (
      'Blockchain Node List Manager Server: ' +
      'Blockchain Node List: ' +
      this.blockchainNodeList.toString()
    );
  }
}

export default BlockchainNodeListManagerServer;