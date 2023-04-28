//this is the reducer for the best block hash data

import { GET_BLOCKCHAIN_BEST_BLOCK_HASH } from '../actions/types';

const initialState = {
    blockchainBestBlockHash: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_BEST_BLOCK_HASH:
            return {
                ...state,
                blockchainBestBlockHash: action.payload
            };
        default:
            return state;
    }
}