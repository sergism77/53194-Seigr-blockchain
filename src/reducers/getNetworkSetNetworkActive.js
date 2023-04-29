//this is the getNetworkSetNetworkActive reducer

import { GET_NETWORK_SETNETWORKACTIVE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_SETNETWORKACTIVE:
        return action.payload;
        default:
        return state;
    }
}