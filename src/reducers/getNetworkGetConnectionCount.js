//this is the getNetworkGetConnectionCount reducer

import { GET_NETWORK_GETCONNECTIONCOUNT } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_GETCONNECTIONCOUNT:
        return action.payload;
        default:
        return state;
    }
}