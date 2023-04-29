//this is the getWalletGetUnconfirmedBalance reducer

import { GET_WALLET_GET_UNCONFIRMED_BALANCE } from '../actions/types';

export const getWalletGetUnconfirmedBalance = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_UNCONFIRMED_BALANCE:
        return action.payload;
        default:
        return state;
    }
}