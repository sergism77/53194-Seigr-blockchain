//this is the getMiningPrioritiseTransaction reducer;

import { GET_MINING_PRIORITISETRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MINING_PRIORITISETRANSACTION:
        return action.payload;
        default:
        return state;
    }
}