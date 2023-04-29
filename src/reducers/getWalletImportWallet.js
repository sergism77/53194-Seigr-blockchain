//this is the getWalletImportWallet reducer

import { GET_WALLET_IMPORT_WALLET } from '../actions/types';

export const getWalletImportWallet = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_IMPORT_WALLET:
        return action.payload;
        default:
        return state;
    }
}