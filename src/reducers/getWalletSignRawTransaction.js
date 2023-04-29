//this is the getWalletSignRawTransaction reducer

import { GET_WALLET_SIGN_RAW_TRANSACTION } from '../actions/types';

export const getWalletSignRawTransaction = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SIGN_RAW_TRANSACTION:
        return action.payload;
        default:
        return state;
    }
}