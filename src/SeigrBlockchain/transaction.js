//this is the transaction class

class transaction {
    constructor() {
        this.id = id;
        this.input = input;
        this.outputs = outputs;
    }
}

class transactionPool {
    constructor() {
        this.transactionPool = [];
        this.transactionPoolMap = new TransactionPoolMap();
    }
}

class transactionMiner {
    constructor() {
        this.transactionMiner = [];
        this.transactionMinerMap = new TransactionMinerMap();
    }
}

class transactionMap {
    constructor() {
        this.transactionMap = [];
    }
}

class transactionPoolMap {
    constructor() {
        this.transactionPoolMap = [];
    }
}

class transactionMinerMap {
    constructor() {
        this.transactionMinerMap = [];
    }
}

module.exports = { transaction, transactionPool, transactionMiner, transactionMap, transactionPoolMap, transactionMinerMap };
