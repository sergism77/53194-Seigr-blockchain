//this is the getWalletBumpFee reducer

import { GET_WALLET_BUMPFEE } from '../actions';

const getWalletBumpFeeReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_BUMPFEE:
        return action.payload;
        default:
        return state;
    }
}

export default getWalletBumpFeeReducer;