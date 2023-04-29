//this is the getRawtransactionsDecodePsbt reducer

import { GET_RAWTRANSACTIONS_DECODEPSBT } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_DECODEPSBT:
        return action.payload;
        default:
        return state;
    }
}