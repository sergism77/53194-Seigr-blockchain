//this is the getNetworkListBanned reducer

import { GET_NETWORK_LISTBANNED } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_LISTBANNED:
        return action.payload;
        default:
        return state;
    }
}