//this is the getGeneratingGenerate reducer

import { GET_GENERATING_GENERATE } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_GENERATING_GENERATE:
        return action.payload;
        default:
        return state;
    }
}