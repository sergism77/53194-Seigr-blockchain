//this is the storage class

class Storage {
    constructor() {
        this.storage = new Map();
    }

    //this function will add the block to the storage
    addBlock(block) {
        this.storage.set(block.hash, block);
    }

    //this function will return the block by hash
    getBlockByHash(hash) {
        return this.storage.get(hash);
    }

    //this function will return the block by height
    getBlockByHeight(height) {
        for (let block of this.storage.values()) {
            if (block.height === height) {
                return block;
            }
        }
    }

    //this function will return the block by address
    getBlockByAddress(address) {
        let blocks = [];
        for (let block of this.storage.values()) {
            if (block.address === address) {
                blocks.push(block);
            }
        }
        return blocks;
    }
}

module.exports = Storage;