//this is the api file for the Seigr blockchain that will be used on the GUI


import axios from 'axios';

const API_URL = 'http://localhost:53194/api';

export default class API {
    static getBlockchain() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/blockchain`)
                .then((res) => {
                    const blockchain = res.data;
                    resolve(blockchain);
                })
                .catch((err) => reject(err));
        });
    }

    static getLatestBlock() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/blockchain/latest-block`)
                .then((res) => {
                    const block = res.data;
                    resolve(block);
                })
                .catch((err) => reject(err));
        });
    }

    static getBlock(hash) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/blockchain/block/${hash}`)
                .then((res) => {
                    const block = res.data;
                    resolve(block);
                })
                .catch((err) => reject(err));
        });
    }

    static getTransactionPool() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/transaction-pool`)
                .then((res) => {
                    const transactionPool = res.data;
                    resolve(transactionPool);
                })
                .catch((err) => reject(err));
        });
    }

    static mineBlock() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/mine-block`)
                .then((res) => {
                    const block = res.data;
                    resolve(block);
                })
                .catch((err) => reject(err));
        });
    }

    static createTransaction(recipient, amount) {
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}/transact`, { recipient, amount })
                .then((res) => {
                    const transaction = res.data;
                    resolve(transaction);
                })
                .catch((err) => reject(err));
        });
    }

    static mineTransactions() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/mine-transactions`)
                .then((res) => {
                    const block = res.data;
                    resolve(block);
                })
                .catch((err) => reject(err));
        });
    }

    static getAddressData(address) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/address/${address}`)
                .then((res) => {
                    const addressData = res.data;
                    resolve(addressData);
                })
                .catch((err) => reject(err));
        });
    }

    static getPeerSockets() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/peers`)
                .then((res) => {
                    const peers = res.data;
                    resolve(peers);
                })
                .catch((err) => reject(err));
        });
    }

    static addPeer(peer) {
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}/peers`, { peer })
                .then((res) => {
                    const peers = res.data;
                    resolve(peers);
                })
                .catch((err) => reject(err));
        });
    }

    static getUtxos() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/utxos`)
                .then((res) => {
                    const utxos = res.data;
                    resolve(utxos);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUtxos() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/utxos`)
                .then((res) => {
                    const utxos = res.data;
                    resolve(utxos);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletBalance() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/balance`)
                .then((res) => {
                    const balance = res.data;
                    resolve(balance);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletAddress() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/address`)
                .then((res) => {
                    const address = res.data;
                    resolve(address);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletTransactions() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/transactions`)
                .then((res) => {
                    const transactions = res.data;
                    resolve(transactions);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletTransaction(txid) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/transaction/${txid}`)
                .then((res) => {
                    const transaction = res.data;
                    resolve(transaction);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactions() {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transactions`)
                .then((res) => {
                    const transactions = res.data;
                    resolve(transactions);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransaction(txid) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction/${txid}`)
                .then((res) => {
                    const transaction = res.data;
                    resolve(transaction);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputs(txid) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-outputs/${txid}`)
                .then((res) => {
                    const outputs = res.data;
                    resolve(outputs);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutput(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output/${txid}/${index}`)
                .then((res) => {
                    const output = res.data;
                    resolve(output);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputAmount(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-amount/${txid}/${index}`)
                .then((res) => {
                    const amount = res.data;
                    resolve(amount);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputAddress(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-address/${txid}/${index}`)
                .then((res) => {
                    const address = res.data;
                    resolve(address);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputScriptPubKey(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-script-pub-key/${txid}/${index}`)
                .then((res) => {
                    const scriptPubKey = res.data;
                    resolve(scriptPubKey);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputRedeemScript(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-redeem-script/${txid}/${index}`)
                .then((res) => {
                    const redeemScript = res.data;
                    resolve(redeemScript);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputWitnessScript(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-witness-script/${txid}/${index}`)
                .then((res) => {
                    const witnessScript = res.data;
                    resolve(witnessScript);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputIsSpent(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-is-spent/${txid}/${index}`)
                .then((res) => {
                    const isSpent = res.data;
                    resolve(isSpent);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputIsConfirmed(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-is-confirmed/${txid}/${index}`)
                .then((res) => {
                    const isConfirmed = res.data;
                    resolve(isConfirmed);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputConfirmations(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-confirmations/${txid}/${index}`)
                .then((res) => {
                    const confirmations = res.data;
                    resolve(confirmations);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputBlockHeight(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-block-height/${txid}/${index}`)
                .then((res) => {
                    const blockHeight = res.data;
                    resolve(blockHeight);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputBlockHash(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-block-hash/${txid}/${index}`)
                .then((res) => {
                    const blockHash = res.data;
                    resolve(blockHash);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputBlockTime(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-block-time/${txid}/${index}`)
                .then((res) => {
                    const blockTime = res.data;
                    resolve(blockTime);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputTransaction(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-transaction/${txid}/${index}`)
                .then((res) => {
                    const transaction = res.data;
                    resolve(transaction);
                })
                .catch((err) => reject(err));
        });
    }

    static getWalletUnspentTransactionOutputTransactionId(txid, index) {
        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/wallet/unspent-transaction-output-transaction-id/${txid}/${index}`)
                .then((res) => {
                    const transactionId = res.data;
                    resolve(transactionId);
                })
                .catch((err) => reject(err));
        });
    }

}

export { API_URL };

