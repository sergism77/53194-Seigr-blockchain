//this is the getNetworkSetBan action creator

import axios from "axios";
import { GET_NETWORK_SETBAN } from "./types";
import { networkSetBanURL } from "./urls";

export const getNetworkSetBan = (ip, command, bantime, absolute) => (dispatch) => {
    axios
        .get(networkSetBanURL(ip, command, bantime, absolute))
        .then((res) => {
            dispatch({
                type: GET_NETWORK_SETBAN,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}