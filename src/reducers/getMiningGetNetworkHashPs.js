//this is the getMiningGetNetworkHashPs reducer

import { GET_MINING_GETNETWORKHASHPS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_MINING_GETNETWORKHASHPS:
        return action.payload;
        default:
        return state;
    }
}