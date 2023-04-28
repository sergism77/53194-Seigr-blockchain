//this is the network actions file

import axios from 'axios';
import { GET_NETWORK_INFO, GET_NETWORK_INFO_SUCCESS, GET_NETWORK_INFO_FAILURE, GET_NETWORK_INFO_RESET } from './types';

const API_URL = 'http://localhost:53194/api';

export const getNetworkInfo = () => {
    return (dispatch) => {
        dispatch(getNetworkInfoLoading());
        axios.get(`${API_URL}/network/getnetworkinfo`)
            .then(response => {
                dispatch(getNetworkInfoSuccess(response.data));
            })
            .catch(error => {
                dispatch(getNetworkInfoFailure(error.response.data));
            });
    };
}

const getNetworkInfoLoading = () => ({
    type: GET_NETWORK_INFO
});

const getNetworkInfoSuccess = (data) => ({
    type: GET_NETWORK_INFO_SUCCESS,
    payload: data
});

const getNetworkInfoFailure = () => ({
    type: GET_NETWORK_INFO_FAILURE
});

export const resetGetNetworkInfo = () => ({
    type: GET_NETWORK_INFO_RESET
});
