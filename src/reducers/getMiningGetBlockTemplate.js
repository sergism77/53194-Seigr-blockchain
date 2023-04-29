//this is the getMiningGetBlockTemplate action creator

import axios from "axios";
import { GET_MINING_GETBLOCKTEMPLATE } from "./types";
import { miningGetBlockTemplateURL } from "./urls";

export const getMiningGetBlockTemplate = () => (dispatch) => {
    axios
        .get(miningGetBlockTemplateURL)
        .then((res) => {
            dispatch({
                type: GET_MINING_GETBLOCKTEMPLATE,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}
