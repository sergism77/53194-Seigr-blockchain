//this is the getNetworkGetPeerInfo reducer

import { GET_NETWORK_GETPEERINFO } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_GETPEERINFO:
        return action.payload;
        default:
        return state;
    }
}