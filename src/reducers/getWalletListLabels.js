//thi is the getWalletListLabels reducer

import { GET_WALLET_LIST_LABELS } from '../actions/types';

export const getWalletListLabels = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_LIST_LABELS:
        return action.payload;
        default:
        return state;
    }
}