import { Peer } from './peer';

class ConnectToPeers {
    sockets: WebSocket[];

    constructor() {
        this.sockets = [];
    }

    connectToPeers() {
        Peer.forEach((peer: string) => {
            //ws://localhost:53194
            const socket = new WebSocket(peer);

            socket.onopen = () => this.connectSocket(socket);
        });
    }

    connectSocket(socket: WebSocket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
    }

    messageHandler(socket: WebSocket) {
        socket.onmessage = (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            console.log(data);
        };
    }
}

export default ConnectToPeers;