//this is the getBlockchainVerifyChain reducer

import { GET_BLOCKCHAIN_VERIFYCHAIN } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_VERIFYCHAIN:
        return action.payload;
        default:
        return state;
    }
}