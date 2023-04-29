//this is the getRawtransactionsUTXOUpdatePSBT reducer

import { GET_RAWTRANSACTIONS_UTXOUPDATEPSBT } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_UTXOUPDATEPSBT:
        return action.payload;
        default:
        return state;
    }
}