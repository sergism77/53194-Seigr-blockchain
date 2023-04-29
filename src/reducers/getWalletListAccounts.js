//this is the getWalletListAccounts reducer

import { GET_WALLET_LIST_ACCOUNTS } from '../actions/types';

export const getWalletListAccounts = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_ACCOUNTS:
        return action.payload;
        default:
        return state;
    }
}