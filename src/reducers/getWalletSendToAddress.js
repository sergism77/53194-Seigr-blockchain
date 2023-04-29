//this is the getWalletSendToAddress reducer

import { GET_WALLET_SEND_TO_ADDRESS } from '../actions/types';

export const getWalletSendToAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_SEND_TO_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}