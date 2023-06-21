const { ipcRenderer } = require('electron');
const { generateKeyPair, generateAddress } = require('../../SeigrBlockchain/wallet');

function sendTransaction(recipient, amount) {
  // Implement the logic to send a transaction
  const transaction = createTransaction(recipient, amount);
  if (transaction) {
    // Assuming you have a method to send the transaction to the network
    sendTransactionToNetwork(transaction);
  } else {
    // Handle the case when the transaction creation fails
    console.error('Transaction creation failed.');
  }
}

function createTransaction(recipient, amount) {
  // Implement the logic to create a transaction object
  // Validate inputs and check the wallet balance

  // If the inputs are valid and the wallet has sufficient balance, create the transaction
  if (recipient && amount) {
    const wallet = new Wallet();
    const transaction = wallet.createTransaction(recipient, amount);
    return transaction;
  }

  // Check if the wallet has sufficient balance
  if (amount <= getWalletBalance()) {
    // Create a new transaction object
    const transaction = {
      recipient,
      amount,
      // Include any other necessary fields for the transaction
      timestamp: Date.now(),
    };
    return transaction;
  } else {
    // Return null if the wallet balance is insufficient and show insufficient balance error
    console.error('Insufficient balance.');
    return null;
  }
}

function sendTransactionToNetwork(transaction) {
  // Implement the logic to send the transaction to the network
  // Use the ipcRenderer module to send the transaction to the main process
  ipcRenderer.send('send-transaction', transaction);
}

function getWalletBalance() {
  return new Promise((resolve, reject) => {
    ipcRenderer.send('view-balance');
    ipcRenderer.once('view-balance-response', (event, balance) => {
      resolve(balance);
    });
    // Handle potential errors or timeout
  });
}

module.exports = {
  sendTransaction
};
