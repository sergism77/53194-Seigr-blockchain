const createGenesisWalletPool = ({ genesisWalletPool }) => () => {
    genesisWalletPool = [];
    return genesisWalletPool;
}

const saveGenesisWalletPool = ({ genesisWalletPool }) => () => {
    return genesisWalletPool;
}

const loadGenesisWalletPool = ({ genesisWalletPool }) => () => {
    return genesisWalletPool;
}

module.exports = { createGenesisWalletPool, saveGenesisWalletPool, loadGenesisWalletPool };