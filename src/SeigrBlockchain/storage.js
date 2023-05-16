//this is the storage class

//this class will store the blocks in a map
//the key will be the hash of the block

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

    //this function will return the block by address and height
    getBlockByAddressAndHeight(address, height) {
        for (let block of this.storage.values()) {
            if (block.address === address && block.height === height) {
                return block;
            }
        }
    }

    //this function will return the block by address and hash
    getBlockByAddressAndHash(address, hash) {
        for (let block of this.storage.values()) {
            if (block.address === address && block.hash === hash) {
                return block;
            }
        }
    }

    //this function will return the block by height and hash
    getBlockByHeightAndHash(height, hash) {
        for (let block of this.storage.values()) {
            if (block.height === height && block.hash === hash) {
                return block;
            }
        }
    }

    //this function will return the block by address, height and hash
    getBlockByAddressAndHeightAndHash(address, height, hash) {
        for (let block of this.storage.values()) {
            if (block.address === address && block.height === height && block.hash === hash) {
                return block;
            }
        }
    }

}

module.exports = Storage;