//this is the walletUtxosActions action creator

import { GET_WALLET_UTXOS } from './types';
import axios from 'axios';

export const getWalletUtxos = () => dispatch => {
    axios.get('/api/listunspent')
        .then(res => {
            dispatch({
                type: GET_WALLET_UTXOS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}