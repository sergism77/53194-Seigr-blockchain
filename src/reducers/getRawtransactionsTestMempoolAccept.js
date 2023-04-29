//this is the getRawtransactionsTestMempoolAccept reducer

import { GET_RAWTRANSACTIONS_TESTMEMPOOLACCEPT } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RAWTRANSACTIONS_TESTMEMPOOLACCEPT:
        return action.payload;
        default:
        return state;
    }
}