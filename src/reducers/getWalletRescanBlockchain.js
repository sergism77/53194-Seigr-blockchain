//this is the getWalletRescanBlockchain reducer function:

import { GET_WALLET_RESCAN_BLOCKCHAIN } from '../actions/types';

export const getWalletRescanBlockchain = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_RESCAN_BLOCKCHAIN:
        return action.payload;
        default:
        return state;
    }
}