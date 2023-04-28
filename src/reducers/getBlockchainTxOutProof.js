//this is the reducer for the blockchain tx out proof

import { GET_BLOCKCHAIN_TX_OUT_PROOF } from '../actions/types';

const initialState = {
    blockchainTxOutProof: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_TX_OUT_PROOF:
            return {
                ...state,
                blockchainTxOutProof: action.payload
            };
        default:
            return state;
    }
}