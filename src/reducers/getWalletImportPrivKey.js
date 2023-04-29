//this is the getWalletImportPrivKey reducer

import { GET_WALLET_IMPORT_PRIV_KEY } from '../actions/types';

export const getWalletImportPrivKey = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_IMPORT_PRIV_KEY:
        return action.payload;
        default:
        return state;
    }
}