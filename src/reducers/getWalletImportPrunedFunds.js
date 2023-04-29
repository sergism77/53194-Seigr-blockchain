//this is the getWalletImportPrunedFunds reducer:

import { GET_WALLET_IMPORT_PRUNED_FUNDS } from '../actions/types';

export const getWalletImportPrunedFunds = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_IMPORT_PRUNED_FUNDS:
        return action.payload;
        default:
        return state;
    }
}