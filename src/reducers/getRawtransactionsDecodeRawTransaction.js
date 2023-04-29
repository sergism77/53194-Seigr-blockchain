//this is the getRawtransactionsDecodeRawTransaction action

import axios from "axios";
import { GET_RAWTRANSACTIONS_DECODERAWTRANSACTION } from "./types";
import { rawtransactionsDecodeRawTransactionURL } from "./urls";

export const getRawtransactionsDecodeRawTransaction = () => (dispatch) => {
    axios
        .get(rawtransactionsDecodeRawTransactionURL)
        .then((res) => {
            dispatch({
                type: GET_RAWTRANSACTIONS_DECODERAWTRANSACTION,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}