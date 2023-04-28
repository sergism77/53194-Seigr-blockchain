//this is the reducer for the blockchain info data

import { GET_BLOCKCHAIN_BLOCKCHAIN_INFO } from '../actions/types';

const initialState = {
    blockchainBlockchainInfo: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_BLOCKCHAIN_INFO:
            return {
                ...state,
                blockchainBlockchainInfo: action.payload
            };
        default:
            return state;
    }
}
