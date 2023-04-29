//this is the getWalletListUnspent reducer

import { GET_WALLET_LIST_UNSPENT } from '../actions/types';

export const getWalletListUnspent = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_UNSPENT:
        return action.payload;
        default:
        return state;
    }
}