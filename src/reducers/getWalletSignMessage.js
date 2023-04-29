//this is the getWalletSignMessage reducer

import { GET_WALLET_SIGN_MESSAGE } from '../actions/types';

export const getWalletSignMessage = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SIGN_MESSAGE:
        return action.payload;
        default:
        return state;
    }
}