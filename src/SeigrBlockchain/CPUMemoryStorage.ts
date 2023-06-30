'use strict';

import { CryptoHash } from './utils';

interface CPUData {
  name: string;
  manufacturer: string;
  brand: string;
  vendor: string;
  family: string;
  model: string;
  stepping: string;
  revision: string;
  voltage: string;
  speed: string;
  speedmin: string;
  speedmax: string;
  governor: string;
  cores: number;
  physicalCores: number;
  processors: number;
  socket: string;
  cache: {
    l1d: number;
    l1i: number;
    l2: number;
    l3: number;
  };
}

class CPU {
  timestamp: number;
  lastHash: string;
  hash: string;
  data: CPUData;
  nonce: number;
  difficulty: number;

  constructor(
    timestamp: number,
    lastHash: string,
    hash: string,
    data: CPUData,
    nonce: number,
    difficulty: number
  ) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  static genesis(): CPU {
    return new this(0, '', '', {} as CPUData, 0, 0);
  }
}

class CPUMemoryStorage {
  private _storage: Map<string, CPU>;

  constructor() {
    this._storage = new Map();
  }

  get(key: string): CPU | undefined {
    return this._storage.get(key);
  }

  set(key: string, value: CPU) {
    this._storage.set(key, value);
  }

  addCPU(cpu: CPU) {
    this._storage.set(cpu.data.name, cpu);
  }

  getCPU(name: string): CPU | undefined {
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
    this._storage.clear();
    cpu.forEach((cpuItem) => {
      this._storage.set(cpuItem.data.name, cpuItem);
    });
  }

  static isValidCPU(cpu: CPU[]): boolean {
    if (JSON.stringify(cpu[0]) !== JSON.stringify(CPU.genesis())) {
      return false;
    }

    for (let i = 1; i < cpu.length; i++) {
      const {
        timestamp,
        lastHash,
        hash,
        data,
        nonce,
        difficulty,
      } = cpu[i];

      const actualLastHash = cpu[i - 1].hash;

      if (lastHash !== actualLastHash) return false;

      const validatedHash = CryptoHash(
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
  private map: Map<string, CPU>;

  constructor() {
    this.map = new Map();
  }

  addCPU(cpu: CPU) {
    this.map.set(cpu.data.name, cpu);
  }

  getCPU(name: string): CPU | undefined {
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
    this.map.clear();
    cpu.forEach((cpuItem) => {
      this.map.set(cpuItem.data.name, cpuItem);
    });
  }

  static isValidCPU(cpu: CPU[]): boolean {
    if (JSON.stringify(cpu[0]) !== JSON.stringify(CPU.genesis())) {
      return false;
    }

    for (let i = 1; i < cpu.length; i++) {
      const {
        timestamp,
        lastHash,
        hash,
        data,
        nonce,
        difficulty,
      } = cpu[i];

      const actualLastHash = cpu[i - 1].hash;

      if (lastHash !== actualLastHash) return false;

      const validatedHash = CryptoHash(
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
  private static instance: CPUMemoryStorageSingleton;
  private cpu: CPU[];

  private constructor() {
    this.cpu = [];
  }

  static getInstance(): CPUMemoryStorageSingleton {
    if (!CPUMemoryStorageSingleton.instance) {
      CPUMemoryStorageSingleton.instance = new CPUMemoryStorageSingleton();
    }
    return CPUMemoryStorageSingleton.instance;
  }

  set(key: string, value: any) {
    CPUMemoryStorageSingleton.getInstance().set(key, value);
  }

  get(key: string): any {
    return CPUMemoryStorageSingleton.getInstance().get(key);
  }

  clear() {
    CPUMemoryStorageSingleton.getInstance().clear();
  }

  addCPU(cpu: CPU) {
    CPUMemoryStorageSingleton.getInstance().addCPU(cpu);
  }

  getCPU(name: string): CPU | undefined {
    return CPUMemoryStorageSingleton.getInstance().getCPU(name);
  }

  replaceCPU(cpu: CPU[]) {
    CPUMemoryStorageSingleton.getInstance().replaceCPU(cpu);
  }

  static isValidCPU(cpu: CPU[]): boolean {
    return CPUMemoryStorageSingleton.isValidCPU(cpu);
  }
}

export {
  CPUMemoryStorage,
  CPUMemoryStorageMap,
  CPUMemoryStorageSingleton,
};
