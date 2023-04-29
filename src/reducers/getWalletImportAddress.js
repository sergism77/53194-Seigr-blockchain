//this is the getWalletImportAddress reducer

import { GET_WALLET_IMPORT_ADDRESS } from '../actions/types';

export const getWalletImportAddress = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_IMPORT_ADDRESS:
        return action.payload;
        default:
        return state;
    }
}