//this is the getControlGetInfo reducer

import { GET_CONTROL_GETINFO } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_GETINFO:
        return action.payload;
        default:
        return state;
    }
}