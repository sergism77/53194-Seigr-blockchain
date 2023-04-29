//this is the getWalletWalletLock reducer

import { GET_WALLET_WALLET_LOCK } from '../actions/types';

export const getWalletWalletLock = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_WALLET_LOCK:
        return action.payload;
        default:
        return state;
    }
}