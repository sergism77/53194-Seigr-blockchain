const fetch = require('node-fetch');

/**
 * Fetches block information by block number
 * @param {Number} blockNumber - The block number to fetch
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchBlock(blockNumber) {
  return fetch(`/api/block/${blockNumber}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching block:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches a list of all blocks
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchBlocks() {
  return fetch('/api/blocks')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching blocks:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction information by transaction hash
 * @param {String} transactionHash - The transaction hash to fetch
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransaction(transactionHash) {
  return fetch(`/api/transaction/${transactionHash}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches a list of all transactions
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactions() {
  return fetch('/api/transactions')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transactions:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipt by transaction hash
 * @param {String} transactionHash - The transaction hash to fetch the receipt for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceipt(transactionHash) {
  return fetch(`/api/transactionReceipt/${transactionHash}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipt:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches a list of all transaction receipts
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceipts() {
  return fetch('/api/transactionReceipts')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by block number
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlock(blockNumber) {
  return fetch(`/api/transactionReceiptsByBlock/${blockNumber}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by block:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by transaction hash
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByTransaction(transactionHash) {
  return fetch(`/api/transactionReceiptsByTransaction/${transactionHash}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by transaction:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by address
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByAddress(address) {
  return fetch(`/api/transactionReceiptsByAddress/${address}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by address:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by block number and address
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlockAndAddress(blockNumber, address) {
  return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by block and address:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by transaction hash and address
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByTransactionAndAddress(transactionHash, address) {
  return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by transaction and address:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by block number and transaction hash
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlockAndTransaction(blockNumber, transactionHash) {
  return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by block and transaction:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches transaction receipts by block number, transaction hash, and address
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlockAndTransactionAndAddress(blockNumber, transactionHash, address) {
  return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching transaction receipts by block, transaction, and address:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches wallets
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchWallets() {
  return fetch('/api/wallets')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching wallets:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches wallets by address
 * @param {String} address - The address to fetch the wallets for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchWalletsByAddress(address) {
  return fetch(`/api/walletsByAddress/${address}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching wallets by address:', error);
      return `Error: ${error.message}`;
    });
}

/**
 * Fetches wallets by address and token
 * @param {String} address - The address to fetch the wallets for
 * @param {String} token - The token to fetch the wallets for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchWalletsByAddressAndToken(address, token) {
  return fetch(`/api/walletsByAddressAndToken/${address}/${token}`)
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching wallets by address and token:', error);
      return `Error: ${error.message}`;
    });
}

module.exports = {
  fetchBlock,
  fetchBlocks,
  fetchTransaction,
  fetchTransactions,
  fetchTransactionReceipt,
  fetchTransactionReceipts,
  fetchTransactionReceiptsByBlock,
  fetchTransactionReceiptsByTransaction,
  fetchTransactionReceiptsByAddress,
  fetchTransactionReceiptsByBlockAndAddress,
  fetchTransactionReceiptsByTransactionAndAddress,
  fetchTransactionReceiptsByBlockAndTransaction,
  fetchTransactionReceiptsByBlockAndTransactionAndAddress,
  fetchWallets,
  fetchWalletsByAddress,
  fetchWalletsByAddressAndToken,
};
