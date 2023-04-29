//this is the getWalletKeyPoolRefill reducer:

import { GET_WALLET_KEY_POOL_REFILL } from '../actions/types';

export const getWalletKeyPoolRefill = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_KEY_POOL_REFILL:
        return action.payload;
        default:
        return state;
    }
}