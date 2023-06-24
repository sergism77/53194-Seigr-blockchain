const level = require('level');
const JSONStream = require('JSONStream');
const path = require('path');
const { app } = require('electron').remote;

class LevelSandbox {
  constructor() {
    this.dbLocation = path.join(app.getPath('userData'), 'chaindata');
    this.db = level(this.dbLocation);
  }

  async getBlocksByAddress(address) {
    const blocks = [];

    // Parse all values first to avoid repeating parsing in iteration
    const stream = this.db.createReadStream();
    const parser = JSONStream.parse('*');
    stream.pipe(parser);

    // Iterate over parsed array to filter by 'address'
    for await (const block of parser) {
      if (block.body.address === address) {
        blocks.push(block);
      }
    }

    return blocks;
  }

  async addBlock(block) {
    return new Promise((resolve, reject) => {
      this.getBlockHeight().then((height) => {
        block.height = height + 1;
        this.db.put(block.height, JSON.stringify(block), (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(`Added block #${block.height}`);
          }
        });
      }).catch((err) => {
        console.error(err);
        reject(err);
      });
    });
  }

  async removeBlockFromDB(key) {
    return new Promise((resolve, reject) => {
      this.db.del(key, (err) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(`Deleted block with key ${key}`);
        }
      });
    });
  }

  async removeBlockFromChaindata(block) {
    // Remove block from chaindata
    const index = this.chaindata.indexOf(block);
    if (index !== -1) {
      this.chaindata.splice(index, 1);
    }
  }

  async getBlockHeight() {
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
}

module.exports = LevelSandbox;
