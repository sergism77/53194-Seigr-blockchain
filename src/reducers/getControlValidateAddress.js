//this is the getControlValidateAddress reducer

import { GET_CONTROL_VALIDATEADDRESS } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case GET_CONTROL_VALIDATEADDRESS:
        return action.payload;
        default:
        return state;
    }
}