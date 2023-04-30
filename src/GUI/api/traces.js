//this is the traces api

import axios from 'axios';

export const getTraces = async () => {
    const res = await axios.get('/api/traces');
    return res.data;
}

export const getTrace = async (id) => {
    const res = await axios.get(`/api/traces/${id}`);
    return res.data;
}

export const createTrace = async (trace) => {
    const res = await axios.post('/api/traces', trace);
    return res.data;
}

export const updateTrace = async (trace) => {
    const res = await axios.put(`/api/traces/${trace._id}`, trace);
    return res.data;
}

export const deleteTrace = async (id) => {
    const res = await axios.delete(`/api/traces/${id}`);
    return res.data;
}

export const getTracesByUser = async (id) => {
    const res = await axios.get(`/api/traces/user/${id}`);
    return res.data;
}

export const getTracesByCategory = async (id) => {
    const res = await axios.get(`/api/traces/category/${id}`);
    return res.data;
}

export const getTracesByDate = async (date) => {
    const res = await axios.get(`/api/traces/date/${date}`);
    return res.data;
}

export const getTracesByDateRange = async (date1, date2) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByUserAndCategory = async (userId, categoryId) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTracesByUserAndDate = async (userId, date) => {
    const res = await axios.get(`/api/traces/user/${userId}/date/${date}`);
    return res.data;
}

export const getTracesByUserAndDateRange = async (userId, date1, date2) => {
    const res = await axios.get(`/api/traces/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByCategoryAndDate = async (categoryId, date) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTracesByCategoryAndDateRange = async (categoryId, date1, date2) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByUserAndCategoryAndDate = async (userId, categoryId, date) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTracesByUserAndCategoryAndDateRange = async (userId, categoryId, date1, date2) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByUserAndDateAndCategory = async (userId, date, categoryId) => {
    const res = await axios.get(`/api/traces/user/${userId}/date/${date}/category/${categoryId}`);
    return res.data;
}

export const getTracesByUserAndDateRangeAndCategory = async (userId, date1, date2, categoryId) => {
    const res = await axios.get(`/api/traces/user/${userId}/date/${date1}/${date2}/category/${categoryId}`);
    return res.data;
}

export const getTracesByCategoryAndDateAndUser = async (categoryId, date, userId) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/date/${date}/user/${userId}`);
    return res.data;
}

export const getTracesByCategoryAndDateRangeAndUser = async (categoryId, date1, date2, userId) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/date/${date1}/${date2}/user/${userId}`);
    return res.data;
}

export const getTracesByCategoryAndUserAndDate = async (categoryId, userId, date) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/user/${userId}/date/${date}`);
    return res.data;
}

export const getTracesByCategoryAndUserAndDateRange = async (categoryId, userId, date1, date2) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByDateAndUserAndCategory = async (date, userId, categoryId) => {
    const res = await axios.get(`/api/traces/date/${date}/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTracesByDateRangeAndUserAndCategory = async (date1, date2, userId, categoryId) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTracesByDateAndCategoryAndUser = async (date, categoryId, userId) => {
    const res = await axios.get(`/api/traces/date/${date}/category/${categoryId}/user/${userId}`);
    return res.data;
}

export const getTracesByDateRangeAndCategoryAndUser = async (date1, date2, categoryId, userId) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}/category/${categoryId}/user/${userId}`);
    return res.data;
}

export const getTracesByUserAndCategoryAndDateAndTime = async (userId, categoryId, date, time) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}/date/${date}/time/${time}`);
    return res.data;
}

export const getTracesByUserAndCategoryAndDateRangeAndTime = async (userId, categoryId, date1, date2, time) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}/date/${date1}/${date2}/time/${time}`);
    return res.data;
}

export const getTracesByUserAndDateAndCategoryAndTime = async (userId, date, categoryId, time) => {
    const res = await axios.get(`/api/traces/user/${userId}/date/${date}/category/${categoryId}/time/${time}`);
    return res.data;
}

export const getTracesByUserAndDateRangeAndCategoryAndTime = async (userId, date1, date2, categoryId, time) => {
    const res = await axios.get(`/api/traces/user/${userId}/date/${date1}/${date2}/category/${categoryId}/time/${time}`);
    return res.data;
}

export const getTracesByCategoryAndUserAndDateAndTime = async (categoryId, userId, date, time) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/user/${userId}/date/${date}/time/${time}`);
    return res.data;
}

export const getTracesByCategoryAndUserAndDateRangeAndTime = async (categoryId, userId, date1, date2, time) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/user/${userId}/date/${date1}/${date2}/time/${time}`);
    return res.data;
}

export const getTracesByCategoryAndDateAndUserAndTime = async (categoryId, date, userId, time) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/date/${date}/user/${userId}/time/${time}`);
    return res.data;
}

export const getTracesByCategoryAndDateRangeAndUserAndTime = async (categoryId, date1, date2, userId, time) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/date/${date1}/${date2}/user/${userId}/time/${time}`);
    return res.data;
}

export const getTracesByDateAndUserAndCategoryAndTime = async (date, userId, categoryId, time) => {
    const res = await axios.get(`/api/traces/date/${date}/user/${userId}/category/${categoryId}/time/${time}`);
    return res.data;
}

export const getTracesByDateRangeAndUserAndCategoryAndTime = async (date1, date2, userId, categoryId, time) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}/user/${userId}/category/${categoryId}/time/${time}`);
    return res.data;
}

export const getTracesByDateAndCategoryAndUserAndTime = async (date, categoryId, userId, time) => {
    const res = await axios.get(`/api/traces/date/${date}/category/${categoryId}/user/${userId}/time/${time}`);
    return res.data;
}

export const getTracesByDateRangeAndCategoryAndUserAndTime = async (date1, date2, categoryId, userId, time) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}/category/${categoryId}/user/${userId}/time/${time}`);
    return res.data;
}

export const getTracesByUserAndCategoryAndTimeAndDate = async (userId, categoryId, time, date) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}/time/${time}/date/${date}`);
    return res.data;
}

export const getTracesByUserAndCategoryAndTimeAndDateRange = async (userId, categoryId, time, date1, date2) => {
    const res = await axios.get(`/api/traces/user/${userId}/category/${categoryId}/time/${time}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByUserAndTimeAndCategoryAndDate = async (userId, time, categoryId, date) => {
    const res = await axios.get(`/api/traces/user/${userId}/time/${time}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTracesByUserAndTimeAndCategoryAndDateRange = async (userId, time, categoryId, date1, date2) => {
    const res = await axios.get(`/api/traces/user/${userId}/time/${time}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByCategoryAndUserAndTimeAndDate = async (categoryId, userId, time, date) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/user/${userId}/time/${time}/date/${date}`);
    return res.data;
}

export const getTracesByCategoryAndUserAndTimeAndDateRange = async (categoryId, userId, time, date1, date2) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/user/${userId}/time/${time}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByCategoryAndTimeAndUserAndDate = async (categoryId, time, userId, date) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/time/${time}/user/${userId}/date/${date}`);
    return res.data;
}

export const getTracesByCategoryAndTimeAndUserAndDateRange = async (categoryId, time, userId, date1, date2) => {
    const res = await axios.get(`/api/traces/category/${categoryId}/time/${time}/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByTimeAndUserAndCategoryAndDate = async (time, userId, categoryId, date) => {
    const res = await axios.get(`/api/traces/time/${time}/user/${userId}/category/${categoryId}/date/${date}`);
    return res.data;
}

export const getTracesByTimeAndUserAndCategoryAndDateRange = async (time, userId, categoryId, date1, date2) => {
    const res = await axios.get(`/api/traces/time/${time}/user/${userId}/category/${categoryId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByTimeAndCategoryAndUserAndDate = async (time, categoryId, userId, date) => {
    const res = await axios.get(`/api/traces/time/${time}/category/${categoryId}/user/${userId}/date/${date}`);
    return res.data;
}

export const getTracesByTimeAndCategoryAndUserAndDateRange = async (time, categoryId, userId, date1, date2) => {
    const res = await axios.get(`/api/traces/time/${time}/category/${categoryId}/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTracesByDateAndTimeAndUserAndCategory = async (date, time, userId, categoryId) => {
    const res = await axios.get(`/api/traces/date/${date}/time/${time}/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTracesByDateRangeAndTimeAndUserAndCategory = async (date1, date2, time, userId, categoryId) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}/time/${time}/user/${userId}/category/${categoryId}`);
    return res.data;
}

export const getTracesByDateAndTimeAndCategoryAndUser = async (date, time, categoryId, userId) => {
    const res = await axios.get(`/api/traces/date/${date}/time/${time}/category/${categoryId}/user/${userId}`);
    return res.data;
}

export const getTracesByDateRangeAndTimeAndCategoryAndUser = async (date1, date2, time, categoryId, userId) => {
    const res = await axios.get(`/api/traces/date/${date1}/${date2}/time/${time}/category/${categoryId}/user/${userId}`);
    return res.data;
}
