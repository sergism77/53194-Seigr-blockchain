'use strict';

import * as Websocket from 'ws';

const P2P_PORT: number = process.env.P2P_PORT ? parseInt(process.env.P2P_PORT) : 53194;
const peers: string[] = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pClient {
    blockchain: any;
    sockets: Websocket[] = [];

    constructor(blockchain: any) {
        this.blockchain = blockchain;
    }

    //this is the method that will start the server
    listen(): void {
        const server: Websocket.Server = new Websocket.Server({ port: P2P_PORT }); //this is the server that will be listening on the P2P_PORT

        //this is the event listener that will be listening for a connection
        server.on('connection', (socket: Websocket) => this.connectSocket(socket));

        this.connectToPeers();

        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    //this is the method that will connect to peers
    connectToPeers(): void {
        peers.forEach((peer: string) => {
            //ws://localhost:53194
            const socket: Websocket = new Websocket(peer);

            //this is the event listener that will be listening for a connection
            socket.on('open', () => this.connectSocket(socket));
        });
    }

    //this is the method that will connect a socket
    connectSocket(socket: Websocket): void {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);

        this.sendChain(socket);
    }

    //this is the method that will handle messages
    messageHandler(socket: Websocket): void {
        socket.on('message', (message: string) => {
            const data: any = JSON.parse(message);

            this.blockchain.replaceChain(data);
        });
    }

    //this is the method that will send the chain
    sendChain(socket: Websocket): void {
        socket.send(JSON.stringify(this.blockchain.chain));
    }
}

export = P2pClient;