//this is the getControlGetMemoryInfo reducer

import { GET_CONTROL_GETMEMORYINFO } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_GETMEMORYINFO:
        return action.payload;
        default:
        return state;
    }
}