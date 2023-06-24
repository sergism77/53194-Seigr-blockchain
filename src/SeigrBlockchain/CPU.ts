'use strict';

import { Block } from './block';
import { cryptoHash } from './utils';

export class CPU {
  chain: Block[];

  constructor(blockchain: Block[]) {
    this.chain = blockchain;
  }

  mineBlock(data: any) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data
    });

    this.chain.push(newBlock);
  }

  static isValidChain(chain: Block[]): boolean {
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

  replaceChain(chain: Block[]) {
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

  static genesis(): CPU {
    return new this({
      timestamp: 'Genesis time',
      lastHash: '-----',
      hash: 'hash-one',
      data: []
    });
  }
}

export class CPUMap {
  cpus: CPU[];

  constructor() {
    this.cpus = [];
  }

  addCPU(cpu: CPU) {
    this.cpus.push(cpu);
  }

  static isValidCPU(cpu: CPU[]): boolean {
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

export {
  Block,
};