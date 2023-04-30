//this is the tokenBalancesByAddress API call

import axios from 'axios';

export const tokenBalancesByAddress = (address) => {
    return axios.get(`api/tokenBalancesByAddress/${address}`)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const tokenBalancesByAddressAndDate = (address, date) => {
    return axios.get(`api/tokenBalancesByAddress/${address}/${date}`)
        .then(res => res.data)
        .catch(err => console.log(err));
};

export const tokenBalancesByAddressAndDateRange = (address, startDate, endDate) => {
    return axios.get(`api/tokenBalancesByAddress/${address}/${startDate}/${endDate}`)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export const tokenBalancesByAddressAndDateRangeAndToken = (address, startDate, endDate, token) => {
    return axios.get(`api/tokenBalancesByAddress/${address}/${startDate}/${endDate}/${token}`)
        .then(res => res.data)
        .catch(err => console.log(err));
}