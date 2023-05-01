//this is the db file for the blockchain

function db () {
    const chainDB = path.join(app.getPath('userData'), 'chaindata');
    const db = level(chainDB);

    function addLevelDBData(key, value) {
        return new Promise((resolve, reject) => {
            db.put(key, value, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`Added block #${key}`);
            });
        });
    }

    function getLevelDBData(key) {
        return new Promise((resolve, reject) => {
            db.get(key, (err, value) => {
            if (err) {
                reject(err);
            }
            resolve(value);
            });
        });
    }

    function addDataToLevelDB(value) {
        return new Promise((resolve, reject) => {
            let i = 0;
            db.createReadStream()
            .on('data', (data) => {
                i++;
            })
            .on('error', (err) => {
                reject(err);
            })
            .on('close', () => {
                addLevelDBData(i, value).then((result) => {
                    resolve(result);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    function getBlockHeight() {
        return new Promise((resolve, reject) => {
            let height = -1;
            db.createReadStream()
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

    function getBlock(key) {
        return new Promise((resolve, reject) => {
            db.get(key, (err, value) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(value));
            });
        });
    }

    function getBlockByHash(hash) {
        return new Promise((resolve, reject) => {
            let block = null;
            db.createReadStream()
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

    function getBlocksByAddress
    (address) {
        return new Promise((resolve, reject) => {
            let blocks = [];
            db.createReadStream()
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

}

module.exports = db;