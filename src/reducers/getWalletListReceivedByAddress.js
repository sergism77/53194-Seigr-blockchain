//this is the getWalletListReceivedByAddress reducer

import { GET_WALLET_LIST_RECEIVED_BY_ADDRESS } from '../actions/types';

export const getWalletListReceivedByAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_RECEIVED_BY_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}