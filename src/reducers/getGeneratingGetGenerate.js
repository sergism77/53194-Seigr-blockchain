//this is the getGeneratingGetGenerate reducer

import { GET_GENERATING_GETGENERATE } from "../actions/types";


export default function(state = {}, action) {
    switch (action.type) {
        case GET_GENERATING_GETGENERATE:
        return action.payload;
        default:
        return state;
    }
}