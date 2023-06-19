const { app, ipcMain, dialog, BrowserWindow, clipboard } = require('electron');
const path = require('path');
const url = require('url');
const Wallet = require('./wallet');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'wallets.html'),
      protocol: 'file:',
      slashes: true,
    })
  );

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

ipcMain.on('create-wallet', (event) => {
  const wallet = new Wallet();
  event.sender.send('wallet-created', wallet);
});

ipcMain.on('view-balance', (event, wallet) => {
  const balance = wallet.balance;
  event.sender.send('balance-updated', balance);
});

ipcMain.on('send-transaction', (event, { senderWallet, recipient, amount }) => {
  try {
    const transaction = senderWallet.createTransaction({ recipient, amount });
    event.sender.send('transaction-created', transaction);
  } catch (error) {
    event.sender.send('transaction-error', error.message);
  }
});

ipcMain.on('receive-transaction', (event, transaction) => {
  const isValid = Wallet.verifyTransaction({ transaction });
  if (isValid) {
    event.sender.send('transaction-received', transaction);
  } else {
    event.sender.send('transaction-error', 'Invalid transaction');
  }
});

ipcMain.on('show-address', (event, wallet) => {
  const address = wallet.address;
  event.sender.send('address-shown', address);
});

ipcMain.on('copy-address', (event, wallet) => {
  const address = wallet.address;
  clipboard.writeText(address);
  event.sender.send('address-copied', address);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
