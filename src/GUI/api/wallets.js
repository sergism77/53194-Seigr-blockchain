//this is the wallets api file that will be used to make calls to the backend to get wallet addresses

import axios from 'axios';

export const getWallets = () => {
    return axios.get('/api/wallets');
}

export const getWallet = (id) => {
    return axios.get(`/api/wallets/${id}`);
}

export const createWallet = (wallet) => {
    return axios.post('/api/wallets', wallet);
}

export const updateWallet = (wallet) => {
    return axios.patch(`/api/wallets/${wallet.id}`, wallet);
}

export const deleteWallet = (id) => {
    return axios.delete(`/api/wallets/${id}`);
}

export const getWalletsByUserId = (userId) => {
    return axios.get(`/api/wallets/user/${userId}`);
}

export const getWalletsByUserIdAndType = (userId, type) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}`);
}

export const getWalletsByUserIdAndName = (userId, name) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}`);
}

export const getWalletsByUserIdAndTypeAndName = (userId, type, name) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddress = (userId, type, name, address) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}`);
}

export const getWalletsByUserIdAndTypeAndAddress = (userId, type, address) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}`);
}

export const getWalletsByUserIdAndNameAndAddress = (userId, name, address) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}`);
}

export const getWalletsByUserIdAndAddress = (userId, address) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndBalance = (userId, type, name, address, balance) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/balance/${balance}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndBalance = (userId, type, address, balance) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/balance/${balance}`);
}

export const getWalletsByUserIdAndNameAndAddressAndBalance = (userId, name, address, balance) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/balance/${balance}`);
}

export const getWalletsByUserIdAndAddressAndBalance = (userId, address, balance) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/balance/${balance}`);
}

export const getWalletsByUserIdAndTypeAndNameAndBalance = (userId, type, name, balance) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/balance/${balance}`);
}

export const getWalletsByUserIdAndTypeAndBalance = (userId, type, balance) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/balance/${balance}`);
}

export const getWalletsByUserIdAndNameAndBalance = (userId, name, balance) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/balance/${balance}`);
}

export const getWalletsByUserIdAndBalance = (userId, balance) => {
    return axios.get(`/api/wallets/user/${userId}/balance/${balance}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndBalanceAndDate = (userId, type, name, address, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndBalanceAndDate = (userId, type, address, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndNameAndAddressAndBalanceAndDate = (userId, name, address, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndAddressAndBalanceAndDate = (userId, address, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndNameAndBalanceAndDate = (userId, type, name, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndBalanceAndDate = (userId, type, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndNameAndBalanceAndDate = (userId, name, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndBalanceAndDate = (userId, balance, date) => {
    return axios.get(`/api/wallets/user/${userId}/balance/${balance}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndDate = (userId, type, name, address, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndDate = (userId, type, address, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/date/${date}`);
}

export const getWalletsByUserIdAndNameAndAddressAndDate = (userId, name, address, date) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/date/${date}`);
}

export const getWalletsByUserIdAndAddressAndDate = (userId, address, date) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndNameAndDate = (userId, type, name, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndDate = (userId, type, date) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/date/${date}`);
}

export const getWalletsByUserIdAndNameAndDate = (userId, name, date) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/date/${date}`);
}

export const getWalletsByUserIdAndDate = (userId, date) => {
    return axios.get(`/api/wallets/user/${userId}/date/${date}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndBalanceAndDateAndTime = (userId, type, name, address, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndBalanceAndDateAndTime = (userId, type, address, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndNameAndAddressAndBalanceAndDateAndTime = (userId, name, address, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndAddressAndBalanceAndDateAndTime = (userId, address, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndNameAndBalanceAndDateAndTime = (userId, type, name, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndBalanceAndDateAndTime = (userId, type, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndNameAndBalanceAndDateAndTime = (userId, name, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndBalanceAndDateAndTime = (userId, balance, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/balance/${balance}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndDateAndTime = (userId, type, name, address, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndDateAndTime = (userId, type, address, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndNameAndAddressAndDateAndTime = (userId, name, address, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndAddressAndDateAndTime = (userId, address, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndNameAndDateAndTime = (userId, type, name, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndDateAndTime = (userId, type, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndNameAndDateAndTime = (userId, name, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndDateAndTime = (userId, date, time) => {
    return axios.get(`/api/wallets/user/${userId}/date/${date}/time/${time}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndBalanceAndDateAndTimeAndDescription = (userId, type, name, address, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndBalanceAndDateAndTimeAndDescription = (userId, type, address, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndNameAndAddressAndBalanceAndDateAndTimeAndDescription = (userId, name, address, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndAddressAndBalanceAndDateAndTimeAndDescription = (userId, address, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndNameAndBalanceAndDateAndTimeAndDescription = (userId, type, name, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndBalanceAndDateAndTimeAndDescription = (userId, type, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndNameAndBalanceAndDateAndTimeAndDescription = (userId, name, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndBalanceAndDateAndTimeAndDescription = (userId, balance, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/balance/${balance}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndNameAndAddressAndDateAndTimeAndDescription = (userId, type, name, address, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/address/${address}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndAddressAndDateAndTimeAndDescription = (userId, type, address, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/address/${address}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndNameAndAddressAndDateAndTimeAndDescription = (userId, name, address, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/address/${address}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndAddressAndDateAndTimeAndDescription = (userId, address, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/address/${address}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndNameAndDateAndTimeAndDescription = (userId, type, name, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/name/${name}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndTypeAndDateAndTimeAndDescription = (userId, type, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/type/${type}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndNameAndDateAndTimeAndDescription = (userId, name, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/name/${name}/date/${date}/time/${time}/description/${description}`);
}

export const getWalletsByUserIdAndDateAndTimeAndDescription = (userId, date, time, description) => {
    return axios.get(`/api/wallets/user/${userId}/date/${date}/time/${time}/description/${description}`);
}

