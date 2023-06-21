const electron = require('electron');
const { app, BrowserWindow, Menu, nativeTheme } = electron;
const path = require('path');
const fs = require('fs');
const homedir = require('os').homedir();
const seigrBlockchainDir = path.join(homedir, 'SeigrBlockchain');
const { exec } = require('child_process');

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

// Start the Seigr blockchain node process
exec('node src/SeigrBlockchain/p2pServer', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stdout);
});

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile('src/index.html');
}

const createMenu = () => {
  const template = [
    {
      label: 'Wallet',
      click() { win.loadFile('src/GUI/html/wallet.html'); }
    },
    {
      label: 'Node',
      click() { win.loadFile('src/GUI/html/node.html'); }
    },
    {
      label: 'Mine',
      click() { win.loadFile('src/GUI/html/mining.html'); }
    },
    {
      label: 'Explorer',
      click() { win.loadFile('src/GUI/html/explorer.html'); }
    },
    {
      label: 'Network',
      click() { win.loadFile('src/GUI/html/network.html'); }
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

app.on('ready', () => {
  createWindow();
  createMenu();

  // Set nativeTheme themeSource to "dark"
  nativeTheme.themeSource = "dark";
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
