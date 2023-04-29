//this is the getWalletUnloadWallet reducer

import { GET_WALLET_UNLOAD_WALLET } from '../actions/types';

export const getWalletUnloadWallet = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_UNLOAD_WALLET:
        return action.payload;
        default:
        return state;
    }
}