//this is the getBlockchainVerifyTxOutProof reducer

import { GET_BLOCKCHAIN_VERIFYTXOUTPROOF } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_BLOCKCHAIN_VERIFYTXOUTPROOF:
        return action.payload;
        default:
        return state;
    }
}