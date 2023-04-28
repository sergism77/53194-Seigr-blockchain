//this is the reducer for the mempool info data

import { GET_BLOCKCHAIN_MEMPOOL_INFO } from '../actions/types';

const initialState = {
    blockchainMempoolInfo: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_MEMPOOL_INFO:
            return {
                ...state,
                blockchainMempoolInfo: action.payload
            };
        default:
            return state;
    }
}