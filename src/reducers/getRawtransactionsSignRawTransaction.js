//this is the getRawtransactionsSignRawTransaction reducer

import { GET_RAWTRANSACTIONS_SIGNRAWTRANSACTION } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_RAWTRANSACTIONS_SIGNRAWTRANSACTION:
      return action.payload;
    default:
      return state;
  }
}
