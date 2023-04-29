//this is the getNetworkAddNode reducer

import { GET_NETWORK_ADDNODE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_ADDNODE:
        return action.payload;
        default:
        return state;
    }
}