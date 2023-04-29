//this is the getWalletListSinceBlock reducer

import { GET_WALLET_LIST_SINCE_BLOCK } from '../actions/types';

export const getWalletListSinceBlock = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_SINCE_BLOCK:
        return action.payload;
        default:
        return state;
    }
}