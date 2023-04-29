//this is the getWalletWalletCreateFundedPsbt reducer:

import { GET_WALLET_WALLET_CREATE_FUNDED_PSBT } from '../actions/types';

export const getWalletWalletCreateFundedPsbt = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_WALLET_CREATE_FUNDED_PSBT:
        return action.payload;
        default:
        return state;
    }
}