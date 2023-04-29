//this is the getRawtransactionsGetRawTransaction reducer

import { GET_RAWTRANSACTIONS_GETRAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_GETRAWTRANSACTION:
        return action.payload;
        default:
        return state;
    }
}