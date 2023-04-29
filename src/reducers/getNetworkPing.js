//this is the getNetworkPing action creator

import axios from "axios";
import { GET_NETWORK_PING } from "./types";
import { networkPingURL } from "./urls";

export const getNetworkPing = () => (dispatch) => {
    axios
        .get(networkPingURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_PING,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}