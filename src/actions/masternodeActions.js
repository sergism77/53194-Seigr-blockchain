
import axios from 'axios';

class getMasternodeCount {
    constructor() {
        this.type = 'GET_MASTERNODE_COUNT';
    }
}

class getMasternodeCountSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeCountFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeCount = () => {
    return async dispatch => {
        dispatch(new getMasternodeCount());

        try {
        const response = await axios.get('http://localhost:53194/masternode/count');
        dispatch(new getMasternodeCountSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeCountFailure(error));
        }
    };
};

class getMasternodeWinners {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNERS';
    }
}

class getMasternodeWinnersSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNERS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnersFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNERS_FAILURE';
        this.payload = payload;
    }
}


class getMasternodeStatus {
  constructor() {
    this.type = 'GET_MASTERNODE_STATUS';
  }
}

class getMasternodeStatusSuccess {
  constructor(payload) {
    this.type = 'GET_MASTERNODE_STATUS_SUCCESS';
    this.payload = payload;
  }
}

class getMasternodeStatusFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_STATUS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeStatus = () => {
    return async dispatch => {
        dispatch(new getMasternodeStatus());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/status');
        dispatch(new getMasternodeStatusSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeStatusFailure(error));
        }
    };
};

class getMasternodeList {
  constructor() {
    this.type = 'GET_MASTERNODE_LIST';
  }
}

class getMasternodeListSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_LIST_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeListFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_LIST_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeList = () => {
    return async dispatch => {
        dispatch(new getMasternodeList());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/list');
        dispatch(new getMasternodeListSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeListFailure(error));
        }
    };
}

class getMasternodeOutputs {
    constructor() {
        this.type = 'GET_MASTERNODE_OUTPUTS';
    }
    }

class getMasternodeOutputsSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_OUTPUTS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeOutputsFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_OUTPUTS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeOutputs = () => {
    return async dispatch => {
        dispatch(new getMasternodeOutputs());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/outputs');
        dispatch(new getMasternodeOutputsSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeOutputsFailure(error));
        }
    }
}

class startMasternode {
    constructor() {
        this.type = 'START_MASTERNODE';
    }
}

class startMasternodeSuccess {
    constructor(payload) {
        this.type = 'START_MASTERNODE_SUCCESS';
        this.payload = payload;
    }
}

class startMasternodeFailure {
    constructor(payload) {
        this.type = 'START_MASTERNODE_FAILURE';
        this.payload = payload;
    }
}

export const startMasternode = () => {
    return async dispatch => {
        dispatch(new startMasternode());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/start');
        dispatch(new startMasternodeSuccess(response.data));
        } catch (error) {
        dispatch(new startMasternodeFailure(error));
        }
    }
}

class stopMasternode {
    constructor() {
        this.type = 'STOP_MASTERNODE';
    }
}

class stopMasternodeSuccess {
    constructor(payload) {
        this.type = 'STOP_MASTERNODE_SUCCESS';
        this.payload = payload;
    }
}

class stopMasternodeFailure {
    constructor(payload) {
        this.type = 'STOP_MASTERNODE_FAILURE';
        this.payload = payload;
    }
}

export const stopMasternode = () => {
    return async dispatch => {
        dispatch(new stopMasternode());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/stop');
        dispatch(new stopMasternodeSuccess(response.data));
        } catch (error) {
        dispatch(new stopMasternodeFailure(error));
        }
    }
}

class getMasternodeWinner {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER';
    }
}

class getMasternodeWinnerSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinner = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinner());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winner');
        dispatch(new getMasternodeWinnerSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerFailure(error));
        }
    }
}

class getMasternodeWinners {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNERS';
    }
}

class getMasternodeWinnersSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNERS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnersFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNERS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinners = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinners());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winners');
        dispatch(new getMasternodeWinnersSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnersFailure(error));
        }
    }
}

class getMasternodeWinnerByBlock {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_BY_BLOCK';
    }
}

class getMasternodeWinnerByBlockSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_BY_BLOCK_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerByBlockFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_BY_BLOCK_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerByBlock = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerByBlock());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerbyblock');
        dispatch(new getMasternodeWinnerByBlockSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerByBlockFailure(error));
        }
    }
}

class getMasternodeWinnersCount {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNERS_COUNT';
    }
}

class getMasternodeWinnersCountSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNERS_COUNT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnersCountFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNERS_COUNT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnersCount = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnersCount());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerscount');
        dispatch(new getMasternodeWinnersCountSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnersCountFailure(error));
        }
    }
}

class getMasternodeCount {
    constructor() {
        this.type = 'GET_MASTERNODE_COUNT';
    }
}

class getMasternodeCountSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeCountFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeCount = () => {
    return async dispatch => {
        dispatch(new getMasternodeCount());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/count');
        dispatch(new getMasternodeCountSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeCountFailure(error));
        }
    }
}

class getMasternodeCountByCollateralHash {
    constructor() {
        this.type = 'GET_MASTERNODE_COUNT_BY_COLLATERAL_HASH';
    }
}

class getMasternodeCountByCollateralHashSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_BY_COLLATERAL_HASH_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeCountByCollateralHashFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_BY_COLLATERAL_HASH_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeCountByCollateralHash = () => {
    return async dispatch => {
        dispatch(new getMasternodeCountByCollateralHash());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/countbycollateralhash');
        dispatch(new getMasternodeCountByCollateralHashSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeCountByCollateralHashFailure(error));
        }
    }
}

class getMasternodeCountByCollateralAddress {
    constructor() {
        this.type = 'GET_MASTERNODE_COUNT_BY_COLLATERAL_ADDRESS';
    }
}

class getMasternodeCountByCollateralAddressSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_BY_COLLATERAL_ADDRESS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeCountByCollateralAddressFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_BY_COLLATERAL_ADDRESS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeCountByCollateralAddress = () => {
    return async dispatch => {
        dispatch(new getMasternodeCountByCollateralAddress());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/countbycollateraladdress');
        dispatch(new getMasternodeCountByCollateralAddressSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeCountByCollateralAddressFailure(error));
        }
    }
}

class getMasternodeCountByOperatorAddress {
    constructor() {
        this.type = 'GET_MASTERNODE_COUNT_BY_OPERATOR_ADDRESS';
    }
}

class getMasternodeCountByOperatorAddressSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_BY_OPERATOR_ADDRESS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeCountByOperatorAddressFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_COUNT_BY_OPERATOR_ADDRESS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeCountByOperatorAddress = () => {
    return async dispatch => {
        dispatch(new getMasternodeCountByOperatorAddress());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/countbyoperatoraddress');
        dispatch(new getMasternodeCountByOperatorAddressSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeCountByOperatorAddressFailure(error));
        }
    }
}

class getMasternodeWinnerList {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST';
    }
}

class getMasternodeWinnerListSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerList = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerList());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlist');
        dispatch(new getMasternodeWinnerListSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListFailure(error));
        }
    }
}

class getMasternodeWinnerListByBlockHeight {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_BY_BLOCK_HEIGHT';
    }
}

class getMasternodeWinnerListByBlockHeightSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_BY_BLOCK_HEIGHT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListByBlockHeightFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_BY_BLOCK_HEIGHT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListByBlockHeight = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListByBlockHeight());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistbyblockheight');
        dispatch(new getMasternodeWinnerListByBlockHeightSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListByBlockHeightFailure(error));
        }
    }
}

class getMasternodeWinnerListCount {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT';
    }
}

class getMasternodeWinnerListCountSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListCountFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListCount = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListCount());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistcount');
        dispatch(new getMasternodeWinnerListCountSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListCountFailure(error));
        }
    }
}

class getMasternodeWinnerListCountByBlockHeight {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT';
    }
}

class getMasternodeWinnerListCountByBlockHeightSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListCountByBlockHeightFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListCountByBlockHeight = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListCountByBlockHeight());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistcountbyblockheight');
        dispatch(new getMasternodeWinnerListCountByBlockHeightSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListCountByBlockHeightFailure(error));
        }
    }
}

class getMasternodeWinnerListCountByBlockHeightAndAddress {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_AND_ADDRESS';
    }
}

class getMasternodeWinnerListCountByBlockHeightAndAddressSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_AND_ADDRESS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListCountByBlockHeightAndAddressFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_AND_ADDRESS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListCountByBlockHeightAndAddress = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListCountByBlockHeightAndAddress());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistcountbyblockheightandaddress');
        dispatch(new getMasternodeWinnerListCountByBlockHeightAndAddressSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListCountByBlockHeightAndAddressFailure(error));
        }
    }
}

class getMasternodeWinnerListCountByAddress {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_ADDRESS';
    }
}

class getMasternodeWinnerListCountByAddressSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_ADDRESS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListCountByAddressFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_ADDRESS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListCountByAddress = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListCountByAddress());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistcountbyaddress');
        dispatch(new getMasternodeWinnerListCountByAddressSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListCountByAddressFailure(error));
        }
    }
}

class getMasternodeWinnerListCountByAddressAndBlockHeight {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_ADDRESS_AND_BLOCK_HEIGHT';
    }
}

class getMasternodeWinnerListCountByAddressAndBlockHeightSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_ADDRESS_AND_BLOCK_HEIGHT_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListCountByAddressAndBlockHeightFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_ADDRESS_AND_BLOCK_HEIGHT_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListCountByAddressAndBlockHeight = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListCountByAddressAndBlockHeight());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistcountbyaddressandblockheight');
        dispatch(new getMasternodeWinnerListCountByAddressAndBlockHeightSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListCountByAddressAndBlockHeightFailure(error));
        }
    }
}

class getMasternodeWinnerListCountByBlockHeightAndWinnerAddress {
    constructor() {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_AND_WINNER_ADDRESS';
    }
}

class getMasternodeWinnerListCountByBlockHeightAndWinnerAddressSuccess {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_AND_WINNER_ADDRESS_SUCCESS';
        this.payload = payload;
    }
}

class getMasternodeWinnerListCountByBlockHeightAndWinnerAddressFailure {
    constructor(payload) {
        this.type = 'GET_MASTERNODE_WINNER_LIST_COUNT_BY_BLOCK_HEIGHT_AND_WINNER_ADDRESS_FAILURE';
        this.payload = payload;
    }
}

export const getMasternodeWinnerListCountByBlockHeightAndWinnerAddress = () => {
    return async dispatch => {
        dispatch(new getMasternodeWinnerListCountByBlockHeightAndWinnerAddress());
    
        try {
        const response = await axios.get('http://localhost:53194/masternode/winnerlistcountbyblockheightandwinneraddress');
        dispatch(new getMasternodeWinnerListCountByBlockHeightAndWinnerAddressSuccess(response.data));
        } catch (error) {
        dispatch(new getMasternodeWinnerListCountByBlockHeightAndWinnerAddressFailure(error));
        }
    }
}
