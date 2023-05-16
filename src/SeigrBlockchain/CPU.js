const Block = require('./block');
const cryptoHash = require('./utils');

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
        this.cpu = cpu;
        this.cpuitem = cpuitem;
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

    static genesis() {
        return new this({
        timestamp: 'Genesis time',
        lastHash: '-----',
        hash: 'hash-one',
        data: []
        });
    }

    static cpu() {
        const cpu = new this();
        cpu.cpu = 'cpu';
        return cpu;
    }

    static isValidCPU(cpu) {
        if (!cpu.cpu) {
            return false;
        }
    
        return true;
    }

    static isValidCPU(cpu) {
        if (JSON.stringify(cpu[0]) !== JSON.stringify(CPU.genesis())) {
        return false;
        }

        for (let i = 1; i < cpu.length; i++) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = cpu[i];

        const actualLastHash = cpu[i - 1].hash;

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

    replaceCPU(cpu) {
        if (cpu.length <= this.cpu.length) {
        console.error('The incoming cpu must be longer');
        return;
        }

        if (!CPU.isValidCPU(cpu)) {
        console.error('The incoming cpu must be valid');
        return;
        }

        console.log('replacing cpu with', cpu);
        this.cpu = cpu;
    }

    static genesis() {
        return new this({
        timestamp: 'Genesis time',
        lastHash: '-----',
        hash: 'hash-one',
        data: []
        });
    }

}


class CPUMap {
    constructor() {
        this.cpu = cpu;
        this.cpuitem = cpuitem;
    }

    addCPU({ cpu }) {
        this.cpu.push(cpu);
    }

    static isValidCPU(cpu) {
        if (JSON.stringify(cpu[0]) !== JSON.stringify(CPU.genesis())) {
        return false;
        }

        for (let i = 1; i < cpu.length; i++) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = cpu[i];

        const actualLastHash = cpu[i - 1].hash;

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

    replaceCPU(cpu) {
        if (cpu.length <= this.cpu.length) {
        console.error('The incoming cpu must be longer');
        return;
        }

        if (!CPU.isValidCPU(cpu)) {
        console.error('The incoming cpu must be valid');
        return;
        }

        console.log('replacing cpu with', cpu);
        this.cpu = cpu;
    }

    static genesis() {
        return new this({
        timestamp: 'Genesis time',
        lastHash: '-----',
        hash: 'hash-one',
        data: []
        });
    }

    static cpu() {
        const cpu = new this();
        cpu.cpu = 'cpu';
        return cpu;
    }

    static isValidCPU(cpu) {
        if (!cpu.cpu) {
            return false;
        }
    
        return true;
    }

    static isValidCPU(cpu) {
        if (JSON.stringify(cpu[0]) !== JSON.stringify(CPU.genesis())) {
        return false;
        }

        for (let i = 1; i < cpu.length; i++) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = cpu[i];

        const actualLastHash = cpu[i - 1].hash;

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

    replaceCPU(cpu) {
        if (cpu.length <= this.cpu.length) {
        console.error('The incoming cpu must be longer');
        return;
        }

        if (!CPU.isValidCPU(cpu)) {
        console.error('The incoming cpu must be valid');
        return;
        }

        console.log('replacing cpu with', cpu);
        this.cpu = cpu;
    }
    
}

module.exports = { CPU, CPUMap };