//this is the logs api

import axios from 'axios';

export const getLogs = async () => {
    const res = await axios.get('/api/logs');
    return res.data;
}

export const getLogsByDate = async (date) => {
    const res = await axios.get(`/api/logs/date/${date}`);
    return res.data;
}

export const getLogsByDateRange = async (date1, date2) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}`);
    return res.data;
}

export const getLogsByUserAndCategory = async (userId, categoryId) => {
    const res = await axios.get(`/api/logs/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getLogsByUserAndDate = async (userId, date) => {
    const res = await axios.get(`/api/logs/user/${userId}/date/${date}`);
    return res.data;
}

export const getLogsByUserAndDateRange = async (userId, date1, date2) => {
    const res = await axios.get(`/api/logs/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getLogsByCategoryAndDate = async (categoryId, date) => {
    const res = await axios.get(`/api/logs/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getLogsByCategoryAndDateRange = async (categoryId, date1, date2) => {
    const res = await axios.get(`/api/logs/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getLogsByUserAndCategoryAndDate = async (userId, categoryId, date) => {
    const res = await axios.get(`/api/logs/user/${userId}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getLogsByUserAndCategoryAndDateRange = async (userId, categoryId, date1, date2) => {
    const res = await axios.get(`/api/logs/user/${userId}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getLogsByUserAndCategoryAndDateRangeAndType = async (userId, categoryId, date1, date2, type) => {
    const res = await axios.get(`/api/logs/user/${userId}/category/${categoryId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getLogsByUserAndDateRangeAndType = async (userId, date1, date2, type) => {
    const res = await axios.get(`/api/logs/user/${userId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getLogsByCategoryAndDateRangeAndType = async (categoryId, date1, date2, type) => {
    const res = await axios.get(`/api/logs/category/${categoryId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}


export const getLogsByDateRangeAndType = async (date1, date2, type) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getLogsByUserAndCategoryAndType = async (userId, categoryId, type) => {
    const res = await axios.get(`/api/logs/user/${userId}/category/${categoryId}/type/${type}`);
    return res.data;
}

export const getLogsByUserAndType = async (userId, type) => {
    const res = await axios.get(`/api/logs/user/${userId}/type/${type}`);
    return res.data;
}

export const getLogsByCategoryAndType = async (categoryId, type) => {
    const res = await axios.get(`/api/logs/category/${categoryId}/type/${type}`);
    return res.data;
}

export const getLogsByType = async (type) => {
    const res = await axios.get(`/api/logs/type/${type}`);
    return res.data;
}

export const getLogsByUser = async (userId) => {
    const res = await axios.get(`/api/logs/user/${userId}`);
    return res.data;
}

export const getLogsByCategory = async (categoryId) => {
    const res = await axios.get(`/api/logs/category/${categoryId}`);
    return res.data;
}

export const getLogsByDateAndType = async (date, type) => {
    const res = await axios.get(`/api/logs/date/${date}/type/${type}`);
    return res.data;
}

export const getLogsByDateRangeAndTypeAndCategory = async (date1, date2, type, categoryId) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/type/${type}/category/${categoryId}`);
    return res.data;
}

export const getLogsByDateRangeAndTypeAndUser = async (date1, date2, type, userId) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/type/${type}/user/${userId}`);
    return res.data;
}

export const getLogsByDateRangeAndTypeAndUserAndCategory = async (date1, date2, type, userId, categoryId) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/type/${type}/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getLogsByDateRangeAndUserAndCategory = async (date1, date2, userId, categoryId) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getLogsByDateRangeAndUser = async (date1, date2, userId) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/user/${userId}`);
    return res.data;
}

export const getLogsByDateRangeAndCategory = async (date1, date2, categoryId) => {
    const res = await axios.get(`/api/logs/date/${date1}/${date2}/category/${categoryId}`);
    return res.data;
}

export const getLogsByDateAndUser = async (date, userId) => {
    const res = await axios.get(`/api/logs/date/${date}/user/${userId}`);
    return res.data;
}

export const getLogsByDateAndCategory = async (date, categoryId) => {
    const res = await axios.get(`/api/logs/date/${date}/category/${categoryId}`);
    return res.data;
}

export const getLogsByDateAndUserAndCategory = async (date, userId, categoryId) => {
    const res = await axios.get(`/api/logs/date/${date}/user/${userId}/category/${categoryId}`);
    return res.data;
}

