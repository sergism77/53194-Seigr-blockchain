//this is the walletTransactionsActions file

import axios from 'axios';
import { GET_WALLET_TRANSACTIONS, GET_WALLET_TRANSACTIONS_LOADING, GET_WALLET_TRANSACTIONS_ERROR } from './types';

export const getWalletTransactions = () => dispatch => {
    dispatch(setWalletTransactionsLoading());
    axios.get('/api/listtransactions')
        .then(res => {
            dispatch({
                type: GET_WALLET_TRANSACTIONS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_WALLET_TRANSACTIONS_ERROR,
                payload: err.response
            })
        })
}