class FPGAMemoryStorage {
    constructor() {
        this._storage = new Uint8Array(0x1000000);
    }

    read(address, size) {
        return this._storage.slice(address, address + size);
    }

    write(address, data) {
        this._storage.set(data, address);
    }
}

class FPGAMemoryStorageMap {
    constructor() {
        this._storage = new Map();
    }

    read(address, size) {
        return this._storage.get(address);
    }

    write(address, data) {
        this._storage.set(address, data);
    }
}

class FPGAMemoryStorageSet {
    constructor() {
        this._storage = new Set();
    }

    read(address, size) {
        return this._storage.has(address);
    }

    write(address, data) {
        this._storage.add(address);
    }
}

class FPGAMemoryStorageArray {
    constructor() {
        this._storage = [];
    }

    read(address, size) {
        return this._storage[address];
    }

    write(address, data) {
        this._storage[address] = data;
    }
}

class FPGAMemoryStorageMap {
    constructor() {
        this._storage = new Map();
    }

    read(address, size) {
        return this._storage.get(address);
    }

    write(address, data) {
        this._storage.set(address, data);
    }
}

module.exports = { FPGAMemoryStorage, FPGAMemoryStorageMap, FPGAMemoryStorageSet, FPGAMemoryStorageArray, FPGAMemoryStorageMap };