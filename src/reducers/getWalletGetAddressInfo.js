//this is the getWalletGetAddressInfo reducer

import { GET_WALLET_GET_ADDRESS_INFO } from '../actions/types';

export const getWalletGetAddressInfo = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_ADDRESS_INFO:
        return action.payload;
        default:
        return state;
    }
}