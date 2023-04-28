//this is the reducer for the raw mempool data

import { GET_BLOCKCHAIN_RAW_MEMPOOL } from '../actions/types';

const initialState = {
    blockchainRawMempool: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_RAW_MEMPOOL:
            return {
                ...state,
                blockchainRawMempool: action.payload
            };
        default:
            return state;
    }
}

