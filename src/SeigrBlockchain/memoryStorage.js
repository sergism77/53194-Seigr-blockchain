//this is the memory storage for the blockchain

class MemoryStorage {
    constructor() {
        this.blockchain = [];
        this.transactionPool = [];
        this.transactionPoolMap = new TransactionPoolMap();
        this.transactionMiner = [];
        this.transactionMinerMap = new TransactionMinerMap();
        this.SEIGToken = [];
        this.SEIGTokenMap = new SEIGTokenMap();
        this.SEIGTokenPool = [];
        this.SEIGTokenPoolMap = new SEIGTokenPoolMap();
        this.SEIGTokenMiner = [];
        this.SEIGTokenMinerMap = new SEIGTokenMinerMap();
        this.memoryStorage = [];
        this.memoryStorageMap = new MemoryStorageMap();
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
}

module.exports = { MemoryStorage, MemoryStorageMap };