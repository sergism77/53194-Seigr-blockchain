//this is the getWalletGetTransaction reducer

import { GET_WALLET_GET_TRANSACTION } from '../actions/types';

export const getWalletGetTransaction = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_TRANSACTION:
        return action.payload;
        default:
        return state;
    }
}