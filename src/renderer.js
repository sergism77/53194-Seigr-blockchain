import { ipcRenderer } from 'electron';
import { createWallet } from '../src/SeigrBlockchain/walletUtils.js';
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
  ipcRenderer.send('set-title', title);
  const url = urlInput.value;
  ipcRenderer.send('set-url', url);
});

ipcRenderer.on('bookmark-created', (event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

ipcRenderer.on('bookmark-removed', (event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.removeChild(bookmarkElement);
});

ipcRenderer.on('bookmark-changed', (event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

ipcRenderer.on('bookmark-moved', (event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

ipcRenderer.on('bookmark-imported', (event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

ipcRenderer.on('bookmark-exported', (event, bookmark) => {
  const bookmarkElement = document.createElement('li');
  bookmarkElement.textContent = bookmark.title;
  bookmarksList.appendChild(bookmarkElement);
});

ipcRenderer.on('bookmark-children-reordered', (event, bookmark) => {
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

// IPC communication to retrieve initial balance and wallet address
ipcRenderer.on('wallet-info', (event, { balance, address }) => {
  updateBalance(balance);
  displayWalletAddress(address);
});

// Request initial wallet information from the main process
ipcRenderer.send('get-wallet-info');

