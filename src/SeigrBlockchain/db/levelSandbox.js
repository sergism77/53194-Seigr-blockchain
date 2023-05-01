//this is the levelSandbox file

const level = require('level');
const chaindata = require('./chaindata');
const path = require('path');
const app = require('electron').remote.app;

class levelSandbox {
    constructor() {
        this.chaindata = new chaindata();
        this.chaindataLength = 0;
        this.db = level(path.join(app.getPath('userData'), 'chaindata'));
    }

    //this function adds a block to the chaindata
    addBlockToChaindata(block) {
        this.chaindata.addBlockToChaindata(block);
        this.chaindataLength++;
    }

    //this function gets a block from the chaindata
    getBlockFromChaindata(block) {
        return this.chaindata.getBlockFromChaindata(block);
    }

    //this function gets the length of the chaindata
    getChaindataLength() {
        return this.chaindataLength;
    }

    //this function adds a block to the db
    addBlockToDB(block) {
        return new Promise((resolve, reject) => {
            this.db.put(block.height, JSON.stringify(block), (err) => {
                if (err) {
                    reject(err);
                }
                resolve(`Added block #${block.height}`);
            });
        });
    }

    //this function gets a block from the db
    getBlockFromDB(key) {
        return new Promise((resolve, reject) => {
            this.db.get(key, (err, value) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(value));
            });
        });
    }

}

module.exports = levelSandbox;