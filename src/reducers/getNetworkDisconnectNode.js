//this is the getNetworkDisconnectNode action creator

import axios from "axios";
import { GET_NETWORK_DISCONNECTNODE } from "./types";
import { networkDisconnectNodeURL } from "./urls";

export const getNetworkDisconnectNode = (node) => (dispatch) => {
    axios
        .get(networkDisconnectNodeURL(node))
        .then((res) => {
            dispatch({
                type: GET_NETWORK_DISCONNECTNODE,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}