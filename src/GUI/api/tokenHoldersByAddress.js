//this is the tokenHoldersByAddress api

import axios from 'axios';

export const tokenHoldersByAddress = async (address) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndDate = async (address, date) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndDateRange = async (address, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndDateRangeAndToken = async (address, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndToken = async (address, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndTokenAndDate = async (address, token, date) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${token}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndTokenAndDateRange = async (address, token, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${token}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByAddressAndTokenAndDateRangeAndToken = async (address, token, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByAddress/${address}/${token}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUser = async (address) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndDate = async (address, date) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndDateRange = async (address, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndDateRangeAndToken = async (address, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndToken = async (address, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndTokenAndDate = async (address, token, date) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${token}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndTokenAndDateRange = async (address, token, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${token}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByUserAndTokenAndDateRangeAndToken = async (address, token, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByUser/${address}/${token}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByToken = async (token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByToken/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByTokenAndDate = async (token, date) => {
    try {
        const response = await axios.get(`api/tokenHoldersByToken/${token}/${date}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByTokenAndDateRange = async (token, startDate, endDate) => {
    try {
        const response = await axios.get(`api/tokenHoldersByToken/${token}/${startDate}/${endDate}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const tokenHoldersByTokenAndDateRangeAndToken = async (token, startDate, endDate, token) => {
    try {
        const response = await axios.get(`api/tokenHoldersByToken/${token}/${startDate}/${endDate}/${token}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

