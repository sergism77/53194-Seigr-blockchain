'use strict';

import cryptoHash from './utils';

class CPU {
  timestamp: number;
  lastHash: string;
  hash: string;
  data: any;
  nonce: number;
  difficulty: number;

  constructor(timestamp: number, lastHash: string, hash: string, data: any, nonce: number, difficulty: number) {
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
  _storage: Map<string, any>;

  constructor() {
    this._storage = new Map();
  }

  get(key: string) {
    return this._storage.get(key);
  }

  set(key: string, value: any) {
    this._storage.set(key, value);
  }

  addCPU(cpu: CPU) {
    this._storage.set(cpu.name, cpu);
  }

  getCPU(name: string) {
    return this._storage.get(name);
  }

  clear() {
    this._storage.clear();
  }

  replaceCPU(cpu: CPU[]) {
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

  static isValidCPU(cpu: CPU[]) {
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
  map: Map<string, any>;

  constructor() {
    this.map = new Map();
  }

  addCPU(cpu: CPU) {
    this.map.set(cpu.name, cpu);
  }

  getCPU(name: string) {
    return this.map.get(name);
  }

  clear() {
    this.map.clear();
  }

  replaceCPU(cpu: CPU[]) {
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

  static isValidCPU(cpu: CPU[]) {
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
  static instance: CPUMemoryStorageSingleton;
  cpu: CPU[];

  constructor() {
    if (!CPUMemoryStorageSingleton.instance) {
      CPUMemoryStorageSingleton.instance = new CPUMemoryStorage();
    }
  }

  getInstance() {
    return CPUMemoryStorageSingleton.instance;
  }

  set(key: string, value: any) {
    this.getInstance().set(key, value);
  }

  get(key: string) {
    return this.getInstance().get(key);
  }

  clear() {
    this.getInstance().clear();
  }

  addCPU(cpu: CPU) {
    this.getInstance().addCPU(cpu);
  }

  getCPU(name: string) {
    return this.getInstance().getCPU(name);
  }

  replaceCPU(cpu: CPU[]) {
    this.getInstance().replaceCPU(cpu);
  }

  static isValidCPU(cpu: CPU[]) {
    return this.getInstance().isValidCPU(cpu);
  }
}

export {
  CPUMemoryStorage,
  CPUMemoryStorageMap,
  CPUMemoryStorageSingleton,
};