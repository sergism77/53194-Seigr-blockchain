//this is the getWalletSetAccount reducer

import { GET_WALLET_SET_ACCOUNT } from '../actions/types';

export const getWalletSetAccount = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SET_ACCOUNT:
        return action.payload;
        default:
        return state;
    }
}