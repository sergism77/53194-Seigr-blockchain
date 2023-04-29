//this is the getNetworkGetNetTotals reducer

import { GET_NETWORK_GETNETTOTALS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_GETNETTOTALS:
        return action.payload;
        default:
        return state;
    }
}