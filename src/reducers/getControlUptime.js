//this is the getControlUptime reducer

import { GET_CONTROL_UPTIME } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_UPTIME:
        return action.payload;
        default:
        return state;
    }
}