//this is the tokens api

import axios from 'axios';

export const getTokens = async () => {
    const res = await axios.get('/api/tokens');
    return res.data;
}

export const getTokenById = async (id) => {
    const res = await axios.get(`/api/tokens/${id}`);
    return res.data;
}

export const createToken = async (token) => {
    const res = await axios.post('/api/tokens', token);
    return res.data;
}

export const updateToken = async (token) => {
    const res = await axios.put(`/api/tokens/${token._id}`, token);
    return res.data;
}

export const deleteToken = async (id) => {
    const res = await axios.delete(`/api/tokens/${id}`);
    return res.data;
}

export const getTokensByUser = async (id) => {
    const res = await axios.get(`/api/tokens/user/${id}`);
    return res.data;
}

export const getTokensByCategory = async (id) => {
    const res = await axios.get(`/api/tokens/category/${id}`);
    return res.data;
}

export const getTokensByDate = async (date) => {
    const res = await axios.get(`/api/tokens/date/${date}`);
    return res.data;
}

export const getTokensByDateRange = async (date1, date2) => {
    const res = await axios.get(`/api/tokens/date/${date1}/${date2}`);
    return res.data;
}

export const getTokensByUserAndCategory = async (userId, categoryId) => {
    const res = await axios.get(`/api/tokens/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTokensByUserAndDate = async (userId, date) => {
    const res = await axios.get(`/api/tokens/user/${userId}/date/${date}`);
    return res.data;
}

export const getTokensByUserAndDateRange = async (userId, date1, date2) => {
    const res = await axios.get(`/api/tokens/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokensByContract = async (id) => {
    const res = await axios.get(`/api/tokens/contract/${id}`);
    return res.data;
}

export const getTokensByContractAndDate = async (contractId, date) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/date/${date}`);
    return res.data;
}

export const getTokensByContractAndDateRange = async (contractId, date1, date2) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokensByContractAndUser = async (contractId, userId) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/user/${userId}`);
    return res.data;
}

export const getTokensByContractAndUserAndDate = async (contractId, userId, date) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/user/${userId}/date/${date}`);
    return res.data;
}

export const getTokensByContractAndUserAndDateRange = async (contractId, userId, date1, date2) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokensByContractAndCategory = async (contractId, categoryId) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/category/${categoryId}`);
    return res.data;
}

export const getTokensByContractAndCategoryAndDate = async (contractId, categoryId, date) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTokensByContractAndCategoryAndDateRange = async (contractId, categoryId, date1, date2) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokensByContractAndCategoryAndUser = async (contractId, categoryId, userId) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/category/${categoryId}/user/${userId}`);
    return res.data;
}

export const getTokensByContractAndCategoryAndUserAndDate = async (contractId, categoryId, userId, date) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/category/${categoryId}/user/${userId}/date/${date}`);
    return res.data;
}

export const getTokensByContractAndCategoryAndUserAndDateRange = async (contractId, categoryId, userId, date1, date2) => {
    const res = await axios.get(`/api/tokens/contract/${contractId}/category/${categoryId}/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokensByCategoryAndDate = async (categoryId, date) => {
    const res = await axios.get(`/api/tokens/category/${categoryId}/date/${date}`);
    return res.data;
}

