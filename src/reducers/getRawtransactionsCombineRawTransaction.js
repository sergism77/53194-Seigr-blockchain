//this is the getRawtransactionsCombineRawTransaction reducer

import { GET_RAWTRANSACTIONS_COMBINERAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_COMBINERAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}
