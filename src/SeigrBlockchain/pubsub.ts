'use strict';

import io from 'socket.io-client';
import { SOCKET_URL } from '../config';
import Blockchain from './blockchain';
import TransactionPool from './transaction-pool';
import Wallet from './wallet';

class PubSub {
    blockchain: Blockchain;
    transactionPool: TransactionPool;
    wallet: Wallet;
    socket: SocketIOClient.Socket;

    constructor({ blockchain, transactionPool, wallet }: { blockchain: Blockchain, transactionPool: TransactionPool, wallet: Wallet }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;

        this.socket = io(SOCKET_URL);

        this.socket.on('connect', () => {
            this.socket.emit('REGISTER', this.wallet.publicKey);
        });

        this.socket.on('BLOCKCHAIN', (blockchain: Blockchain) => {
            this.blockchain.replaceChain(blockchain);
        });

        this.socket.on('TRANSACTION', (transaction: Transaction) => {
            this.transactionPool.setTransaction(transaction);
        });
    }

    broadcastChain() {
        this.socket.emit('BLOCKCHAIN', this.blockchain.chain);
    }

    broadcastTransaction(transaction: Transaction) {
        this.socket.emit('TRANSACTION', transaction);
    }

    syncChain() {
        this.socket.emit('SYNC');
    }
}

export default PubSub;