'use strict';

import BlockchainNode from './blockchainNode';
import BlockchainNodeList from './blockchainNodeList';
import BlockchainNodeListManagerClient from './blockchainNodeListManagerClient';
import BlockchainNodeListManagerServer from './blockchainNodeListManagerServer';

class BlockchainNodeListManager {
  private blockchainNodeList: BlockchainNodeList;
  private blockchainNodeListManagerClient: BlockchainNodeListManagerClient;
  private blockchainNodeListManagerServer: BlockchainNodeListManagerServer;

  constructor() {
    this.blockchainNodeList = new BlockchainNodeList();
    this.blockchainNodeListManagerClient = new BlockchainNodeListManagerClient();
    this.blockchainNodeListManagerServer = new BlockchainNodeListManagerServer();
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
   * Get the blockchain node list manager client.
   * @returns {BlockchainNodeListManagerClient} - The blockchain node list manager client.
   */
  public getBlockchainNodeListManagerClient(): BlockchainNodeListManagerClient {
    return this.blockchainNodeListManagerClient;
  }

  /**
   * Get the blockchain node list manager server.
   * @returns {BlockchainNodeListManagerServer} - The blockchain node list manager server.
   */
  public getBlockchainNodeListManagerServer(): BlockchainNodeListManagerServer {
    return this.blockchainNodeListManagerServer;
  }

  /**
   * Get the string representation of the blockchain node list manager.
   * @returns {string} - The string representation of the blockchain node list manager.
   */
  public toString(): string {
    return (
      'Blockchain Node List Manager: \n' +
      'Blockchain Node List: ' +
      this.blockchainNodeList.toString() +
      '\n' +
      'Blockchain Node List Manager Client: ' +
      this.blockchainNodeListManagerClient.toString() +
      '\n' +
      'Blockchain Node List Manager Server: ' +
      this.blockchainNodeListManagerServer.toString()
    );
  }
}

export default BlockchainNodeListManager;