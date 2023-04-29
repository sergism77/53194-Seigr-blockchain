//this is the getWalletImportPubKey reducer

import { GET_WALLET_IMPORT_PUB_KEY } from '../actions/types';

export const getWalletImportPubKey = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_IMPORT_PUB_KEY:
        return action.payload;
        default:
        return state;
    }
}