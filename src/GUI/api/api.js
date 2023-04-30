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
}

export { API_URL };