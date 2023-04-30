//this is the transactions api

import axios from 'axios';

export const getTransactions = async () => {
    const res = await axios.get('/api/transactions');
    return res.data;
}

export const getTransaction = async (id) => {
    const res = await axios.get(`/api/transactions/${id}`);
    return res.data;
}

export const createTransaction = async (transaction) => {
    const res = await axios.post('/api/transactions', transaction);
    return res.data;
}

export const updateTransaction = async (transaction) => {
    const res = await axios.put(`/api/transactions/${transaction._id}`, transaction);
    return res.data;
}

export const deleteTransaction = async (id) => {
    const res = await axios.delete(`/api/transactions/${id}`);
    return res.data;
}

export const getTransactionsByUser = async (id) => {
    const res = await axios.get(`/api/transactions/user/${id}`);
    return res.data;
}

export const getTransactionsByCategory = async (id) => {
    const res = await axios.get(`/api/transactions/category/${id}`);
    return res.data;
}

export const getTransactionsByDate = async (date) => {
    const res = await axios.get(`/api/transactions/date/${date}`);
    return res.data;
}

export const getTransactionsByDateRange = async (date1, date2) => {
    const res = await axios.get(`/api/transactions/date/${date1}/${date2}`);
    return res.data;
}

export const getTransactionsByUserAndCategory = async (userId, categoryId) => {
    const res = await axios.get(`/api/transactions/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTransactionsByUserAndDate = async (userId, date) => {
    const res = await axios.get(`/api/transactions/user/${userId}/date/${date}`);
    return res.data;
}

export const getTransactionsByUserAndDateRange = async (userId, date1, date2) => {
    const res = await axios.get(`/api/transactions/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTransactionsByCategoryAndDate = async (categoryId, date) => {
    const res = await axios.get(`/api/transactions/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTransactionsByCategoryAndDateRange = async (categoryId, date1, date2) => {
    const res = await axios.get(`/api/transactions/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTransactionsByUserAndCategoryAndDate = async (userId, categoryId, date) => {
    const res = await axios.get(`/api/transactions/user/${userId}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTransactionsByUserAndCategoryAndDateRange = async (userId, categoryId, date1, date2) => {
    const res = await axios.get(`/api/transactions/user/${userId}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTransactionsByUserAndCategoryAndDateRangeAndType = async (userId, categoryId, date1, date2, type) => {
    const res = await axios.get(`/api/transactions/user/${userId}/category/${categoryId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTransactionsByUserAndDateRangeAndType = async (userId, date1, date2, type) => {
    const res = await axios.get(`/api/transactions/user/${userId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTransactionsByCategoryAndDateRangeAndType = async (categoryId, date1, date2, type) => {
    const res = await axios.get(`/api/transactions/category/${categoryId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTransactionsByDateRangeAndType = async (date1, date2, type) => {
    const res = await axios.get(`/api/transactions/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTransactionsByUserAndCategoryAndType = async (userId, categoryId, type) => {
    const res = await axios.get(`/api/transactions/user/${userId}/category/${categoryId}/type/${type}`);
    return res.data;
}

export const getTransactionsByUserAndType = async (userId, type) => {
    const res = await axios.get(`/api/transactions/user/${userId}/type/${type}`);
    return res.data;
}

export const getTransactionsByCategoryAndType = async (categoryId, type) => {
    const res = await axios.get(`/api/transactions/category/${categoryId}/type/${type}`);
    return res.data;
}

export const getTransactionsByType = async (type) => {
    const res = await axios.get(`/api/transactions/type/${type}`);
    return res.data;
}

export const getTransactionsByUserAndCategoryAndDateAndType = async (userId, categoryId, date, type) => {
    const res = await axios.get(`/api/transactions/user/${userId}/category/${categoryId}/date/${date}/type/${type}`);
    return res.data;
}

export const getTransactionsByUserAndDateAndType = async (userId, date, type) => {
    const res = await axios.get(`/api/transactions/user/${userId}/date/${date}/type/${type}`);
    return res.data;
}

