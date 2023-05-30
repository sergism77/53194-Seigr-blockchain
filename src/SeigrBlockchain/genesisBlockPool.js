const mineGenesisBlockPool = ({ genesisBlock }) => () => {
    const genesisBlockPool = [genesisBlock];
    return genesisBlockPool;
}

const saveGenesisBlockPool = ({ genesisBlockPool }) => () => {
    return genesisBlockPool;
}

const loadGenesisBlockPool = ({ genesisBlockPool }) => () => {
    return genesisBlockPool;
}

module.exports = { mineGenesisBlockPool, saveGenesisBlockPool, loadGenesisBlockPool };