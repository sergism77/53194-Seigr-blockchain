import { createWallet } from './js/createWallet.js';
import { sendTransaction } from './js/sendTransaction.js';
import { receiveTransaction } from './js/receiveTransaction.js';
import { copyAddressToClipboard } from './js/copyAddressToClipboard.js';
import { updateBalance } from './js/updateBalance.js';
import { displayWalletAddress } from './js/displayWalletAddress.js';

const setButton = document.getElementById('set-button');
const titleInput = document.getElementById('title-input');
const urlInput = document.getElementById('url-input');
const bookmarksList = document.getElementById('bookmarks-list');

setButton.addEventListener('click', () => {
  const title = titleInput.value;
  window.electronAPI.setTitle(title);
  const url = urlInput.value;
  window.electronAPI.setURL(url);
});

window.electronAPI.onBookmarkCreated((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

window.electronAPI.onBookmarkRemoved((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.removeChild(bookmarkElement);
});

window.electronAPI.onBookmarkChanged((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

window.electronAPI.onBookmarkMoved((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

window.electronAPI.onBookmarkImported((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

window.electronAPI.onBookmarkExported((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

window.electronAPI.onBookmarkChildrenReordered((event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

// Handle create wallet button click
document.getElementById('createWalletBtn').addEventListener('click', createWallet);

// Handle send transaction button click
document.getElementById('sendTransactionBtn').addEventListener('click', () => {
  const recipient = document.getElementById('recipient').value;
  const amount = document.getElementById('amount').value;
  sendTransaction(recipient, amount);
});

// Handle receive transaction button click
document.getElementById('receiveTransactionBtn').addEventListener('click', () => {
  const receivedTransaction = document.getElementById('receivedTransaction').value;
  receiveTransaction(receivedTransaction);
});

// Handle copy address button click
document.getElementById('copyAddressBtn').addEventListener('click', copyAddressToClipboard);

// Function to create a new wallet
function createWallet() {
  // Implement the wallet creation logic
}

// Function to send a transaction
function sendTransaction(recipient, amount) {
  // Implement the transaction sending logic
}

// Function to receive a transaction
function receiveTransaction(transactionData) {
  // Implement the transaction receiving logic
}

// Function to copy the wallet address to the clipboard
function copyAddressToClipboard() {
  // Implement the logic to copy the wallet address to the clipboard
}

// Function to update the balance display
function updateBalance(balance) {
  document.getElementById('balance').textContent = balance;
}

// Function to display the wallet address
function displayWalletAddress(address) {
  document.getElementById('walletAddress').textContent = address;
}

// Call the necessary functions to initialize the wallet interface
// For example, retrieve the initial wallet balance and address
const initialBalance = 0; // Replace with the actual initial balance
const walletAddress = 'Your Wallet Address'; // Replace with the actual wallet address
updateBalance(initialBalance);
displayWalletAddress(walletAddress);
