//this is the getWalletListReceivedByAccount reducer

import { GET_WALLET_LIST_RECEIVED_BY_ACCOUNT } from '../actions/types';

export const getWalletListReceivedByAccount = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_RECEIVED_BY_ACCOUNT:
        return action.payload;
        default:
        return state;
    }
}