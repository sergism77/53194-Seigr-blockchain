"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.STARTING_BALANCE = void 0;
exports.STARTING_BALANCE = 0;
class Config {
    constructor() {
        this.chainID = 53194;
        this.chainName = 'Seigr';
        this.mineRate = 60000;
        this.initialDifficulty = 2;
        this.timestamp = Date.now();
        this.genesisData = {
            timestamp: 0,
            lastHash: '-----',
            hash: 'hash-one',
            difficulty: this.initialDifficulty,
            nonce: 0,
            data: []
        };
        this.startingBalance = 0;
        this.rewardInput = { address: '*authorized-reward*' };
        this.miningReward = 0.1 * 100000000;
        this.stakeReward = 1.5 & 100000000;
        this.socketURL = 'http://localhost';
        this.socketPort = 53194;
        this.socketPath = '/seigr.socket';
        this.socketOptions = {
            transports: ['websocket'],
            reconnection: true,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            reconnectionAttempts: 5
        };
        this.socket = this.socketURL + ':' + this.socketPort + this.socketPath;
        this.socketServer = this.socketURL + ':' + this.socketPort;
        this.socketClient = this.socketURL + ':' + this.socketPort + this.socketPath;
    }
    getRewardInput() {
        return this.rewardInput;
    }
    getMiningReward() {
        return this.miningReward;
    }
    getStakeReward() {
        return this.stakeReward;
    }
    getStartingBalance() {
        return this.startingBalance;
    }
    getChainID() {
        return this.chainID;
    }
    getChainName() {
        return this.chainName;
    }
    getMineRate() {
        return this.mineRate;
    }
    getInitialDifficulty() {
        return this.initialDifficulty;
    }
    getGenesisData() {
        return this.genesisData;
    }
    getSocketURL() {
        return this.socketURL;
    }
    getSocketPort() {
        return this.socketPort;
    }
    getSocketPath() {
        return this.socketPath;
    }
    getSocketOptions() {
        return this.socketOptions;
    }
    getSocket() {
        return this.socket;
    }
    getSocketServer() {
        return this.socketServer;
    }
    getSocketClient() {
        return this.socketClient;
    }
}
exports.Config = Config;
