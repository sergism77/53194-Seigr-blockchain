import { Peer } from './peer';

class ConnectToPeers {
    sockets: WebSocket[];

    constructor() {
        this.sockets = [];
    }

    connectToPeers() {
        Peer.forEach((peer: string) => {
            const socket = new WebSocket(peer);

            socket.addEventListener('open', () => this.connectSocket(socket));
        });
    }

    connectSocket(socket: WebSocket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
    }

    messageHandler(socket: WebSocket) {
        socket.addEventListener('message', (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            console.log(data);
        });
    }
}

export default ConnectToPeers;