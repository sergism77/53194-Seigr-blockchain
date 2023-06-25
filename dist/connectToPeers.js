"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConnectToPeers {
    constructor() {
        this.sockets = [];
    }
    connectToPeers() {
        peer_1.Peer.forEach((peer) => {
            const socket = new WebSocket(peer);
            socket.addEventListener('open', () => this.connectSocket(socket));
        });
    }
    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');
        this.messageHandler(socket);
    }
    messageHandler(socket) {
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            console.log(data);
        });
    }
}
exports.default = ConnectToPeers;
