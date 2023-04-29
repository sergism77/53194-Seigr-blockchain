//this is the getMiningPrioritiseTransaction action creator

import axios from "axios";
import { GET_MINING_PRIORITISETRANSACTION } from "./types";
import { miningPrioritiseTransactionURL } from "./urls";

export const getMiningPrioritiseTransaction = (txid, dummy, feeDelta) => (dispatch) => {
    axios
        .get(miningPrioritiseTransactionURL(txid, dummy, feeDelta))
        .then((res) => {
            dispatch({
                type: GET_MINING_PRIORITISETRANSACTION,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}
