//this is the getUtilEstimateSmartFee reducer

import { GET_UTIL_ESTIMATESMARTFEE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_UTIL_ESTIMATESMARTFEE:
        return action.payload;
        default:
        return state;
    }
}