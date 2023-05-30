
const createWalletPool = ({ walletPool }) => () => {
    walletPool = [];
    return walletPool;
}

const walletPool = ({ walletPool }) => () => {
    return walletPool;
}

const saveWalletPool = ({ walletPool }) => () => {
    return walletPool;
}

const loadWalletPool = ({ walletPool }) => () => {
    return walletPool;
}

module.exports = { createWalletPool, walletPool, saveWalletPool, loadWalletPool };