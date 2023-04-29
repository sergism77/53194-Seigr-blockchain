//this is the getWalletListLockUnspent reducer:

import { GET_WALLET_LIST_LOCK_UNSPENT } from '../actions/types';

export const getWalletListLockUnspent = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_LOCK_UNSPENT:
        return action.payload;
        default:
        return state;
    }
}