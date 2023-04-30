//this is the tokenBalances api

import axios from 'axios';

export const tokenBalances = async (address) => {
    try {
        const response = await axios.get(`api/tokenBalances/${address}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const tokenBalancesByDate = async (address, date) => {
    try {
        const response = await axios.get(`api/tokenBalances/${address}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByDateRange = async (address, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenBalances/${address}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByDateRangeAndToken = async (address, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenBalances/${address}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUser = async (address) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndDate = async (address, date) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndDateRange = async (address, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndDateRangeAndToken = async (address, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByAddressAndToken = async (address, token) => {
    try {
        const response = await axios.get(`api/tokenBalancesByAddress/${address}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByAddressAndTokenAndDate = async (address, token, date) => {
    try {
        const response = await axios.get(`api/tokenBalancesByAddress/${address}/${token}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByAddressAndTokenAndDateRange = async (address, token, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenBalancesByAddress/${address}/${token}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByAddressAndTokenAndDateRangeAndToken = async (address, token, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenBalancesByAddress/${address}/${token}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndToken = async (address, token) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndTokenAndDate = async (address, token, date) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${token}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndTokenAndDateRange = async (address, token, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${token}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenBalancesByUserAndTokenAndDateRangeAndToken = async (address, token, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenBalancesByUser/${address}/${token}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
