//this is the getWalletSetTxFee reducer

import { GET_WALLET_SET_TX_FEE } from '../actions/types';

export const getWalletSetTxFee = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SET_TX_FEE:
        return action.payload;
        default:
        return state;
    }
}