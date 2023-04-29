//this is the getWalletDumpWallet reducer

import { GET_WALLET_DUMPWALLET } from '../actions';

const getWalletDumpWalletReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_DUMPWALLET:
        return action.payload;
        default:
        return state;
    }
}

export default getWalletDumpWalletReducer;