//this is the getWalletAddMultiSigAddress reducer:

import { GET_WALLET_ADDMULTISIGADDRESS } from '../actions';

const getWalletAddMultiSigAddressReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_ADDMULTISIGADDRESS:
        return action.payload;
        default:
        return state;
    }
}

export default getWalletAddMultiSigAddressReducer;