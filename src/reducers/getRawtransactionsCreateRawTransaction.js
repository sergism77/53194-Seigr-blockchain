//this is the getRawtransactionsCreateRawTransaction reducer

import { GET_RAWTRANSACTIONS_CREATERAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_CREATERAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}