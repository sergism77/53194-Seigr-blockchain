//this is the getWalletGetAccountAddress reducer

import { GET_WALLET_GET_ACCOUNT_ADDRESS } from '../actions/types';

export const getWalletGetAccountAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_GET_ACCOUNT_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}