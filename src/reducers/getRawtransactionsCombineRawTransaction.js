//this is the getRawtransactionsCombineRawTransaction action

import axios from "axios";
import { GET_RAWTRANSACTIONS_COMBINERAWTRANSACTION } from "./types";
import { rawtransactionsCombineRawTransactionURL } from "./urls";

export const getRawtransactionsCombineRawTransaction = () => (dispatch) => {
    axios
        .get(rawtransactionsCombineRawTransactionURL)
        .then((res) => {
            dispatch({
                type: GET_RAWTRANSACTIONS_COMBINERAWTRANSACTION,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}