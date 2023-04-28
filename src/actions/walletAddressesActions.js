//this is the action creator for the wallet addresses

import { GET_WALLET_ADDRESSES } from "./types";

export const getWalletAddresses = () => {
    return {
        type: GET_WALLET_ADDRESSES
    };
}
