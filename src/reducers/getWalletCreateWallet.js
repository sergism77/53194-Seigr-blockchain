//this is the getWalletCreateWallet reducer

import { GET_WALLET_CREATEWALLET } from '../actions';

const getWalletCreateWalletReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_CREATEWALLET:
        return action.payload;
        default:
        return state;
    }
}

export default getWalletCreateWalletReducer;