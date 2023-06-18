const cryptoHash = require('./utils');

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
    if (cpu.length <= this.cpu.length) {
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
}

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
    if (cpu.length <= this.cpu.length) {
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

module.exports = {
  CPUMemoryStorage,
  CPUMemoryStorageMap,
  CPUMemoryStorageSingleton,
};
