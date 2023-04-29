//this is the getWalletRemovePrunedFunds reducer:

import { GET_WALLET_REMOVE_PRUNED_FUNDS } from '../actions/types';

export const getWalletRemovePrunedFunds = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_REMOVE_PRUNED_FUNDS:
        return action.payload;
        default:
        return state;
    }
}