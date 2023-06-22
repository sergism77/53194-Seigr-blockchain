'use strict';

let genesisTransactionPool = [];

const mineGenesisTransactionPool = ({ genesisTransaction }) => () => {
    genesisTransactionPool = [genesisTransaction];
    return genesisTransactionPool;
}

let genesisBlockchain = [];

const mineGenesisBlockchain = ({ genesisBlock }) => () => { 
    genesisBlockchain = [genesisBlock];
    return genesisBlockchain;
}

const saveGenesisBlockchain = () => {
    return genesisBlockchain;
}

const loadGenesisBlockchain = () => {
    return genesisBlockchain;
}

module.exports = { mineGenesisTransactionPool, mineGenesisBlockchain, saveGenesisBlockchain, loadGenesisBlockchain };
