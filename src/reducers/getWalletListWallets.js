//this is the getWalletListWallets reducer

import { GET_WALLET_LIST_WALLETS } from '../actions/types';

export const getWalletListWallets = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_WALLETS:
        return action.payload;
        default:
        return state;
    }
}