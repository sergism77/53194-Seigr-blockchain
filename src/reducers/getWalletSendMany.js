//this is the getWalletSendMany reducer

import { GET_WALLET_SEND_MANY } from '../actions/types';

export const getWalletSendMany = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SEND_MANY:
        return action.payload;
        default:
        return state;
    }
}