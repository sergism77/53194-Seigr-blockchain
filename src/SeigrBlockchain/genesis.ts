'use strict';

import BigInt from 'big-integer';

interface NativeToken {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: BigInt.BigInteger;
  maxSupply: BigInt.BigInteger;
  burnable: boolean;
  mintable: boolean;
  owner: string;
}

interface Milestones {
  [key: string]: number;
}

interface GenesisData {
  chainId: number;
  nativeToken: NativeToken;
  timestamp: number;
  epoch: number;
  blockTime: number;
  requestTime: number;
  hybrid: boolean;
  difficulty: number;
  reward: number;
  gasless: boolean;
  maxBlockSize: number;
  maxTransactionSize: number;
  maxTransactionFee: number;
  milestones: Milestones;
  coinbaseAddress: string;
  index: number;
  previousHash: string;
  lastHash: string;
  hash: string;
  data: any;
  nonce: number;
  transactions: any[];
  miner: string;
  id: string;
}

const GENESIS_DATA: GenesisData = {
  chainId: 53194,

  nativeToken: {
    name: 'Seig',
    symbol: 'SEIG',
    decimals: 18,
    totalSupply: BigInt(0),
    maxSupply: BigInt(0),
    burnable: true,
    mintable: true,
    owner: 'genesisWallet.publicKey',
  },

  timestamp: 0,

  epoch: 53194,

  blockTime: 6,

  requestTime: 3,

  hybrid: true,

  difficulty: 1,

  reward: 0.005,

  gasless: true,

  maxBlockSize: 5319400,

  maxTransactionSize: 53194,

  maxTransactionFee: 0.000053194,

  milestones: {
    Bispedalen: 53194,
    Bjønndalen: 106388,
  },

  coinbaseAddress: 'genesisWallet.publicKey',
};

export { GENESIS_DATA };