//this is the reducer for the blockchain tx out

import { GET_BLOCKCHAIN_TX_OUT } from '../actions/types';

const initialState = {
    blockchainTxOut: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_TX_OUT:
            return {
                ...state,
                blockchainTxOut: action.payload
            };
        default:
            return state;
    }
}