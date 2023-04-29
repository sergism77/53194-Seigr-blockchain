//this is the getWalletGetAddressByLabel reducer:

import { GET_WALLET_GET_ADDRESS_BY_LABEL } from '../actions/types';

export const getWalletGetAddressByLabel = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_ADDRESS_BY_LABEL:
        return action.payload;
        default:
        return state;
    }
}