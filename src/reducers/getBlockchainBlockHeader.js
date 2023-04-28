//this is the getBlockchainBlockHeader reducer

import { GET_BLOCKCHAIN_BLOCKHEADER } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_BLOCKHEADER:
        return action.payload;
        default:
        return state;
    }
}