//this is the getControlStop reducer

import { GET_CONTROL_STOP } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_STOP:
        return action.payload;
        default:
        return state;
    }
}