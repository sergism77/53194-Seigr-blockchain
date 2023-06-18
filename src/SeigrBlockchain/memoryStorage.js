const Blockchain = require('./blockchain');
const TransactionPool = require('./transactionPool');
const TransactionPoolMap = require('./transactionPoolMap');
const TransactionMiner = require('./transactionMiner');
const TransactionMinerMap = require('./transactionMinerMap');
const SEIGToken = require('./SEIGToken');
const SEIGTokenPool = require('./SEIGTokenPool');
const SEIGTokenPoolMap = require('./SEIGTokenPoolMap');
const SEIGTokenMiner = require('./SEIGTokenMiner');
const SEIGTokenMinerMap = require('./SEIGTokenMinerMap');

class MemoryStorage {
  constructor() {
    this.blockchain = [];
    this.transactionPool = [];
    this.transactionPoolMap = new TransactionPoolMap();
    this.transactionMiner = [];
    this.transactionMinerMap = new TransactionMinerMap();
    this.SEIGToken = [];
    this.SEIGTokenPool = [];
    this.SEIGTokenPoolMap = new SEIGTokenPoolMap();
    this.SEIGTokenMiner = [];
    this.SEIGTokenMinerMap = new SEIGTokenMinerMap();
  }

  addBlockchain({ blockchain }) {
    this.blockchain.push(blockchain);
  }

  getBlockchain({ name }) {
    return this.blockchain.find((blockchain) => blockchain.name === name);
  }

  replaceBlockchain(blockchain) {
    for (let i = 0; i < this.blockchain.length; i++) {
      if (this.blockchain[i].name === blockchain.name) {
        this.blockchain[i] = blockchain;
      }
    }
  }

  addTransactionPool({ transactionPool }) {
    this.transactionPool.push(transactionPool);
  }

  getTransactionPool({ name }) {
    return this.transactionPool.find((transactionPool) => transactionPool.name === name);
  }

  replaceTransactionPool(transactionPool) {
    for (let i = 0; i < this.transactionPool.length; i++) {
      if (this.transactionPool[i].name === transactionPool.name) {
        this.transactionPool[i] = transactionPool;
      }
    }
  }

  addTransactionPoolMap({ transactionPoolMap }) {
    this.transactionPoolMap.push(transactionPoolMap);
  }

  getTransactionPoolMap({ name }) {
    return this.transactionPoolMap.find((transactionPoolMap) => transactionPoolMap.name === name);
  }

  replaceTransactionPoolMap(transactionPoolMap) {
    for (let i = 0; i < this.transactionPoolMap.length; i++) {
      if (this.transactionPoolMap[i].name === transactionPoolMap.name) {
        this.transactionPoolMap[i] = transactionPoolMap;
      }
    }
  }

  addTransactionMiner({ transactionMiner }) {
    this.transactionMiner.push(transactionMiner);
  }

  getTransactionMiner({ name }) {
    return this.transactionMiner.find((transactionMiner) => transactionMiner.name === name);
  }

  replaceTransactionMiner(transactionMiner) {
    for (let i = 0; i < this.transactionMiner.length; i++) {
      if (this.transactionMiner[i].name === transactionMiner.name) {
        this.transactionMiner[i] = transactionMiner;
      }
    }
  }

  addTransactionMinerMap({ transactionMinerMap }) {
    this.transactionMinerMap.push(transactionMinerMap);
  }

  getTransactionMinerMap({ name }) {
    return this.transactionMinerMap.find((transactionMinerMap) => transactionMinerMap.name === name);
  }

  replaceTransactionMinerMap(transactionMinerMap) {
    for (let i = 0; i < this.transactionMinerMap.length; i++) {
      if (this.transactionMinerMap[i].name === transactionMinerMap.name) {
        this.transactionMinerMap[i] = transactionMinerMap;
      }
    }
  }

  addSEIGToken({ SEIGToken }) {
    this.SEIGToken.push(SEIGToken);
  }

  getSEIGToken({ name }) {
    return this.SEIGToken.find((SEIGToken) => SEIGToken.name === name);
  }

  replaceSEIGToken(SEIGToken) {
    for (let i = 0; i < this.SEIGToken.length; i++) {
      if (this.SEIGToken[i].name === SEIGToken.name) {
        this.SEIGToken[i] = SEIGToken;
      }
    }
  }

  addSEIGTokenPool({ SEIGTokenPool }) {
    this.SEIGTokenPool.push(SEIGTokenPool);
  }

  getSEIGTokenPool({ name }) {
    return this.SEIGTokenPool.find((SEIGTokenPool) => SEIGTokenPool.name === name);
  }

  replaceSEIGTokenPool(SEIGTokenPool) {
    for (let i = 0; i < this.SEIGTokenPool.length; i++) {
      if (this.SEIGTokenPool[i].name === SEIGTokenPool.name) {
        this.SEIGTokenPool[i] = SEIGTokenPool;
      }
    }
  }

  addSEIGTokenPoolMap({ SEIGTokenPoolMap }) {
    this.SEIGTokenPoolMap.push(SEIGTokenPoolMap);
  }

  getSEIGTokenPoolMap({ name }) {
    return this.SEIGTokenPoolMap.find((SEIGTokenPoolMap) => SEIGTokenPoolMap.name === name);
  }

  replaceSEIGTokenPoolMap(SEIGTokenPoolMap) {
    for (let i = 0; i < this.SEIGTokenPoolMap.length; i++) {
      if (this.SEIGTokenPoolMap[i].name === SEIGTokenPoolMap.name) {
        this.SEIGTokenPoolMap[i] = SEIGTokenPoolMap;
      }
    }
  }

  addSEIGTokenMiner({ SEIGTokenMiner }) {
    this.SEIGTokenMiner.push(SEIGTokenMiner);
  }

  getSEIGTokenMiner({ name }) {
    return this.SEIGTokenMiner.find((SEIGTokenMiner) => SEIGTokenMiner.name === name);
  }

  replaceSEIGTokenMiner(SEIGTokenMiner) {
    for (let i = 0; i < this.SEIGTokenMiner.length; i++) {
      if (this.SEIGTokenMiner[i].name === SEIGTokenMiner.name) {
        this.SEIGTokenMiner[i] = SEIGTokenMiner;
      }
    }
  }

  addSEIGTokenMinerMap({ SEIGTokenMinerMap }) {
    this.SEIGTokenMinerMap.push(SEIGTokenMinerMap);
  }
}

class MemoryStorageMap {
  constructor() {
    this.blockchain = [];
    this.transactionPool = [];
    this.transactionPoolMap = [];
    this.transactionMiner = [];
    this.transactionMinerMap = [];
    this.SEIGToken = [];
    this.SEIGTokenMap = [];
    this.SEIGTokenPool = [];
    this.SEIGTokenPoolMap = [];
    this.SEIGTokenMiner = [];
    this.SEIGTokenMinerMap = [];
    this.memoryStorage = [];
    this.memoryStorageMap = [];
  }

  addBlockchain({ blockchain }) {
    this.blockchain.push(blockchain);
  }

  getBlockchain({ name }) {
    return this.blockchain.find((blockchain) => blockchain.name === name);
  }

  replaceBlockchain(blockchain) {
    for (let i = 0; i < this.blockchain.length; i++) {
      if (this.blockchain[i].name === blockchain.name) {
        this.blockchain[i] = blockchain;
      }
    }
  }

  addTransactionPool({ transactionPool }) {
    this.transactionPool.push(transactionPool);
  }

  getTransactionPool({ name }) {
    return this.transactionPool.find((transactionPool) => transactionPool.name === name);
  }

  replaceTransactionPool(transactionPool) {
    for (let i = 0; i < this.transactionPool.length; i++) {
      if (this.transactionPool[i].name === transactionPool.name) {
        this.transactionPool[i] = transactionPool;
      }
    }
  }

  addTransactionPoolMap({ transactionPoolMap }) {
    this.transactionPoolMap.push(transactionPoolMap);
  }

  getTransactionPoolMap({ name }) {
    return this.transactionPoolMap.find((transactionPoolMap) => transactionPoolMap.name === name);
  }

  replaceTransactionPoolMap(transactionPoolMap) {
    for (let i = 0; i < this.transactionPoolMap.length; i++) {
      if (this.transactionPoolMap[i].name === transactionPoolMap.name) {
        this.transactionPoolMap[i] = transactionPoolMap;
      }
    }
  }

  addTransactionMiner({ transactionMiner }) {
    this.transactionMiner.push(transactionMiner);
  }

  getTransactionMiner({ name }) {
    return this.transactionMiner.find((transactionMiner) => transactionMiner.name === name);
  }

  replaceTransactionMiner(transactionMiner) {
    for (let i = 0; i < this.transactionMiner.length; i++) {
      if (this.transactionMiner[i].name === transactionMiner.name) {
        this.transactionMiner[i] = transactionMiner;
      }
    }
  }

  addTransactionMinerMap({ transactionMinerMap }) {
    this.transactionMinerMap.push(transactionMinerMap);
  }

  getTransactionMinerMap({ name }) {
    return this.transactionMinerMap.find((transactionMinerMap) => transactionMinerMap.name === name);
  }

  replaceTransactionMinerMap(transactionMinerMap) {
    for (let i = 0; i < this.transactionMinerMap.length; i++) {
      if (this.transactionMinerMap[i].name === transactionMinerMap.name) {
        this.transactionMinerMap[i] = transactionMinerMap;
      }
    }
  }

  addSEIGToken({ SEIGToken }) {
    this.SEIGToken.push(SEIGToken);
  }

  getSEIGToken({ name }) {
    return this.SEIGToken.find((SEIGToken) => SEIGToken.name === name);
  }

  replaceSEIGToken(SEIGToken) {
    for (let i = 0; i < this.SEIGToken.length; i++) {
      if (this.SEIGToken[i].name === SEIGToken.name) {
        this.SEIGToken[i] = SEIGToken;
      }
    }
  }

  addSEIGTokenMap({ SEIGTokenMap }) {
    this.SEIGTokenMap.push(SEIGTokenMap);
  }

  getSEIGTokenMap({ name }) {
    return this.SEIGTokenMap.find((SEIGTokenMap) => SEIGTokenMap.name === name);
  }

  replaceSEIGTokenMap(SEIGTokenMap) {
    for (let i = 0; i < this.SEIGTokenMap.length; i++) {
      if (this.SEIGTokenMap[i].name === SEIGTokenMap.name) {
        this.SEIGTokenMap[i] = SEIGTokenMap;
      }
    }
  }

  addSEIGTokenPool({ SEIGTokenPool }) {
    this.SEIGTokenPool.push(SEIGTokenPool);
  }

  getSEIGTokenPool({ name }) {
    return this.SEIGTokenPool.find((SEIGTokenPool) => SEIGTokenPool.name === name);
  }

  replaceSEIGTokenPool(SEIGTokenPool) {
    for (let i = 0; i < this.SEIGTokenPool.length; i++) {
      if (this.SEIGTokenPool[i].name === SEIGTokenPool.name) {
        this.SEIGTokenPool[i] = SEIGTokenPool;
      }
    }
  }

  addSEIGTokenPoolMap({ SEIGTokenPoolMap }) {
    this.SEIGTokenPoolMap.push(SEIGTokenPoolMap);
  }

  getSEIGTokenPoolMap({ name }) {
    return this.SEIGTokenPoolMap.find((SEIGTokenPoolMap) => SEIGTokenPoolMap.name === name);
  }

  replaceSEIGTokenPoolMap(SEIGTokenPoolMap) {
    for (let i = 0; i < this.SEIGTokenPoolMap.length; i++) {
      if (this.SEIGTokenPoolMap[i].name === SEIGTokenPoolMap.name) {
        this.SEIGTokenPoolMap[i] = SEIGTokenPoolMap;
      }
    }
  }

  addSEIGTokenMiner({ SEIGTokenMiner }) {
    this.SEIGTokenMiner.push(SEIGTokenMiner);
  }

  getSEIGTokenMiner({ name }) {
    return this.SEIGTokenMiner.find((SEIGTokenMiner) => SEIGTokenMiner.name === name);
  }

  replaceSEIGTokenMiner(SEIGTokenMiner) {
    for (let i = 0; i < this.SEIGTokenMiner.length; i++) {
      if (this.SEIGTokenMiner[i].name === SEIGTokenMiner.name) {
        this.SEIGTokenMiner[i] = SEIGTokenMiner;
      }
    }
  }

  addSEIGTokenMinerMap({ SEIGTokenMinerMap }) {
    this.SEIGTokenMinerMap.push(SEIGTokenMinerMap);
  }

  getSEIGTokenMinerMap({ name }) {
    return this.SEIGTokenMinerMap.find((SEIGTokenMinerMap) => SEIGTokenMinerMap.name === name);
  }

  replaceSEIGTokenMinerMap(SEIGTokenMinerMap) {
    for (let i = 0; i < this.SEIGTokenMinerMap.length; i++) {
      if (this.SEIGTokenMinerMap[i].name === SEIGTokenMinerMap.name) {
        this.SEIGTokenMinerMap[i] = SEIGTokenMinerMap;
      }
    }
  }
}

module.exports = { MemoryStorage, MemoryStorageMap };
