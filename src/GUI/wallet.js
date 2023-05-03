//this is the wallet.js that will be loaded when user clicks on the wallet menu

const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const seigrBlockchainDir = path.join(__dirname, '..', '..', 'seigr-blockchain');
const seigrConfFile = path.join(seigrBlockchainDir, 'seigr.conf');
const homedir = require('os').homedir();
const seigrWalletDir = path.join(homedir, 'SeigrWallet');
const seigrWalletConfFile = path.join(seigrWalletDir, 'seigr.conf');
const seigrWalletDataDir = path.join(seigrWalletDir, 'data');
const seigrWalletDataFile = path.join(seigrWalletDataDir, 'wallet.dat');
const seigrWalletTxDir = path.join(seigrWalletDir, 'tx');
const seigrWalletTxFile = path.join(seigrWalletTxDir, 'tx.dat');
const seigrWalletAddrDir = path.join(seigrWalletDir, 'addr');
const seigrWalletAddrFile = path.join(seigrWalletAddrDir, 'addr.dat');
const seigrWalletTxIndexDir = path.join(seigrWalletDir, 'txindex');
const seigrWalletTxIndexFile = path.join(seigrWalletTxIndexDir, 'txindex.dat');
const seigrWalletBlkIndexDir = path.join(seigrWalletDir, 'blkindex');
const seigrWalletBlkIndexFile = path.join(seigrWalletBlkIndexDir, 'blkindex.dat');
const seigrWalletBlkDir = path.join(seigrWalletDir, 'blk');
const seigrWalletBlkFile = path.join(seigrWalletBlkDir, 'blk.dat');

//we need to check if the user already has a wallet or not. If the user doesn't have a wallet yet, we will create one and store it in the wallet directory. If the user already owns one or more wallets, we will ask the password to unlock it
//we will check if the wallet directory exists inside the SeigrBlockchain folder, if not we will create it
if (!fs.existsSync(seigrWalletDir)) {
    fs.mkdirSync(seigrWalletDir);
}

//we will check if there are wallets saved in the wallet directory, if not we will create one in interactive mode
    //we will create the wallet in interactive mode. We will create a wallet and ask the user to add a password for this wallet. We will create a wallet.dat file in the wallet directory and store the wallet in it. We will show the generated passphrase and private key. The wallet will be encrypted with the password the user chose. If they loose the password they will be able to recover the wallet with the passphrase or the private key. 
    //We will also show the public key and the address of the wallet. All the wallet's info will be encripted and saved in the wallet directory so the app will be able to load the wallet when the user opens the app. The user will be able to create as many wallets as they want. They will be able to choose which wallet they want to use when they open the app.

//is there a .json file in the wallet directory containing a wallet?
if (fs.existsSync(seigrWalletConfFile)) {
    //if there is a wallet, we will ask the user to enter the password to unlock it
    ipcRenderer.send('unlock-wallet');
    ipcRenderer.on('unlock-wallet', (event, arg) => {
        //we will check if the password is correct
        const seigrWalletConf = JSON.parse(fs.readFileSync(seigrWalletConfFile));
        if (arg === seigrWalletConf.password) {
            //we will load the wallet
            //we will send the wallet to the main process
            const seigrWallet = JSON.parse(fs.readFileSync(seigrWalletDataFile));
            ipcRenderer.send('wallet', seigrWallet);
            //we will render the wallet page
            ipcRenderer.send('render-page', 'src/GUI/wallet.html');
        } else {
            //we will show an error message
            ipcRenderer.send('error-message', 'Wrong password');
        }
    });
}

else {
    ipcRenderer.send('create-wallet');
    ipcRenderer.on('create-wallet', (event, arg) => {
        ipcRenderer.send('wallet', arg);
        ipcRenderer.send('render-page', 'src/GUI/wallet.html');
    });
}