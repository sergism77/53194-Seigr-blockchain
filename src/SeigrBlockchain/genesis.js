const BigInt = require('big-integer');

const GENESIS_DATA = {
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

module.exports = { GENESIS_DATA };
