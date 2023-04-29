//this is the getWalletWalletProcessPsbt reducer function

import { GET_WALLET_WALLET_PROCESS_PSBT } from '../actions/types';

export const getWalletWalletProcessPsbt = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_WALLET_PROCESS_PSBT:
        return action.payload;
        default:
        return state;
    }
}