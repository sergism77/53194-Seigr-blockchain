const level = require('level');
const path = require('path');
const { app } = require('electron');
const Block = require('./block.js');

class Db {
  constructor() {
    this.chainDB = path.join(app.getPath('userData'), 'chaindata');
    this.db = level(this.chainDB);
  }

  addBlock(newBlock) {
    return new Promise((resolve, reject) => {
      this.getBlockHeight()
        .then((height) => {
          if (height === -1) {
            newBlock.height = 0;
            newBlock.time = new Date().getTime().toString().slice(0, -3);
            newBlock.previousBlockHash = '';
            newBlock.hash = Block.hash(newBlock);
          } else {
            return this.getBlock(height);
          }
        })
        .then((block) => {
          if (block) {
            newBlock.height = block.height + 1;
            newBlock.time = new Date().getTime().toString().slice(0, -3);
            newBlock.previousBlockHash = block.hash;
            newBlock.hash = Block.hash(newBlock);
          }

          return this.addLevelDBData(newBlock.height, JSON.stringify(newBlock));
        })
        .then(() => resolve(newBlock))
        .catch((err) => reject(err));
    });
  }

  getBlockHeight() {
    return new Promise((resolve, reject) => {
      let height = -1;
      this.db.createKeyStream()
        .on('data', () => {
          height++;
        })
        .on('error', (err) => reject(err))
        .on('close', () => resolve(height));
    });
  }

  getBlock(blockHeight) {
    return new Promise((resolve, reject) => {
      this.db.get(blockHeight)
        .then((value) => resolve(JSON.parse(value)))
        .catch((err) => reject(err));
    });
  }

  getBlockByHash(hash) {
    return new Promise((resolve, reject) => {
      this.db.createReadStream()
        .on('data', (data) => {
          const block = JSON.parse(data.value);
          if (block.hash === hash) {
            delete block.body;
            resolve(block);
          }
        })
        .on('error', (err) => reject(err))
        .on('close', () => resolve(null));
    });
  }

  getBlockByWalletAddress(address) {
    const blocks = [];
    return new Promise((resolve, reject) => {
      this.db.createReadStream()
        .on('data', (data) => {
          const block = JSON.parse(data.value);
          if (block.body.address === address) {
            delete block.body;
            blocks.push(block);
          }
        })
        .on('error', (err) => reject(err))
        .on('close', () => resolve(blocks));
    });
  }

  addLevelDBData(key, value) {
    return new Promise((resolve, reject) => {
      this.db.put(key, value)
        .then(() => resolve(value))
        .catch((err) => reject(err));
    });
  }

  getLevelDBData(key) {
    return new Promise((resolve, reject) => {
      this.db.get(key)
        .then((value) => resolve(value))
        .catch((err) => reject(err));
    });
  }

  addDataToLevelDB(value) {
    return new Promise((resolve, reject) => {
      this.db.createKeyStream()
        .on('data', () => {})
        .on('error', (err) => reject(err))
        .on('close', (err) => {
          if (err) {
            reject(err);
          } else {
            this.addLevelDBData(value, value)
              .then((result) => resolve(result))
              .catch((err) => reject(err));
          }
        });
    });
  }

  getBlocksCount() {
    return new Promise((resolve, reject) => {
      let count = 0;
      this.db.createReadStream()
        .on('data', () => {
          count++;
        })
        .on('error', (err) => reject(err))
        .on('close', () => resolve(count));
    });
  }

  getBlocks() {
    const blocks = [];
    return new Promise((resolve, reject) => {
      this.db.createReadStream()
        .on('data', (data) => {
          const block = JSON.parse(data.value);
          delete block.body;
          blocks.push(block);
        })
        .on('error', (err) => reject(err))
        .on('close', () => resolve(blocks));
    });
  }

  validateBlock(blockHeight) {
    return new Promise((resolve, reject) => {
      this.getBlock(blockHeight)
        .then((block) => {
          const blockHash = block.hash;
          block.hash = '';
          const validBlockHash = Block.hash(block);
          block.hash = blockHash;
          resolve(blockHash === validBlockHash);
        })
        .catch((err) => reject(err));
    });
  }

  validateChain() {
    const errorLog = [];
    return new Promise((resolve, reject) => {
      this.db.createReadStream()
        .on('data', (data) => {
          const block = JSON.parse(data.value);
          this.validateBlock(block.height)
            .then((result) => {
              if (!result) {
                errorLog.push(block.height);
              }
            })
            .catch((err) => reject(err));

          if (block.height > 0) {
            this.getBlock(block.height - 1)
              .then((previousBlock) => {
                if (block.previousBlockHash !== previousBlock.hash) {
                  errorLog.push(block.height);
                }
              })
              .catch((err) => reject(err));
          }
        })
        .on('error', (err) => reject(err))
        .on('close', () => resolve(errorLog));
    });
  }
}

module.exports = Db;
