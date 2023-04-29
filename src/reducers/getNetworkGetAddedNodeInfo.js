//this is the getNetworkGetAddedNodeInfo action creator
import axios from "axios";
import { GET_NETWORK_GETADDEDNODEINFO } from "./types";
import { networkGetAddedNodeInfoURL } from "./urls";

export const getNetworkGetAddedNodeInfo = (node, dummy) => (dispatch) => {
    axios
        .get(networkGetAddedNodeInfoURL(node, dummy))
        .then((res) => {
            dispatch({
                type: GET_NETWORK_GETADDEDNODEINFO,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
}