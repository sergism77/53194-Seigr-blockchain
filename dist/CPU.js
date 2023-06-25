'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = exports.CPUMap = exports.CPU = void 0;
const block_1 = require("./block");
Object.defineProperty(exports, "Block", { enumerable: true, get: function () { return block_1.Block; } });
const utils_1 = require("./utils");
class CPU {
    constructor(blockchain) {
        this.chain = blockchain;
    }
    mineBlock(data) {
        const newBlock = block_1.Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data
        });
        this.chain.push(newBlock);
    }
    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(block_1.Block.genesis())) {
            return false;
        }
        for (let i = 1; i < chain.length; i++) {
            const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];
            const actualLastHash = chain[i - 1].hash;
            if (lastHash !== actualLastHash)
                return false;
            const validatedHash = (0, utils_1.cryptoHash)(timestamp, lastHash, data, nonce, difficulty);
            if (hash !== validatedHash)
                return false;
        }
        return true;
    }
    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
            console.error('The incoming chain must be longer');
            return;
        }
        if (!CPU.isValidChain(chain)) {
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
}
exports.CPU = CPU;
class CPUMap {
    constructor() {
        this.cpus = [];
    }
    addCPU(cpu) {
        this.cpus.push(cpu);
    }
    static isValidCPU(cpu) {
        if (JSON.stringify(cpu[0]) !== JSON.stringify(CPU.genesis())) {
            return false;
        }
        for (let i = 1; i < cpu.length; i++) {
            const { timestamp, lastHash, hash, data, nonce, difficulty } = cpu[i];
            const actualLastHash = cpu[i - 1].hash;
            if (lastHash !== actualLastHash)
                return false;
            const validatedHash = (0, utils_1.cryptoHash)(timestamp, lastHash, data, nonce, difficulty);
            if (hash !== validatedHash)
                return false;
        }
        return true;
    }
}
exports.CPUMap = CPUMap;
