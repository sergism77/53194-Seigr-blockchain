'use strict';

import { Block, BlockData } from './block';
import { CryptoHash } from './utils';
import Wallet from './wallet';
import { Transaction } from './transaction';

export class CPU {
  chain: Block[];

  constructor(blockchain: Block[]) {
    this.chain = blockchain;
  }

  mineBlock(data: Transaction[], walletAddress: Wallet) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
      wallet: walletAddress, // Use the provided walletAddress directly
    });

    this.chain.push(newBlock);
  }

  static isValidChain(chain: Block[]): boolean {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];

      if (!Block.isValidBlock(block, lastBlock)) return false;
      if (block.lastHash !== lastBlock.hash) return false;
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

    console.log('Replacing chain with', chain);
    this.chain = chain;
  }

  static genesis(): Block {
    return Block.genesis();
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
}
