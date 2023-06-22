const fetch = require('node-fetch');

/**
 * Fetches block information by block number
 * @param {Number} blockNumber - The block number to fetch
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchBlock(blockNumber) {
  return fetchData(`/api/block/${blockNumber}`, `block with number ${blockNumber}`);
}

/**
 * Fetches a list of all blocks
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchBlocks() {
  return fetchData('/api/blocks', 'all blocks');
}

/**
 * Fetches transaction information by transaction hash
 * @param {String} transactionHash - The transaction hash to fetch
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransaction(transactionHash) {
  return fetchData(`/api/transaction/${transactionHash}`, `transaction with hash ${transactionHash}`);
}

/**
 * Fetches a list of all transactions
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactions() {
  return fetchData('/api/transactions', 'all transactions');
}

/**
 * Fetches transaction receipt by transaction hash
 * @param {String} transactionHash - The transaction hash to fetch the receipt for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceipt(transactionHash) {
  return fetchData(`/api/transactionReceipt/${transactionHash}`, `transaction receipt with hash ${transactionHash}`);
}

/**
 * Fetches a list of all transaction receipts
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceipts() {
  return fetchData('/api/transactionReceipts', 'all transaction receipts');
}

/**
 * Fetches transaction receipts by block number
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlock(blockNumber) {
  return fetchData(`/api/transactionReceiptsByBlock/${blockNumber}`, `transaction receipts for block number ${blockNumber}`);
}

/**
 * Fetches transaction receipts by transaction hash
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByTransaction(transactionHash) {
  return fetchData(`/api/transactionReceiptsByTransaction/${transactionHash}`, `transaction receipts for transaction hash ${transactionHash}`);
}

/**
 * Fetches transaction receipts by address
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByAddress(address) {
  return fetchData(`/api/transactionReceiptsByAddress/${address}`, `transaction receipts for address ${address}`);
}

/**
 * Fetches transaction receipts by block number and address
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlockAndAddress(blockNumber, address) {
  return fetchData(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`, `transaction receipts for block number ${blockNumber} and address ${address}`);
}

/**
 * Fetches transaction receipts by transaction hash and address
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByTransactionAndAddress(transactionHash, address) {
  return fetchData(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`, `transaction receipts for transaction hash ${transactionHash} and address ${address}`);
}

/**
 * Fetches transaction receipts by block number and transaction hash
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlockAndTransaction(blockNumber, transactionHash) {
  return fetchData(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`, `transaction receipts for block number ${blockNumber} and transaction hash ${transactionHash}`);
}

/**
 * Fetches transaction receipts by block number, transaction hash, and address
 * @param {Number} blockNumber - The block number to fetch the receipts for
 * @param {String} transactionHash - The transaction hash to fetch the receipts for
 * @param {String} address - The address to fetch the receipts for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchTransactionReceiptsByBlockAndTransactionAndAddress(blockNumber, transactionHash, address) {
  return fetchData(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`, `transaction receipts for block number ${blockNumber}, transaction hash ${transactionHash}, and address ${address}`);
}

/**
 * Fetches wallets
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchWallets() {
  return fetchData('/api/wallets', 'wallets');
}

/**
 * Fetches wallets by address
 * @param {String} address - The address to fetch the wallets for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchWalletsByAddress(address) {
  return fetchData(`/api/walletsByAddress/${address}`, `wallets for address ${address}`);
}

/**
 * Fetches wallets by address and token
 * @param {String} address - The address to fetch the wallets for
 * @param {String} token - The token to fetch the wallets for
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchWalletsByAddressAndToken(address, token) {
  return fetchData(`/api/walletsByAddressAndToken/${address}/${token}`, `wallets for address ${address} and token ${token}`);
}

/**
 * Fetches data from the provided URL
 * @param {String} url - The URL to fetch the data from
 * @param {String} typeText - The description of the data being fetched
 * @returns {Promise} - The promise that resolves to a response object or an error message
 */
function fetchData(url, typeText) {
  return fetch(url)
    .then(handleErrors)
    .then(res => res.json())
    .catch(error => {
      console.error(`Error fetching ${typeText}:`, error);
      return `Error: ${error.message}`;
    });
}

/**
 * Handles errors from API calls
 * @param {Object} res - The response object
 * @returns {Object} - The response object if it's successful, otherwise throws an error
 */
function handleErrors(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
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
