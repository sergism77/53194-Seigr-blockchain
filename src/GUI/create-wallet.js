
const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const homedir = require('os').homedir();
const WalletDir = path.join(homedir, 'Wallet');
const ipcRenderer = require('electron').ipcRenderer;
const web3 = require('web3');


const createWallet = () => {
    const wallet = web3.eth.accounts.create();
    const password = ipcRenderer.sendSync('get-password')
    const keystore = wallet.encrypt(password);
    const walletFile = path.join(WalletDir, `${wallet.address}.json`);
    fs.writeFileSync(walletFile, JSON.stringify(keystore));
    ipcRenderer.send('wallet', wallet);
    ipcRenderer.send('render-page', 'src/GUI/wallet.html');
}

module.exports = createWallet;