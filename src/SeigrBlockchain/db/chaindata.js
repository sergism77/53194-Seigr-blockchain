//this is the chaindata file for the SeigrBlockchain

class chaindata extends db {
    constructor() {
        super();
        this.chaindata = [];
        this.chaindataLength = 0;
    }

    //this function adds a block to the chaindata
    addBlockToChaindata(block) {
        this.chaindata.push(block);
        this.chaindataLength++;
    }

    //this function gets a block from the chaindata
    getBlockFromChaindata(block) {
        return this.chaindata[block];
    }

    //this function gets the length of the chaindata
    getChaindataLength() {
        return this.chaindataLength;
    }
}

module.exports = chaindata;