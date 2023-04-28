//this is the wallet info action

import { GET_WALLET_INFO } from './types';
import axios from 'axios';

export const getWalletInfo = () => dispatch => {
    axios.get('/api/getwalletinfo')
        .then(res => {
            dispatch({
                type: GET_WALLET_INFO,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
