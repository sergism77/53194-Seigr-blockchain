//this is the getNetworkAddNode action creator

import axios from "axios";
import { GET_NETWORK_ADDNODE } from "./types";
import { networkAddNodeURL } from "./urls";

export const getNetworkAddNode = (node, command) => (dispatch) => {
    axios
        .get(networkAddNodeURL(node, command))
        .then((res) => {
            dispatch({
                type: GET_NETWORK_ADDNODE,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}