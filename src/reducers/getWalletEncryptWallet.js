//this is the getWalletEncryptWallet reducer

import { GET_WALLET_ENCRYPT_WALLET } from '../actions/types';

export const getWalletEncryptWallet = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_ENCRYPT_WALLET:
        return action.payload;
        default:
        return state;
    }
}

