//this is the getUtilCreateMultiSig reducer

import { GET_UTIL_CREATEMULTISIG } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_UTIL_CREATEMULTISIG:
        return action.payload;
        default:
        return state;
    }
}