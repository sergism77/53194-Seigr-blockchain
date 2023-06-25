"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStoragePool = void 0;
class MemoryStoragePool {
    constructor() {
        this.storagePool = {};
    }
    get(key) {
        return this.storagePool[key];
    }
    set(key, value) {
        this.storagePool[key] = value;
        return true;
    }
    delete(key) {
        delete this.storagePool[key];
        return true;
    }
    toString() {
        return 'Memory Storage Pool: \n' + 'Storage Pool: ' + this.storagePool + '\n';
    }
    print() {
        console.log(this.toString());
    }
}
class MemoryStoragePoolWrapper {
    constructor() {
        this.memoryStoragePool = new MemoryStoragePool();
    }
    get(key) {
        return this.memoryStoragePool.get(key);
    }
    set(key, value) {
        return this.memoryStoragePool.set(key, value);
    }
    delete(key) {
        return this.memoryStoragePool.delete(key);
    }
    toString() {
        return ('Memory Storage Pool: \n' +
            'Memory Storage Pool: ' +
            this.memoryStoragePool +
            '\n');
    }
    print() {
        console.log(this.toString());
    }
}
exports.MemoryStoragePool = MemoryStoragePoolWrapper;
