//this is the getWalletImportMulti reducer

import { GET_WALLET_IMPORT_MULTI } from '../actions/types';

export const getWalletImportMulti = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_IMPORT_MULTI:
        return action.payload;
        default:
        return state;
    }
}