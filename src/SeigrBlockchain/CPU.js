
class CPU {
    constructor() {
        this.blockchain = blockchain;
        this.block = block;
        this.transaction = transaction;
        this.wallet = wallet;
        this.miner = miner;
        this.node = node;
        this.network = network;
        this.peer = peer;
        this.peerlist = peerlist;
        this.peerlistitem = peerlistitem;
    }

    mineBlock({ data }) {
        const newBlock = Block.mineBlock({
        lastBlock: this.chain[this.chain.length - 1],
        data
        });

        this.chain.push(newBlock);
    }

    mineTransaction({ data }) {
        const newTransaction = Transaction.mineTransaction({
        lastTransaction: this.chain[this.chain.length - 1],
        data
        });

        this.chain.push(newTransaction);
    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
        return false;
        }

        for (let i = 1; i < chain.length; i++) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];

        const actualLastHash = chain[i - 1].hash;

        if (lastHash !== actualLastHash) return false;

        const validatedHash = cryptoHash(
            timestamp,
            lastHash,
            data,
            nonce,
            difficulty
        );

        if (hash !== validatedHash) return false;
        }

        return true;
    }

    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
        console.error('The incoming chain must be longer');
        return;
        }

        if (!Blockchain.isValidChain(chain)) {
        console.error('The incoming chain must be valid');
        return;
        }

        console.log('replacing chain with', chain);
        this.chain = chain;
    }
}


class CPUMap {
    constructor() {
        this.cpu = cpu;
        this.cpuitem = cpuitem;
    }
}

module.exports = { CPU, CPUMap };