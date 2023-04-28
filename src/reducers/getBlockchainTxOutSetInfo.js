//this is the getBlockchainTxOutSetInfo reducer

import { GET_BLOCKCHAIN_TXOUTSETINFO } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_TXOUTSETINFO:
        return action.payload;
        default:
        return state;
    }
}