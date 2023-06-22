import axios from 'axios';

const API_URL = process.env.API_URL; // Assuming API_URL is set as an environment variable

export default class API {
  static requestAPI(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
      axios({ url, method, data })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.data && error.response.data.message) {
            reject(error.response.data.message);
          } else {
            reject(error.message);
          }
        });
    });
  }

  static getBlockchain() {
    return API.requestAPI(`${API_URL}/blockchain`);
  }

  static getLatestBlock() {
    return API.requestAPI(`${API_URL}/blockchain/latest-block`);
  }

  static getBlock(hash) {
    return API.requestAPI(`${API_URL}/blockchain/block/${hash}`);
  }

  static getTransactionPool() {
    return API.requestAPI(`${API_URL}/transaction-pool`);
  }

  static mineBlock() {
    return API.requestAPI(`${API_URL}/mine-block`);
  }

  static createTransaction(recipient, amount) {
    const data = { recipient, amount };
    return API.requestAPI(`${API_URL}/transact`, 'POST', data);
  }

  static mineTransactions() {
    return API.requestAPI(`${API_URL}/mine-transactions`);
  }

  static getAddressData(address) {
    return API.requestAPI(`${API_URL}/address/${address}`);
  }

  static getPeerSockets() {
    return API.requestAPI(`${API_URL}/peers`);
  }

  static addPeer(peer) {
    const data = { peer };
    return API.requestAPI(`${API_URL}/peers`, 'POST', data);
  }

  static getUtxos() {
    return API.requestAPI(`${API_URL}/utxos`);
  }

  static getWalletUtxos() {
    return API.requestAPI(`${API_URL}/wallet/utxos`);
  }

  static getWalletBalance() {
    return API.requestAPI(`${API_URL}/wallet/balance`);
  }

  static getWalletAddress() {
    return API.requestAPI(`${API_URL}/wallet/address`);
  }

  static getWalletTransactions() {
    return API.requestAPI(`${API_URL}/wallet/transactions`);
  }

  static getWalletTransaction(txid) {
    return API.requestAPI(`${API_URL}/wallet/transaction/${txid}`);
  }

  static getWalletUnspentTransactions() {
    return API.requestAPI(`${API_URL}/wallet/unspent-transactions`);
  }

  static getWalletUnspentTransaction(txid) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction/${txid}`);
  }

  static getWalletUnspentTransactionOutputs(txid) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${txid}`);
  }

  static getWalletUnspentTransactionOutput(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputAmount(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-amount/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputAddress(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-address/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputScriptPubKey(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-script-pub-key/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputRedeemScript(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-redeem-script/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputWitnessScript(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-witness-script/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputIsSpent(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-is-spent/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputIsConfirmed(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-is-confirmed/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputConfirmations(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-confirmations/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputBlockHeight(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-block-height/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputBlockHash(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-block-hash/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputBlockTime(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-block-time/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputTransaction(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-transaction/${txid}/${index}`);
  }

  static getWalletUnspentTransactionOutputTransactionId(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output-transaction-id/${txid}/${index}`);
  }
}
