import { Peer } from './peer';

class ConnectToPeers {
    sockets: WebSocket[];

    constructor() {
        this.sockets = [];
    }

    connectToPeers() {
        const peers: string[] = ['peer1', 'peer2', 'peer3']; // Example array of peer addresses

        peers.forEach((peer: string) => {
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
          // Check the origin of the received message
          if (event.origin === 'trusted-domain.com') {
            const data = JSON.parse(event.data);
            console.log(data);
          } else {
            // Handle invalid or untrusted origins
            console.log('Received message from an untrusted origin. Ignoring...');
          }
        });
    }
}

export default ConnectToPeers;
