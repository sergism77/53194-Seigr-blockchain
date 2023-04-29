//this is the getNetworkGetPeerInfo action creator

import axios from "axios";
import { GET_NETWORK_GETPEERINFO } from "./types";
import { networkGetPeerInfoURL } from "./urls";

export const getNetworkGetPeerInfo = () => (dispatch) => {
    axios
        .get(networkGetPeerInfoURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_GETPEERINFO,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}