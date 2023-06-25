'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPUMemoryStorageSingleton = exports.CPUMemoryStorageMap = exports.CPUMemoryStorage = void 0;
const utils_1 = __importDefault(require("./utils"));
class CPU {
    constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
    static genesis() {
        return new this(0, '', '', [], 0, 0);
    }
}
class CPUMemoryStorage {
    constructor() {
        this._storage = new Map();
    }
    get(key) {
        return this._storage.get(key);
    }
    set(key, value) {
        this._storage.set(key, value);
    }
    addCPU(cpu) {
        this._storage.set(cpu.name, cpu);
    }
    getCPU(name) {
        return this._storage.get(name);
    }
    clear() {
        this._storage.clear();
    }
    replaceCPU(cpu) {
        if (cpu.length <= this._storage.size) {
            console.error('The incoming cpu must be longer');
            return;
        }
        if (!CPUMemoryStorage.isValidCPU(cpu)) {
            console.error('The incoming cpu must be valid');
            return;
        }
        console.log('replacing cpu with', cpu);
        this.cpu = cpu;
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
            const validatedHash = (0, utils_1.default)(timestamp, lastHash, data, nonce, difficulty);
            if (hash !== validatedHash)
                return false;
        }
        return true;
    }
}
exports.CPUMemoryStorage = CPUMemoryStorage;
class CPUMemoryStorageMap {
    constructor() {
        this.map = new Map();
    }
    addCPU(cpu) {
        this.map.set(cpu.name, cpu);
    }
    getCPU(name) {
        return this.map.get(name);
    }
    clear() {
        this.map.clear();
    }
    replaceCPU(cpu) {
        if (cpu.length <= this.map.size) {
            console.error('The incoming cpu must be longer');
            return;
        }
        if (!CPUMemoryStorageMap.isValidCPU(cpu)) {
            console.error('The incoming cpu must be valid');
            return;
        }
        console.log('replacing cpu with', cpu);
        this.cpu = cpu;
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
            const validatedHash = (0, utils_1.default)(timestamp, lastHash, data, nonce, difficulty);
            if (hash !== validatedHash)
                return false;
        }
        return true;
    }
}
exports.CPUMemoryStorageMap = CPUMemoryStorageMap;
class CPUMemoryStorageSingleton {
    constructor() {
        if (!CPUMemoryStorageSingleton.instance) {
            CPUMemoryStorageSingleton.instance = new CPUMemoryStorage();
        }
    }
    getInstance() {
        return CPUMemoryStorageSingleton.instance;
    }
    set(key, value) {
        this.getInstance().set(key, value);
    }
    get(key) {
        return this.getInstance().get(key);
    }
    clear() {
        this.getInstance().clear();
    }
    addCPU(cpu) {
        this.getInstance().addCPU(cpu);
    }
    getCPU(name) {
        return this.getInstance().getCPU(name);
    }
    replaceCPU(cpu) {
        this.getInstance().replaceCPU(cpu);
    }
    static isValidCPU(cpu) {
        return this.getInstance().isValidCPU(cpu);
    }
}
exports.CPUMemoryStorageSingleton = CPUMemoryStorageSingleton;
