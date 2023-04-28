//this is the getBlockchainMempoolContents reducer

import { GET_BLOCKCHAIN_MEMPOOLCONTENTS } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_MEMPOOLCONTENTS:
        return action.payload;
        default:
        return state;
    }
}