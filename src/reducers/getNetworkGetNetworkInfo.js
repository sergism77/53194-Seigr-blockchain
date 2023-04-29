//this is the getNetworkGetNetworkInfo action creator

import axios from "axios";
import { GET_NETWORK_GETNETWORKINFO } from "./types";
import { networkGetNetworkInfoURL } from "./urls";

export const getNetworkGetNetworkInfo = () => (dispatch) => {
    axios
        .get(networkGetNetworkInfoURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_GETNETWORKINFO,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}