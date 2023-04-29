//this is the getRawtransactionsDecodeScript reducer

import { GET_RAWTRANSACTIONS_DECODESCRIPT } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_DECODESCRIPT:
        return action.payload;
        default:
        return state;
    }
}

