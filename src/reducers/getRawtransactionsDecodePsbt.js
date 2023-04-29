//this is the getRawtransactionsDecodePsbt action

import axios from "axios";
import { GET_RAWTRANSACTIONS_DECODEPSBT } from "./types";
import { rawtransactionsDecodePsbtURL } from "./urls";

export const getRawtransactionsDecodePsbt = () => (dispatch) => {
    axios
        .get(rawtransactionsDecodePsbtURL)
        .then((res) => {
            dispatch({
                type: GET_RAWTRANSACTIONS_DECODEPSBT,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}