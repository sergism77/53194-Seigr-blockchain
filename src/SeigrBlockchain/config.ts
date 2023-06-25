export const STARTING_BALANCE = 0;

export class Config {

    chainID: number;
    chainName: string;
    mineRate: number;
    initialDifficulty: number;
    timestamp: number;
    genesisData: {
        timestamp: number;
        lastHash: string;
        hash: string;
        difficulty: number;
        nonce: number;
        data: any[];
    };
    startingBalance: number;
    rewardInput: { address: string };
    miningReward: number;
    stakeReward: number;
    socketURL: string;
    socketPort: number;
    socketPath: string;
    socketOptions: {
        transports: string[];
        reconnection: boolean;
        reconnectionDelay: number;
        reconnectionDelayMax: number;
        reconnectionAttempts: number;
    };
    socket: string;
    socketServer: string;
    socketClient: string;

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

    getRewardInput(): { address: string } {
        return this.rewardInput;
    }

    getMiningReward(): number {
        return this.miningReward;
    }

    getStakeReward(): number {
        return this.stakeReward;
    }

    getStartingBalance(): number {
        return this.startingBalance;
    }

    getChainID(): number {
        return this.chainID;
    }

    getChainName(): string {
        return this.chainName;
    }

    getMineRate(): number {
        return this.mineRate;
    }

    getInitialDifficulty(): number {
        return this.initialDifficulty;
    }

    getGenesisData(): {
        timestamp: number;
        lastHash: string;
        hash: string;
        difficulty: number;
        nonce: number;
        data: any[];
    } {
        return this.genesisData;
    }

    getSocketURL(): string {
        return this.socketURL;
    }

    getSocketPort(): number {
        return this.socketPort;
    }

    getSocketPath(): string {
        return this.socketPath;
    }

    getSocketOptions(): {
        transports: string[];
        reconnection: boolean;
        reconnectionDelay: number;
        reconnectionDelayMax: number;
        reconnectionAttempts: number;
    } {
        return this.socketOptions;
    }

    getSocket(): string {
        return this.socket;
    }

    getSocketServer(): string {
        return this.socketServer;
    }

    getSocketClient(): string {
        return this.socketClient;
    }
}
