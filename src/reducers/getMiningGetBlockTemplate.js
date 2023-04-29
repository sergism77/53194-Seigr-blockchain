//this is the getMiningGetBlockTemplate reducer

import { GET_MINING_GETBLOCKTEMPLATE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MINING_GETBLOCKTEMPLATE:
        return action.payload;
        default:
        return state;
    }
}