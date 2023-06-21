const { ipcMain, clipboard } = require('electron');
const Wallet = require('./wallet');

ipcMain.handle('create-wallet', (event) => {
  const wallet = new Wallet();
  return wallet;
});

ipcMain.handle('view-balance', (event, wallet) => {
  const balance = wallet.balance;
  return balance;
});

ipcMain.handle(
  'send-transaction',
  (event, { senderWallet, recipient, amount }) => {
    try {
      const transaction = senderWallet.createTransaction({
        recipient,
        amount,
      });
      return transaction;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

ipcMain.handle('receive-transaction', (event, transaction) => {
  const isValid = Wallet.verifyTransaction({ transaction });
  if (isValid) {
    return transaction;
  } else {
    throw new Error('Invalid transaction');
  }
});

ipcMain.handle('show-address', (event, wallet) => {
  const address = wallet.address;
  return address;
});

ipcMain.handle('copy-address', (event, wallet) => {
  const address = wallet.address;
  clipboard.writeText(address);
  return address;
});
