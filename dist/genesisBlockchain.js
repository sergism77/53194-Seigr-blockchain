'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGenesisBlockchain = exports.saveGenesisBlockchain = exports.mineGenesisBlockchain = exports.mineGenesisTransactionPool = void 0;
let genesisTransactionPool = [];
const mineGenesisTransactionPool = ({ genesisTransaction }) => () => {
    genesisTransactionPool = [genesisTransaction];
    return genesisTransactionPool;
};
exports.mineGenesisTransactionPool = mineGenesisTransactionPool;
let genesisBlockchain = [];
const mineGenesisBlockchain = ({ genesisBlock }) => () => {
    genesisBlockchain = [genesisBlock];
    return genesisBlockchain;
};
exports.mineGenesisBlockchain = mineGenesisBlockchain;
const saveGenesisBlockchain = () => {
    return genesisBlockchain;
};
exports.saveGenesisBlockchain = saveGenesisBlockchain;
const loadGenesisBlockchain = () => {
    return genesisBlockchain;
};
exports.loadGenesisBlockchain = loadGenesisBlockchain;
