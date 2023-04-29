//this is the getRawtransactionsSendRawTransaction reducer

import { GET_RAWTRANSACTIONS_SENDRAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_SENDRAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}