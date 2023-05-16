class GPUMemoryStorage {
  constructor() {
    this._storage = new Map();
  }

  get(key) {
    return this._storage.get(key);
  }

  set(key, value) {
    this._storage.set(key, value);
  }

  delete(key) {
    this._storage.delete(key);
  }

  clear() {
    this._storage.clear();
  }

}

class GPUMemoryStorageMap {
  constructor() {
    this._storage = new Map();
  }

  get(key) {
    return this._storage.get(key);
  }

  set(key, value) {
    this._storage.set(key, value);
  }

  delete(key) {
    this._storage.delete(key);
  }

  clear() {
    this._storage.clear();
  }

}

class GPUMemoryStorageSet {
    constructor() {
        this._storage = new Set();
    }
    
    get(key) {
        return this._storage.has(key);
    }
    
    set(key, value) {
        this._storage.add(key);
    }
    
    delete(key) {
        this._storage.delete(key);
    }
    
    clear() {
        this._storage.clear();
    }

}

module.exports = { GPUMemoryStorage, GPUMemoryStorageMap, GPUMemoryStorageSet };