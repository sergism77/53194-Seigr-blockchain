//this is the getRawtransactionsConvertToPsbt reducer

import { GET_RAWTRANSACTIONS_CONVERTTOPSBT } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_CONVERTTOPSBT:
        return action.payload;
        default:
        return state;
    }
}