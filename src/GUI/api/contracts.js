//this is the contracts api

import axios from 'axios';

export const getContracts = async () => {
    const res = await axios.get('/api/contracts');
    return res.data;
}

export const getContractById = async (id) => {
    const res = await axios.get(`/api/contracts/${id}`);
    return res.data;
}

export const createContract = async (contract) => {
    const res = await axios.post('/api/contracts', contract);
    return res.data;
}

export const updateContract = async (contract) => {
    const res = await axios.put(`/api/contracts/${contract._id}`, contract);
    return res.data;
}

export const deleteContract = async (id) => {
    const res = await axios.delete(`/api/contracts/${id}`);
    return res.data;
}

export const getContractsByUser = async (id) => {
    const res = await axios.get(`/api/contracts/user/${id}`);
    return res.data;
}

export const getContractsByCategory = async (id) => {
    const res = await axios.get(`/api/contracts/category/${id}`);
    return res.data;
}

export const getContractsByDate = async (date) => {
    const res = await axios.get(`/api/contracts/date/${date}`);
    return res.data;
}

export const getContractsByDateRange = async (date1, date2) => {
    const res = await axios.get(`/api/contracts/date/${date1}/${date2}`);
    return res.data;
}

export const getContractsByUserAndCategory = async (userId, categoryId) => {
    const res = await axios.get(`/api/contracts/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getContractsByUserAndDate = async (userId, date) => {
    const res = await axios.get(`/api/contracts/user/${userId}/date/${date}`);
    return res.data;
}

export const getContractsByUserAndDateRange = async (userId, date1, date2) => {
    const res = await axios.get(`/api/contracts/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getContractsByUserAndCategoryAndDate = async (userId, categoryId, date) => {
    const res = await axios.get(`/api/contracts/user/${userId}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getContractsByUserAndCategoryAndDateRange = async (userId, categoryId, date1, date2) => {
    const res = await axios.get(`/api/contracts/user/${userId}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getContractsByCategoryAndDate = async (categoryId, date) => {
    const res = await axios.get(`/api/contracts/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getContractsByCategoryAndDateRange = async (categoryId, date1, date2) => {
    const res = await axios.get(`/api/contracts/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

