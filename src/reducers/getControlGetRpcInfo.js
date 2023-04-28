//this is the getControlGetRpcInfo reducer

import { GET_CONTROL_GETRPCINFO } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_GETRPCINFO:
        return action.payload;
        default:
        return state;
    }
}