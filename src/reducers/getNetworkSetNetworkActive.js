//this is the getNetworkSetNetworkActive action creator

import axios from "axios";
import { GET_NETWORK_SETNETWORKACTIVE } from "./types";
import { networkSetNetworkActiveURL } from "./urls";

export const getNetworkSetNetworkActive = (network, state) => (dispatch) => {
    axios
        .post(networkSetNetworkActiveURL, {
            network: network,
            state: state,
        })
        .then((res) => {
            dispatch({
                type: GET_NETWORK_SETNETWORKACTIVE,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}