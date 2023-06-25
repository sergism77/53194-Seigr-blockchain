'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadGenesisBlockPool = exports.saveGenesisBlockPool = exports.mineGenesisBlockPool = void 0;
const mineGenesisBlockPool = ({ genesisBlock }) => () => {
    const genesisBlockPool = [genesisBlock];
    return genesisBlockPool;
};
exports.mineGenesisBlockPool = mineGenesisBlockPool;
const saveGenesisBlockPool = ({ genesisBlockPool }) => () => {
    return genesisBlockPool;
};
exports.saveGenesisBlockPool = saveGenesisBlockPool;
const loadGenesisBlockPool = ({ genesisBlockPool }) => () => {
    return genesisBlockPool;
};
exports.loadGenesisBlockPool = loadGenesisBlockPool;
