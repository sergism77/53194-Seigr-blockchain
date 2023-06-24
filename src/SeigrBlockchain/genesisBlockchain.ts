'use strict';

let genesisTransactionPool: any[] = [];

const mineGenesisTransactionPool = ({ genesisTransaction }: { genesisTransaction: any }) => () => {
    genesisTransactionPool = [genesisTransaction];
    return genesisTransactionPool;
}

let genesisBlockchain: any[] = [];

const mineGenesisBlockchain = ({ genesisBlock }: { genesisBlock: any }) => () => { 
    genesisBlockchain = [genesisBlock];
    return genesisBlockchain;
}

const saveGenesisBlockchain = () => {
    return genesisBlockchain;
}

const loadGenesisBlockchain = () => {
    return genesisBlockchain;
}

export { mineGenesisTransactionPool, mineGenesisBlockchain, saveGenesisBlockchain, loadGenesisBlockchain };