//this is the getControlVersion reducer

import { GET_CONTROL_VERSION } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_VERSION:
        return action.payload;
        default:
        return state;
    }
}