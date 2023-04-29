//this is the getMiningSubmitBlock reducer

import { GET_MINING_SUBMITBLOCK } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MINING_SUBMITBLOCK:
        return action.payload;
        default:
        return state;
    }
}