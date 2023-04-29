//this is the getWalletAbortRescan reducer:

import * as types from '../constants/actionTypes';

const initialState = {
    getWalletAbortRescan: {},
    loading: false,
    error: null
}

export default function getWalletAbortRescan(state = initialState, action) {
    switch (action.type) {
        case types.GET_WALLET_ABORTRESCAN_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case types.GET_WALLET_ABORTRESCAN_SUCCESS:
            return {
                ...state,
                loading: false,
                getWalletAbortRescan: action.payload.res
            };

        case types.GET_WALLET_ABORTRESCAN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                getWalletAbortRescan: {}
            };

        default:
            return state;
    }
}

