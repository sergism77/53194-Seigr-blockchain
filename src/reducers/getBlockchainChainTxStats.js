//this is the getBlockchainChainTxStats reducer

import { GET_BLOCKCHAIN_CHAINTXSTATS } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_CHAINTXSTATS:
        return action.payload;
        default:
        return state;
    }
}