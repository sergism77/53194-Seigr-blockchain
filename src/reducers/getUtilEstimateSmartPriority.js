//this is the getUtilEstimateSmartPriority reducer

import { GET_UTIL_ESTIMATESMARTPRIORITY } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_UTIL_ESTIMATESMARTPRIORITY:
        return action.payload;
        default:
        return state;
    }
}