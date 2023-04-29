//this is the getNetworkSetBan reducer, it is used to set the ban of a node

import { GET_NETWORK_SETBAN } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_SETBAN:
        return action.payload;
        default:
        return state;
    }
}