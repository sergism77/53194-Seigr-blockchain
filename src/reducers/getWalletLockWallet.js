//this is the getWalletLockWallet reducer

import { GET_WALLET_LOCK_WALLET } from '../actions/types';

export const getWalletLockWallet = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LOCK_WALLET:
        return action.payload;
        default:
        return state;
    }
}