//this is the getRawtransactionsCreateRawTransaction action

import axios from "axios";
import { GET_RAWTRANSACTIONS_CREATERAWTRANSACTION } from "./types";
import { rawtransactionsCreateRawTransactionURL } from "./urls";

export const getRawtransactionsCreateRawTransaction = () => (dispatch) => {
    axios
        .get(rawtransactionsCreateRawTransactionURL)
        .then((res) => {
            dispatch({
                type: GET_RAWTRANSACTIONS_CREATERAWTRANSACTION,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}