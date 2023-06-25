"use strict";
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
const P2P_PORT = 53194;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];
class Listen {
    constructor() {
        this.sockets = [];
    }
    listen() {
        const server = new Websocket.Server({ port: P2P_PORT });
        server.on('connection', (socket) => this.connectSocket(socket));
        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }
    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');
        this.messageHandler(socket);
    }
    messageHandler(socket) {
        socket.on('message', (message) => {
            const data = JSON.parse(message);
            console.log(data);
        });
    }
}
module.exports = Listen;
