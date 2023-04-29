//this is the getWalletBackupWallet reducer:

import { GET_WALLET_BACKUPWALLET } from '../actions';

const getWalletBackupWalletReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_WALLET_BACKUPWALLET:
        return action.payload;
        default:
        return state;
    }
}

export default getWalletBackupWalletReducer;