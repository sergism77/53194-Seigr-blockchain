//this is the getNetworkGetNetTotals action creator

import axios from "axios";
import { GET_NETWORK_GETNETTOTALS } from "./types";
import { networkGetNetTotalsURL } from "./urls";

export const getNetworkGetNetTotals = () => (dispatch) => {
    axios
        .get(networkGetNetTotalsURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_GETNETTOTALS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}