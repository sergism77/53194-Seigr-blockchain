//this is the getWalletSetLabel reducer

import { GET_WALLET_SET_LABEL } from '../actions/types';

export const getWalletSetLabel = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SET_LABEL:
        return action.payload;
        default:
        return state;
    }
}