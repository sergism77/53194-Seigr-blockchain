
const io = require('socket.io-client');
const { SOCKET_URL } = require('../config');

class PubSub {
    constructor({ blockchain, transactionPool, wallet }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;

        this.socket = io(SOCKET_URL);

        this.socket.on('connect', () => {
            this.socket.emit('REGISTER', this.wallet.publicKey);
        });

        this.socket.on('BLOCKCHAIN', blockchain => {
            this.blockchain.replaceChain(blockchain);
        });

        this.socket.on('TRANSACTION', transaction => {
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

module.exports = PubSub;
