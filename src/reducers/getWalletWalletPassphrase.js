//this is the getWalletWalletPassphrase reducer

import { GET_WALLET_WALLET_PASSPHRASE } from '../actions/types';

export const getWalletWalletPassphrase = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_WALLET_PASSPHRASE:
        return action.payload;
        default:
        return state;
    }
}