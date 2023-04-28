//this is the getBlockchainBlockHash reducer

import { GET_BLOCKCHAIN_BLOCKHASH } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_BLOCKHASH:
        return action.payload;
        default:
        return state;
    }
}