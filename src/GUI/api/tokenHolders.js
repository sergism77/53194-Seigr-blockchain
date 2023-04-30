//this is the tokenHolders api

import axios from "axios";

export const tokenHolders = async (tokenAddress) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const tokenHoldersByDate = async (tokenAddress, date) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/date/${date}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByDateRange = async (tokenAddress, date1, date2) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/date/${date1}/${date2}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByUser = async (tokenAddress, userId) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/user/${userId}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByUserAndDate = async (tokenAddress, userId, date) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/user/${userId}/date/${date}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByUserAndDateRange = async (tokenAddress, userId, date1, date2) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/user/${userId}/date/${date1}/${date2}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByCategory = async (tokenAddress, categoryId) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/category/${categoryId}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByCategoryAndDate = async (tokenAddress, categoryId, date) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/category/${categoryId}/date/${date}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByCategoryAndDateRange = async (tokenAddress, categoryId, date1, date2) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/category/${categoryId}/date/${date1}/${date2}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByUserAndCategory = async (tokenAddress, userId, categoryId) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/user/${userId}/category/${categoryId}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByUserAndCategoryAndDate = async (tokenAddress, userId, categoryId, date) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/user/${userId}/category/${categoryId}/date/${date}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const tokenHoldersByUserAndCategoryAndDateRange = async (tokenAddress, userId, categoryId, date1, date2) => {
    try {
        const response = await axios.get(
        `api/tokenHolders/${tokenAddress}/user/${userId}/category/${categoryId}/date/${date1}/${date2}`
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

