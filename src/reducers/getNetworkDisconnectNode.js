//this is the getNetworkDisconnectNode reducer

import { GET_NETWORK_DISCONNECTNODE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_DISCONNECTNODE:
        return action.payload;
        default:
        return state;
    }
}

