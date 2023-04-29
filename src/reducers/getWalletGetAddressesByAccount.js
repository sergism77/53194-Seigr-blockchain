//this is the getWalletGetAddressesByAccount reducer:

import { GET_WALLET_GET_ADDRESSES_BY_ACCOUNT } from '../actions/types';

export const getWalletGetAddressesByAccount = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_ADDRESSES_BY_ACCOUNT:
        return action.payload;
        default:
        return state;
    }
}