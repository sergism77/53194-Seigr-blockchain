//this is the getNetworkPing reducer

import { GET_NETWORK_PING } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_PING:
        return action.payload;
        default:
        return state;
    }
}