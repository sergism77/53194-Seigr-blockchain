//this is the getRawtransactionsDecodeRawTransaction reducer

import { GET_RAWTRANSACTIONS_DECODERAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_DECODERAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}