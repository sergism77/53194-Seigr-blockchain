//this is the reducer for the difficulty data

import { GET_BLOCKCHAIN_DIFFICULTY } from '../actions/types';

const initialState = {
    blockchainDifficulty: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BLOCKCHAIN_DIFFICULTY:
            return {
                ...state,
                blockchainDifficulty: action.payload
            };
        default:
            return state;
    }
}