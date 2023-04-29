//this is the getMiningGetMiningInfo reducer

import { GET_MINING_GETMININGINFO } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MINING_GETMININGINFO:
        return action.payload;
        default:
        return state;
    }
}