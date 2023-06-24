'use strict';

interface GenesisBlockPool {
  genesisBlock: any;
}

const mineGenesisBlockPool = ({ genesisBlock }: GenesisBlockPool) => () => {
  const genesisBlockPool: any[] = [genesisBlock];
  return genesisBlockPool;
};

interface SaveGenesisBlockPool {
  genesisBlockPool: any[];
}

const saveGenesisBlockPool = ({ genesisBlockPool }: SaveGenesisBlockPool) => () => {
  return genesisBlockPool;
};

const loadGenesisBlockPool = ({ genesisBlockPool }: SaveGenesisBlockPool) => () => {
  return genesisBlockPool;
};

export { mineGenesisBlockPool, saveGenesisBlockPool, loadGenesisBlockPool };