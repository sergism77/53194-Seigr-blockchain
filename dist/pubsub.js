'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const config_1 = require("../config");
class PubSub {
    constructor({ blockchain, transactionPool, wallet }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.socket = (0, socket_io_client_1.default)(config_1.SOCKET_URL);
        this.socket.on('connect', () => {
            this.socket.emit('REGISTER', this.wallet.publicKey);
        });
        this.socket.on('BLOCKCHAIN', (blockchain) => {
            this.blockchain.replaceChain(blockchain);
        });
        this.socket.on('TRANSACTION', (transaction) => {
            this.transactionPool.setTransaction(transaction);
        });
    }
    broadcastChain() {
        this.socket.emit('BLOCKCHAIN', this.blockchain.chain);
    }
    broadcastTransaction(transaction) {
        this.socket.emit('TRANSACTION', transaction);
    }
    syncChain() {
        this.socket.emit('SYNC');
    }
}
exports.default = PubSub;
