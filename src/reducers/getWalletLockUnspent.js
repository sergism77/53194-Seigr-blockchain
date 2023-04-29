//this is the getWalletLockUnspent reducer

import { GET_WALLET_LOCK_UNSPENT } from '../actions/types';

export const getWalletLockUnspent = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LOCK_UNSPENT:
        return action.payload;
        default:
        return state;
    }
}