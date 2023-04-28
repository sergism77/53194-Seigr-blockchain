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
}

class CPUMemoryStorageMap {
    constructor() {
        this.map = new Map();
    }

    addGPU({ gpu }) {
        this.map.set(gpu.name, gpu);
    }

    getGPU({ name }) {
        return this.map.get(name);
    }

    clear() {
        this.map.clear();
    }
}

class CPUMemoryStorageSingleton {
    constructor() {
        if (!CPUMemoryStorageSingleton.instance) {
            CPUMemoryStorageSingleton.instance = new CPUMemoryStorage();
        }
    }

    getInstance() {
        return CPUMemoryStorageSingleton.instance;
    }
}

module.exports = { CPUMemoryStorage, CPUMemoryStorageMap, CPUMemoryStorageSingleton };