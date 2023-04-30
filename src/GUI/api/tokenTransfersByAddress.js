//this is the tokenTransfersByAddress api

import axios from "axios";

export const tokenTransfersByAddress = async (tokenAddress) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByDate = async (tokenAddress, date) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/date/${date}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByDateRange = async (tokenAddress, date1, date2) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/date/${date1}/${date2}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUser = async (tokenAddress, userId) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDate = async (tokenAddress, userId, date) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateRange = async (tokenAddress, userId, date1, date2) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date1}/${date2}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateRangeByPage = async (tokenAddress, userId, date1, date2, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date1}/${date2}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByDateRangeByPage = async (tokenAddress, date1, date2, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/date/${date1}/${date2}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByDateByPage = async (tokenAddress, date, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/date/${date}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByPage = async (tokenAddress, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserByPage = async (tokenAddress, userId, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateByPage = async (tokenAddress, userId, date, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateRangeByPageByLimit = async (tokenAddress, userId, date1, date2, page, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date1}/${date2}/page/${page}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateRangeByLimit = async (tokenAddress, userId, date1, date2, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date1}/${date2}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByDateRangeByLimit = async (tokenAddress, date1, date2, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/date/${date1}/${date2}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByDateByLimit = async (tokenAddress, date, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/date/${date}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByLimit = async (tokenAddress, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserByLimit = async (tokenAddress, userId, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateByLimit = async (tokenAddress, userId, date, limit) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date}/limit/${limit}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenTransfersByAddressByUserAndDateRangeByLimitByPage = async (tokenAddress, userId, date1, date2, limit, page) => {
    try {
        const response = await axios.get(
        `api/tokenTransfersByAddress/${tokenAddress}/user/${userId}/date/${date1}/${date2}/limit/${limit}/page/${page}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}
