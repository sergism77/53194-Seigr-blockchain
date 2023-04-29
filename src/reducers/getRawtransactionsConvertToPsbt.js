//this is the getRawtransactionsConvertToPsbt action

import axios from "axios";
import { GET_RAWTRANSACTIONS_CONVERTTOPSBT } from "./types";
import { rawtransactionsConvertToPsbtURL } from "./urls";

export const getRawtransactionsConvertToPsbt = () => (dispatch) => {
    axios
        .get(rawtransactionsConvertToPsbtURL)
        .then((res) => {
            dispatch({
                type: GET_RAWTRANSACTIONS_CONVERTTOPSBT,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}