// this is the blockchain actions file

import axios from 'axios';
import { GET_BLOCKCHAIN_INFO, GET_BLOCKCHAIN_INFO_SUCCESS, GET_BLOCKCHAIN_INFO_FAILURE, GET_BLOCKCHAIN_INFO_RESET } from './types';

const API_URL = 'http://localhost:53194/api';

export const getBlockchainInfo = () => {
    return (dispatch) => {
        dispatch(getBlockchainInfoLoading());
        axios.get(`${API_URL}/blockchain/getblockchaininfo`)
            .then(response => {
                dispatch(getBlockchainInfoSuccess(response.data));
            })
            .catch(error => {
                dispatch(getBlockchainInfoFailure(error.response.data));
            });
    };
}

const getBlockchainInfoLoading = () => ({
    type: GET_BLOCKCHAIN_INFO
});

const getBlockchainInfoSuccess = (data) => ({
    type: GET_BLOCKCHAIN_INFO_SUCCESS,
    payload: data
});

const getBlockchainInfoFailure = () => ({
    type: GET_BLOCKCHAIN_INFO_FAILURE
});

export const resetGetBlockchainInfo = () => ({
    type: GET_BLOCKCHAIN_INFO_RESET
});

