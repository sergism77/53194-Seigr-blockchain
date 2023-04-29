//this is the getWalletZapWalletTxes reducer function

import { GET_WALLET_ZAP_WALLET_TXES } from '../actions/types';

export const getWalletZapWalletTxes = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_ZAP_WALLET_TXES:
        return action.payload;
        default:
        return state;
    }
}