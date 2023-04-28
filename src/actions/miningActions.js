//this is the mining actions file

import axios from 'axios';
import { GET_MINING_INFO, GET_MINING_INFO_SUCCESS, GET_MINING_INFO_FAILURE, GET_MINING_INFO_RESET } from './types';

const API_URL = 'http://localhost:53194/api';

export const getMiningInfo = () => {
    return (dispatch) => {
        dispatch(getMiningInfoLoading());
        axios.get(`${API_URL}/mining/getmininginfo`)
            .then(response => {
                dispatch(getMiningInfoSuccess(response.data));
            })
            .catch(error => {
                dispatch(getMiningInfoFailure(error.response.data));
            });
    };
}

const getMiningInfoLoading = () => ({
    type: GET_MINING_INFO
});

const getMiningInfoSuccess = (data) => ({
    type: GET_MINING_INFO_SUCCESS,
    payload: data
});

const getMiningInfoFailure = () => ({
    type: GET_MINING_INFO_FAILURE
});

export const resetGetMiningInfo = () => ({
    type: GET_MINING_INFO_RESET
});
