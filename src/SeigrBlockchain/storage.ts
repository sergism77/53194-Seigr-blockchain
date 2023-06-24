'use strict';

import Chaindata from './db/chaindata';
import Db from './db/db';

class Storage {
  private chaindata: Chaindata;
  private db: Db;

  constructor() {
    this.chaindata = new Chaindata();
    this.db = new Db();
  }

  public addBlock(block: any): void {
    this.chaindata.addBlockToChaindata(block);
    this.db.addBlock(block);
  }

  public getBlockByHash(hash: string): any {
    return this.db.getBlockByHash(hash);
  }

  public getBlockByHeight(height: number): any {
    return this.db.getBlock(height);
  }

  public getBlocksByAddress(address: string): any {
    return this.db.getBlockByWalletAddress(address);
  }

  public getBlocksByAddressAndHeight(address: string, height: number): any {
    return this.db.getBlockByAddressAndHeight(address, height);
  }

  public getBlockByAddressAndHash(address: string, hash: string): any {
    return this.db.getBlockByAddressAndHash(address, hash);
  }

  public getBlockByHeightAndHash(height: number, hash: string): any {
    return this.db.getBlockByHeightAndHash(height, hash);
  }

  public getBlockByAddressAndHeightAndHash(address: string, height: number, hash: string): any {
    return this.db.getBlockByAddressAndHeightAndHash(address, height, hash);
  }

  public getChaindataLength(): number {
    return this.chaindata.getChaindataLength();
  }
}

export default Storage;