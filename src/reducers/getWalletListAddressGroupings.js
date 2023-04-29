//this is the getWalletListAddressGroupings reducer

import { GET_WALLET_LIST_ADDRESS_GROUPINGS } from '../actions/types';

export const getWalletListAddressGroupings = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_ADDRESS_GROUPINGS:
        return action.payload;
        default:
        return state;
    }
}