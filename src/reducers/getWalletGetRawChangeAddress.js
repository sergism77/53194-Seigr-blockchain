//this is the getWalletGetRawChangeAddress reducer

import { GET_WALLET_GET_RAW_CHANGE_ADDRESS } from '../actions/types';

export const getWalletGetRawChangeAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_RAW_CHANGE_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}