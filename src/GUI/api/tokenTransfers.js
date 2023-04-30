//this is the tokenTransfer api

import axios from 'axios';

export const getTokenTransfers = async () => {
    const res = await axios.get(`/api/tokenTransfers`);
    return res.data;
}

export const getTokenTransfersByUser = async (userId) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}`);
    return res.data;
}

export const getTokenTransfersByToken = async (tokenId) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}`);
    return res.data;
}

export const getTokenTransfersByDate = async (date) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date}`);
    return res.data;
}

export const getTokenTransfersByDateRange = async (date1, date2) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date1}/${date2}`);
    return res.data;
}

export const getTokenTransfersByUserAndToken = async (userId, tokenId) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}`);
    return res.data;
}

export const getTokenTransfersByUserAndDate = async (userId, date) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateRange = async (userId, date1, date2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDate = async (tokenId, date) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateRange = async (tokenId, date1, date2) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDate = async (userId, tokenId, date) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateRange = async (userId, tokenId, date1, date2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date1}/${date2}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateRangeAndType = async (userId, tokenId, date1, date2, type) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateRangeAndType = async (userId, date1, date2, type) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateRangeAndType = async (tokenId, date1, date2, type) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByDateRangeAndType = async (date1, date2, type) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date1}/${date2}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndType = async (userId, tokenId, type) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByUserAndType = async (userId, type) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByTokenAndType = async (tokenId, type) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByType = async (type) => {
    const res = await axios.get(`/api/tokenTransfers/type/${type}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateAndType = async (userId, tokenId, date, type) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateAndType = async (userId, date, type) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateAndType = async (tokenId, date, type) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByDateAndType = async (date, type) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date}/type/${type}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateRangeAndTypeAndAmount = async (userId, tokenId, date1, date2, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date1}/${date2}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateRangeAndTypeAndAmount = async (userId, date1, date2, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date1}/${date2}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateRangeAndTypeAndAmount = async (tokenId, date1, date2, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date1}/${date2}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByDateRangeAndTypeAndAmount = async (date1, date2, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date1}/${date2}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndTypeAndAmount = async (userId, tokenId, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByUserAndTypeAndAmount = async (userId, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByTokenAndTypeAndAmount = async (tokenId, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByTypeAndAmount = async (type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateAndTypeAndAmount = async (userId, tokenId, date, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateAndTypeAndAmount = async (userId, date, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateAndTypeAndAmount = async (tokenId, date, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByDateAndTypeAndAmount = async (date, type, amount) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date}/type/${type}/amount/${amount}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateRangeAndTypeAndAmountRange = async (userId, tokenId, date1, date2, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date1}/${date2}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateRangeAndTypeAndAmountRange = async (userId, date1, date2, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date1}/${date2}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateRangeAndTypeAndAmountRange = async (tokenId, date1, date2, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date1}/${date2}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByDateRangeAndTypeAndAmountRange = async (date1, date2, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date1}/${date2}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndTypeAndAmountRange = async (userId, tokenId, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByUserAndTypeAndAmountRange = async (userId, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByTokenAndTypeAndAmountRange = async (tokenId, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByTypeAndAmountRange = async (type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByUserAndTokenAndDateAndTypeAndAmountRange = async (userId, tokenId, date, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/token/${tokenId}/date/${date}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByUserAndDateAndTypeAndAmountRange = async (userId, date, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/user/${userId}/date/${date}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByTokenAndDateAndTypeAndAmountRange = async (tokenId, date, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/token/${tokenId}/date/${date}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}

export const getTokenTransfersByDateAndTypeAndAmountRange = async (date, type, amount1, amount2) => {
    const res = await axios.get(`/api/tokenTransfers/date/${date}/type/${type}/amount/${amount1}/${amount2}`);
    return res.data;
}
