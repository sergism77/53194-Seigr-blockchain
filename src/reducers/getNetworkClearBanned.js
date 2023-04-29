//this is the getNetworkClearBanned action creator

import axios from "axios";
import { GET_NETWORK_CLEARBANNED } from "./types";
import { networkClearBannedURL } from "./urls";

export const getNetworkClearBanned = () => (dispatch) => {
    axios
        .get(networkClearBannedURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_CLEARBANNED,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}