// this is a simpler version of the file without extending the db class.

class Chaindata {
    constructor() {
      this.chaindata = [];
    }
  
    addBlockToChaindata(block) {
      this.chaindata.push(block);
    }
  
    getBlockFromChaindata(blockIndex) {
      return this.chaindata[blockIndex];
    }
  
    getChaindataLength() {
      return this.chaindata.length;
    }
  }
  
  module.exports = Chaindata;