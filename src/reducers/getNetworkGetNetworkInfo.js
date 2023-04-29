//this is the getNetworkGetNetworkInfo reducer


import { GET_NETWORK_GETNETWORKINFO } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_NETWORK_GETNETWORKINFO:
        return action.payload;
        default:
        return state;
    }
}