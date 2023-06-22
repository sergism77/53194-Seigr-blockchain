'use strict';

class memoryStorageMiner {
    constructor() {
        this.blockchain = new SeigrBlockchain.Blockchain();
        this.blockchainNodeList = new SeigrBlockchain.BlockchainNodeList();
        this.blockchainNodeListManager = new SeigrBlockchain.BlockchainNodeListManager(this.blockchainNodeList);
        this.blockchainNodeListManagerClient = new SeigrBlockchain.BlockchainNodeListManagerClient(this.blockchainNodeListManager);
        this.blockchainNodeListManagerServer = new SeigrBlockchain.BlockchainNodeListManagerServer(this.blockchainNodeListManager);
    }


    toString() {
        return "Memory Storage Miner: \n" +
            "Blockchain: " + this.blockchain + "\n" +
            "Blockchain Node List: " + this.blockchainNodeList + "\n" +
            "Blockchain Node List Manager: " + this.blockchainNodeListManager + "\n" +
            "Blockchain Node List Manager Client: " + this.blockchainNodeListManagerClient + "\n" +
            "Blockchain Node List Manager Server: " + this.blockchainNodeListManagerServer + "\n";
    }


    print() {
        console.log(this.toString());
    }


    printBlockchain() {

        console.log(this.blockchain.toString());
    }


    printBlockchainNodeList() {
        console.log(this.blockchainNodeList.toString());
    }


    printBlockchainNodeListManager() {

        console.log(this.blockchainNodeListManager.toString());
    }


    printBlockchainNodeListManagerClient() {
        console.log(this.blockchainNodeListManagerClient.toString());
    }


    printBlockchainNodeListManagerServer() {
        console.log(this.blockchainNodeListManagerServer.toString());
    }

}

class memoryStorageMinerPool {
    constructor() {
        this.memoryStorageMinerPool = new MemoryStorageMinerPool();
    }


    get(key) {
        return this.memoryStorageMinerPool.get(key);
    }


    set(key, value) {
        this.memoryStorageMinerPool.set(key, value);
    }


    has(key) {
        return this.memoryStorageMinerPool.has(key);
    }


    delete(key) {
        this.memoryStorageMinerPool.delete(key);
    }


    toString() {
        return "Memory Storage Miner Pool: \n" +
            "Memory Storage Miner Pool: " + this.memoryStorageMinerPool + "\n";
    }


    print() {
        console.log(this.toString());
    }


    printMemoryStorageMinerPool() {
        console.log(this.memoryStorageMinerPool.toString());
    }

}

module.exports = {memoryStorageMiner, memoryStorageMinerPool};