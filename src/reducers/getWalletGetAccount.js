//this is the getWalletGetAccount reducer

import { GET_WALLET_GET_ACCOUNT } from '../actions/types';

export const getWalletGetAccount = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_ACCOUNT:
        return action.payload;
        default:
        return state;
    }
}