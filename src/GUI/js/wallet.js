const { ipcMain, clipboard } = require('electron');
const Wallet = require('./wallet');

ipcMain.handle('create-wallet', () => {
  const wallet = new Wallet();
  return wallet;
});

ipcMain.handle('view-balance', (event, wallet) => {
  const balance = wallet.balance;
  return balance;
});

ipcMain.handle(
  'send-transaction',
  async (event, { senderWallet, recipient, amount }) => {
    if (amount <= 0) {
      throw new Error('Amount must be a positive number');
    }

    try {
      const transaction = await senderWallet.createTransaction({
        recipient,
        amount,
      });
      return transaction;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

ipcMain.handle('receive-transaction', async (event, transaction) => {
  const isValid = await Wallet.verifyTransaction({ transaction });
  if (isValid) {
    return transaction;
  } else {
    throw new Error('Invalid transaction');
  }
});

ipcMain.handle('get-address', async (event, wallet, copyToClipboard) => {
  const address = wallet.address;
  if (copyToClipboard) {
    clipboard.writeText(address);
  }
  return address;
});
