//this is the getRawtransactionsFundRawTransaction reducer:

import { GET_RAWTRANSACTIONS_FUNDRAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_FUNDRAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}