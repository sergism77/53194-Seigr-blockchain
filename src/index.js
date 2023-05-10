const electron = require('electron');
const { app, BrowserWindow, Menu, MenuItem } = electron;
const path = require('path');
const fs = require('fs');
const homedir = require('os').homedir();
const seigrBlockchainDir = path.join(homedir, 'SeigrBlockchain');
const url = require('url')


console.log(seigrBlockchainDir);
if (!fs.existsSync(seigrBlockchainDir)) {
    fs.mkdirSync(seigrBlockchainDir);

    const seigrConfFile = path.join(seigrBlockchainDir, 'seigr.conf');
    console.log(seigrConfFile);

    fs.writeFileSync(seigrConfFile, 'rpcuser=seigr\nrpcpassword=seigr\nrpcport=3001\nport=53194\ndaemon=1\nserver=1\nlisten=1\ntxindex=1\nmaxconnections=256');

    const seigrDatabaseDir = path.join(seigrBlockchainDir, 'database');

    fs.mkdirSync(seigrDatabaseDir);
    
    const seigrWalletsDir = path.join(seigrBlockchainDir, 'wallets');

    fs.mkdirSync(seigrWalletsDir);
}

const { exec } = require('child_process');
exec('node src/SeigrBlockchain/p2pServer', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
}
);

exec('node src/SeigrBlockchain/p2pClient', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
}
);



// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
  }
  
  
  
let win

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600})
    win.loadFile('src/index.html')
 }

 const template = [
        {
            label: 'Wallet',
        submenu: [
                {label: 'Wallet', click() { win.loadFile('src/GUI/html/wallet.html') }},
                {label: 'Create wallet', click() { win.loadFile('src/GUI/html/createWallet.html') }},
                {label: 'Open wallet', click() { win.loadFile('src/GUI/html/openWallet.html') }},
                {label: 'Import wallet', click() { win.loadFile('src/GUI/html/importWallet.html') }},
                {label: 'Transactions', click() { win.loadFile('src/GUI/html/transactions.html') }},
                {label: 'Address book', click() { win.loadFile('src/GUI/html/addressBook.html') }},
            ]
        },
        {
            label: 'Node',
            submenu: [
                {label: 'Node', click() { win.loadFile('src/GUI/html/node.html') }},
                {label: 'Node settings', click() { win.loadFile('src/GUI/html/nodeSettings.html') }},
        ]
        },
        {
            label: 'Mine',
            submenu: [
                {label: 'Mining', click() { win.loadFile('src/GUI/html/mining.html') }},
                {label: 'Mining settings', click() { win.loadFile('src/GUI/html/miningSettings.html') }},
            ]
        },
        {
            label: 'Explorer',
            submenu: [
                {label: 'Explorer', click() { win.loadFile('src/GUI/html/explorer.html') }},
                {label: 'Blocks', click() { win.loadFile('src/GUI/html/blocks.html') }},
            ]
        },
        {
            label: 'Network',
            submenu: [
                {label: 'Network', click() { win.loadFile('src/GUI/html/network.html') }},
                {label: 'Peers', click() { win.loadFile('src/GUI/html/peers.html') }},
                {label: 'Connections', click() { win.loadFile('src/GUI/html/connections.html') }},
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    app.on('ready', createWindow)

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    }
    )

