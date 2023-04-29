//this is the getNetworkClearBanned reducer

import { GET_NETWORK_CLEARBANNED } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_CLEARBANNED:
        return action.payload;
        default:
        return state;
    }
}