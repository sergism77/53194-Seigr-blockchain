//this is the reducer for the blockchain block

import { GET_BLOCKCHAIN_BLOCK } from '../actions/types';

const initialState = {
    blockchainBlock: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_BLOCK:
            return {
                ...state,
                blockchainBlock: action.payload
            };
        default:
            return state;
    }
}