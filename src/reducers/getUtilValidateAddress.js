//this is the getUtilValidateAddress reducer

import { GET_UTIL_VALIDATEADDRESS } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_UTIL_VALIDATEADDRESS:
        return action.payload;
        default:
        return state;
    }
}