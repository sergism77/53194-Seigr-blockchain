'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const Websocket = __importStar(require("ws"));
const P2P_PORT = process.env.P2P_PORT ? parseInt(process.env.P2P_PORT) : 53194;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];
class P2pClient {
    constructor(blockchain) {
        this.sockets = [];
        this.blockchain = blockchain;
    }
    //this is the method that will start the server
    listen() {
        const server = new Websocket.Server({ port: P2P_PORT }); //this is the server that will be listening on the P2P_PORT
        //this is the event listener that will be listening for a connection
        server.on('connection', (socket) => this.connectSocket(socket));
        this.connectToPeers();
        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }
    //this is the method that will connect to peers
    connectToPeers() {
        peers.forEach((peer) => {
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
        socket.on('message', (message) => {
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
