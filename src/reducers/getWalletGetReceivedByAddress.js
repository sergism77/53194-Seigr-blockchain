//this is the getWalletGetReceivedByAddress reducer:

import { GET_WALLET_GET_RECEIVED_BY_ADDRESS } from '../actions/types';

export const getWalletGetReceivedByAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_RECEIVED_BY_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}