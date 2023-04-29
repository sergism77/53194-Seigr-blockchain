//this is the getUtilVerifyMessage reducer

import { GET_UTIL_VERIFYMESSAGE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_UTIL_VERIFYMESSAGE:
        return action.payload;
        default:
        return state;
    }
}