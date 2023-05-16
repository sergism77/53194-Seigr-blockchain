//this is the db file for the blockchain

const level = require('level');
const path = require('path');
const { app } = require('electron');
const Block = require('./block.js');




class db {
    constructor() {
        this.chainDB = path.join(app.getPath('userData'), 'chaindata');
        this.db = level(this.chainDB);
    }
    
    addBlock(newBlock) {
        return new Promise((resolve, reject) => {
            this.getBlockHeight().then((height) => {
                if (height === -1) {
                    newBlock.height = 0;
                    newBlock.time = new Date().getTime().toString().slice(0, -3);
                    newBlock.previousBlockHash = '';
                    newBlock.hash = Block.hash(newBlock);
                    this.addLevelDBData(newBlock.height, JSON.stringify(newBlock).toString()).then((result) => {
                        resolve(result);
                    }).catch((err) => {
                        reject(err);


                    });
                } else {
                    this.getBlock(height).then((block) => {
                        newBlock.height = height + 1;
                        newBlock.time = new Date().getTime().toString().slice(0, -3);
                        newBlock.previousBlockHash = block.hash;
                        newBlock.hash = Block.hash(newBlock);
                        this.addLevelDBData(newBlock.height, JSON.stringify(newBlock).toString()).then((result) => {
                            resolve(result);
                        }).catch((err) => {
                            reject(err);
                        });
                    }).catch((err) => {
                        reject(err);


                    });
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getBlockHeight() {
        return new Promise((resolve, reject) => {
            let height = -1;
            this.db.createReadStream()
            .on('data', (data) => {
                height++;
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(height);


            });
        });
    }

    getBlock(blockHeight) {
        return new Promise((resolve, reject) => {
            this.db.get(blockHeight).then((block) => {
                resolve(JSON.parse(block));
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getBlockByHash(hash) {
        let block = null;
        return new Promise((resolve, reject) => {
            this.db.createReadStream()
            .on('data', (data) => {
                if (JSON.parse(data.value).hash === hash) {
                    block = JSON.parse(data.value);
                }
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(block);
            });
        });
    }

    getBlockByWalletAddress(address) {
        let blocks = [];
        return new Promise((resolve, reject) => {
            this.db.createReadStream()
            .on('data', (data) => {
                if (JSON.parse(data.value).body.address === address) {
                    blocks.push(JSON.parse(data.value));
                }
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(blocks);
            });
        });
    }

    addLevelDBData(key, value) {
        return new Promise((resolve, reject) => {
            this.db.put(key, value).then(() => {
                resolve(value);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    getLevelDBData(key) {
        return new Promise((resolve, reject) => {
            this.db.get(key).then((value) => {
                resolve(value);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    addDataToLevelDB(value) {
        return new Promise((resolve, reject) => {
            let i = 0;
            this.db.createReadStream()
            .on('data', (data) => {
                i++;
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                this.addLevelDBData(i, value).then((result) => {
                    resolve(result);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    getBlocksCount() {
        return new Promise((resolve, reject) => {
            let count = 0;
            this.db.createReadStream()
            .on('data', (data) => {
                count++;
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(count);
            });
        });
    }

    getBlocks() {
        let blocks = [];
        return new Promise((resolve, reject) => {
            this.db.createReadStream()
            .on('data', (data) => {
                blocks.push(JSON.parse(data.value));
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(blocks);
            });
        });
    }

    validateBlock(blockHeight) {
        return new Promise((resolve, reject) => {
            this.getBlock(blockHeight).then((block) => {
                let blockHash = block.hash;
                block.hash = '';
                let validBlockHash = Block.hash(block);
                if (blockHash === validBlockHash) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }

    validateChain() {
        let errorLog = [];
        return new Promise((resolve, reject) => {
            this.db.createReadStream()
            .on('data', (data) => {
                let block = JSON.parse(data.value);
                this.validateBlock(block.height).then((result) => {
                    if (!result) {
                        errorLog.push(block.height);
                    }
                }).catch((err) => {
                    reject(err);
                });
                if (block.height > 0) {
                    this.getBlock(block.height - 1).then((previousBlock) => {
                        if (block.previousBlockHash !== previousBlock.hash) {
                            errorLog.push(block.height);
                        }
                    }).catch((err) => {
                        reject(err);
                    });
                }
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                resolve(errorLog);
            });
        });
    }
}

module.exports = db;