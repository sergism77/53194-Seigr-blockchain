//this is the reducer for the chain tips data

import { GET_BLOCKCHAIN_CHAIN_TIPS } from '../actions/types';

const initialState = {
    blockchainChainTips: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_CHAIN_TIPS:
            return {
                ...state,
                blockchainChainTips: action.payload
            };
        default:
            return state;
    }
}