
const mineGenesisTransactionPool = ({ genesisTransactionPool }) => () => {
    const genesisTransactionPool = [genesisTransaction];
    return genesisTransactionPool;
}

const mineGenesisBlockchain = ({ genesisBlock }) => () => { 
    const genesisBlockchain = [genesisBlock];
    return genesisBlockchain;
}

const saveGenesisBlockchain = ({ genesisBlockchain }) => () => {
    return genesisBlockchain;
}

const loadGenesisBlockchain = ({ genesisBlockchain }) => () => {
    return genesisBlockchain;
}

module.exports = { mineGenesisTransactionPool, mineGenesisBlockchain, saveGenesisBlockchain, loadGenesisBlockchain };