const level = require('level');
const chaindata = require('./chaindata');
const path = require('path');
const app = require('electron').remote.app;

class LevelSandbox {
  constructor() {
    this.chaindata = new chaindata();
    this.chaindataLength = 0;
    this.db = level(path.join(app.getPath('userData'), 'chaindata'));

    this.getBlockHeight()
      .then((height) => {
        this.chaindataLength = height + 1;
      })
      .catch((err) => {
        console.error(err);
      });
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
          console.error(err);
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
          console.error(err);
          reject(err);
        }
        resolve(JSON.parse(value));
      });
    });
  }

  //this function gets the height of the db
  getBlockHeight() {
    return new Promise((resolve, reject) => {
      let height = -1;
      this.db.createReadStream()
        .on('data', () => {
          height++;
        })
        .on('error', (err) => {
          console.error(err);
          reject(err);
        })
        .on('close', () => {
          resolve(height);
        });
    });
  }

  //this function gets a block by its hash
  getBlockByHash(hash) {
    return new Promise((resolve, reject) => {
      let block = null;
      this.db.createReadStream()
        .on('data', (data) => {
          if (JSON.parse(data.value).hash === hash) {
            block = JSON.parse(data.value);
          }
        })
        .on('error', (err) => {
          console.error(err);
          reject(err);
        })
        .on('close', () => {
          resolve(block);
        });
    });
  }

  //this function gets a block by its address
  getBlockByAddress(address) {
    return new Promise((resolve, reject) => {
      let blocks = [];
      this.db.createReadStream()
        .on('data', (data) => {
          if (JSON.parse(data.value).body.address === address) {
            blocks.push(JSON.parse(data.value));
          }
        })
        .on('error', (err) => {
          console.error(err);
          reject(err);
        })
        .on('close', () => {
          resolve(blocks);
        });
    });
  }
}

module.exports = LevelSandbox;
