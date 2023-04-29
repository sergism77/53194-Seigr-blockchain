//this is the getNetworkGetAddedNodeInfo reducer

import { GET_NETWORK_GETADDEDNODEINFO } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_GETADDEDNODEINFO:
        return action.payload;
        default:
        return state;
    }
}