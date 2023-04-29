//this is the getWalletGetNewAddress reducer

import { GET_WALLET_GET_NEW_ADDRESS } from '../actions/types';

export const getWalletGetNewAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_NEW_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}