'use strict';

const chaindata = require('./db/chaindata.js');
const db = require('./db/db.js');

class Storage {
  constructor() {
    this.chaindata = new chaindata();
    this.db = new db();
  }

  addBlock(block) {
    this.chaindata.addBlockToChaindata(block);
    this.db.addBlock(block);
  }

  getBlockByHash(hash) {
    return this.db.getBlockByHash(hash);
  }

  getBlockByHeight(height) {
    return this.db.getBlock(height);
  }

  getBlocksByAddress(address) {
    return this.db.getBlockByWalletAddress(address);
  }

  getBlocksByAddressAndHeight(address, height) {
    return this.db.getBlockByAddressAndHeight(address, height);
  }

  getBlockByAddressAndHash(address, hash) {
    return this.db.getBlockByAddressAndHash(address, hash);
  }

  getBlockByHeightAndHash(height, hash) {
    return this.db.getBlockByHeightAndHash(height, hash);
  }

  getBlockByAddressAndHeightAndHash(address, height, hash) {
    return this.db.getBlockByAddressAndHeightAndHash(address, height, hash);
  }

  getChaindataLength() {
    return this.chaindata.getChaindataLength();
  }
}

module.exports = Storage;
