//this is the getWalletWalletPassphraseChange reducer

import { GET_WALLET_WALLET_PASSPHRASE_CHANGE } from '../actions/types';

export const getWalletWalletPassphraseChange = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_WALLET_PASSPHRASE_CHANGE:
        return action.payload;
        default:
        return state;
    }
}