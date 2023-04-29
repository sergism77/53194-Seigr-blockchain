//this is the getMiningGetNetworkHashPs action creator

import axios from "axios";
import { GET_MINING_GETNETWORKHASHPS } from "./types";
import { miningGetNetworkHashPsURL } from "./urls";

export const getMiningGetNetworkHashPs = () => (dispatch) => {
    axios
        .get(miningGetNetworkHashPsURL)
        .then((res) => {
            dispatch({
                type: GET_MINING_GETNETWORKHASHPS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}