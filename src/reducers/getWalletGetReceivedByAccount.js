//this is the getWalletGetReceivedByAccount reducer:

import { GET_WALLET_GET_RECEIVED_BY_ACCOUNT } from '../actions/types';

export const getWalletGetReceivedByAccount = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_RECEIVED_BY_ACCOUNT:
        return action.payload;
        default:
        return state;
    }
}