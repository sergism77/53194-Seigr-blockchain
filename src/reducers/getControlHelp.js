//this is the getControlHelp reducer

import { GET_CONTROL_HELP } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_HELP:
        return action.payload;
        default:
        return state;
    }
}