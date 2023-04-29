//this is the getWalletGetWalletInfo reducer

import { GET_WALLET_GET_WALLET_INFO } from '../actions/types';

export const getWalletGetWalletInfo = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_WALLET_INFO:
        return action.payload;
        default:
        return state;
    }
}