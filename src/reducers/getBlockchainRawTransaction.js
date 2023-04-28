//this is the getBlockchainRawTransaction reducer

import { GET_BLOCKCHAIN_RAWTRANSACTION } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_RAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}