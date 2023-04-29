//this is the getWalletGetBalance reducer

import { GET_WALLET_GET_BALANCE } from '../actions/types';

export const getWalletGetBalance = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_BALANCE:
        return action.payload;
        default:
        return state;
    }
}