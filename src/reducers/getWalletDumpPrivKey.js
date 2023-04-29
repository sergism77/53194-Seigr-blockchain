//this is the getWalletDumpPrivKey reducer:

import { GET_WALLET_DUMPPRIVKEY } from '../actions';

const getWalletDumpPrivKeyReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_DUMPPRIVKEY:
        return action.payload;
        default:
        return state;
    }
}

export default getWalletDumpPrivKeyReducer;