//this is the getMiningSubmitBlock action creator

import axios from "axios";
import { GET_MINING_SUBMITBLOCK } from "./types";
import { miningSubmitBlockURL } from "./urls";

export const getMiningSubmitBlock = (hex, dummy) => (dispatch) => {
    axios
        .get(miningSubmitBlockURL(hex, dummy))
        .then((res) => {
            dispatch({
                type: GET_MINING_SUBMITBLOCK,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}
