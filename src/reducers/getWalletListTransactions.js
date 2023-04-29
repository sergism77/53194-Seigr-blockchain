//this is the getWalletListTransactions reducer

import { GET_WALLET_LIST_TRANSACTIONS } from '../actions/types';

export const getWalletListTransactions = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_TRANSACTIONS:
        return action.payload;
        default:
        return state;
    }
}