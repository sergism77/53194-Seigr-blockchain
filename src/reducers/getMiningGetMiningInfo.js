//this is the getMiningGetMiningInfo action

import axios from "axios";
import { GET_MINING_GETMININGINFO } from "./types";
import { miningGetMiningInfoURL } from "./urls";

export const getMiningGetMiningInfo = () => (dispatch) => {
    axios
        .get(miningGetMiningInfoURL)
        .then((res) => {
            dispatch({
                type: GET_MINING_GETMININGINFO,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}

