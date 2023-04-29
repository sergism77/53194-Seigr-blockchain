//this is the getNetworkGetConnectionCount action creator:

import axios from "axios";
import { GET_NETWORK_GETCONNECTIONCOUNT } from "./types";
import { networkGetConnectionCountURL } from "./urls";

export const getNetworkGetConnectionCount = () => (dispatch) => {
    axios
        .get(networkGetConnectionCountURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_GETCONNECTIONCOUNT,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}