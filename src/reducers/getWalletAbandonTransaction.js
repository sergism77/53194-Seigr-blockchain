//this is the getWalletAbandonTransaction reducer

import { GET_WALLET_ABANDONTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_WALLET_ABANDONTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}