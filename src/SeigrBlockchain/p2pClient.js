'use strict';

const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 53194;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : []; //if there is no PEERS in the environment, then use an empty array

class P2pClient {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    //this is the method that will start the server
    listen() {
        const server = new Websocket.Server({ port: P2P_PORT }); //this is the server that will be listening on the P2P_PORT

        //this is the event listener that will be listening for a connection
        server.on('connection', socket => this.connectSocket(socket));

        this.connectToPeers();

        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    //this is the method that will connect to peers
    connectToPeers() {
        peers.forEach(peer => {
            //ws://localhost:53194
            const socket = new Websocket(peer);

            //this is the event listener that will be listening for a connection
            socket.on('open', () => this.connectSocket(socket));
        });
    }

    //this is the method that will connect a socket
    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);

        this.sendChain(socket);
    }

    //this is the method that will handle messages
    messageHandler(socket) {
        socket.on('message', message => {
            const data = JSON.parse(message);

            this.blockchain.replaceChain(data);
        });
    }

    //this is the method that will send the chain
    sendChain(socket) {
        socket.send(JSON.stringify(this.blockchain.chain));
    }
}

module.exports = P2pClient;