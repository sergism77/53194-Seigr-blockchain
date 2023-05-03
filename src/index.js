const { app, BrowserWindow } = require('electron');
const { createMenu } = require('./menu/mainmenu');
const path = require('path');
const fs = require('fs');
const homedir = require('os').homedir();
const seigrBlockchainDir = path.join(homedir, 'SeigrBlockchain');
const seigrConfFile = path.join(seigrBlockchainDir, 'seigr.conf');
const seigrDatabaseDir = path.join(seigrBlockchainDir, 'database');
const seigrWalletsDir = path.join(seigrBlockchainDir, 'wallets');
const seigrWalletFile = path.join(seigrWalletsDir, 'wallet.dat');
const ipcRenderer = require('electron').ipcRenderer;
const { dialog } = require('electron');
const { Menu } = require('electron');
const { shell } = require('electron');
const { clipboard } = require('electron');
const { net } = require('electron');
const { session } = require('electron');
const { webContents } = require('electron');
const { BrowserView } = require('electron');
const { globalShortcut } = require('electron');
const { nativeImage } = require('electron');
const { powerMonitor } = require('electron');
const { powerSaveBlocker } = require('electron');
const { protocol } = require('electron');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}



let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });


    mainWindow.loadFile('src/GUI/wallet.html');

    createMenu();






    const homedir = require('os').homedir();
    const seigrBlockchainDir = path.join(homedir, 'SeigrBlockchain');
    console.log(seigrBlockchainDir);
    if (!fs.existsSync(seigrBlockchainDir)) {
        fs.mkdirSync(seigrBlockchainDir);
    }

    const seigrConfFile = path.join(seigrBlockchainDir, 'seigr.conf');
    console.log(seigrConfFile);
    if (!fs.existsSync(seigrConfFile)) {
        fs.writeFileSync(seigrConfFile, 'rpcuser=seigr\nrpcpassword=seigr\nrpcport=3001\nport=53194\ndaemon=1\nserver=1\nlisten=1\ntxindex=1\nmaxconnections=256');
    }

    const seigrDatabaseDir = path.join(seigrBlockchainDir, 'database');
    console.log(seigrDatabaseDir);
    if (!fs.existsSync(seigrDatabaseDir)) {
        fs.mkdirSync(seigrDatabaseDir);
    }

    const seigrWalletsDir = path.join(seigrBlockchainDir, 'wallets');
    console.log(seigrWalletsDir);
    if (!fs.existsSync(seigrWalletsDir)) {
        fs.mkdirSync(seigrWalletsDir);
    }


    //we want to start the node server when the app starts
    const { exec } = require('child_process');
    exec('node src/SeigrBlockchain/p2pServer', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    });

    //we want to start searching for peers when the app starts
    exec('node src/SeigrBlockchain/p2pClient', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    });





    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

