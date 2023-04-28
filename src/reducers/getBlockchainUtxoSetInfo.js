//this is the getBlockchainUtxoSetInfo reducer

import { GET_BLOCKCHAIN_UTXOSETINFO } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_UTXOSETINFO:
        return action.payload;
        default:
        return state;
    }
}