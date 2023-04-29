//this is the getNetworkListBanned action creator

import axios from "axios";
import { GET_NETWORK_LISTBANNED } from "./types";
import { networkListBannedURL } from "./urls";

export const getNetworkListBanned = () => (dispatch) => {
    axios
        .get(networkListBannedURL)
        .then((res) => {
            dispatch({
                type: GET_NETWORK_LISTBANNED,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}