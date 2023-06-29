import { Peer } from './peer';

class ConnectToPeers {
    sockets: WebSocket[];

    constructor(private peers: string[]) {
        this.sockets = [];
    }

    connectToPeers() {
        this.peers.forEach((peer: string) => {
            try {
                const socket = new WebSocket(peer);
                socket.addEventListener('open', () => this.connectSocket(socket));
                socket.addEventListener('error', (error: Event) => {
                    const errorMessage = (error as unknown) instanceof Error ? (error as unknown as Error).message : 'Unknown error occurred';
                    console.error(`Failed to connect to peer ${peer}: ${errorMessage}`);
                });
            } catch (error) {
                console.error(`Failed to connect to peer ${peer}: ${(error as Error).message}`);
            }
        });
    }

    connectSocket(socket: WebSocket): void {
        this.sockets.push(socket);
        console.log('Socket connected');

        socket.addEventListener('message', (event: MessageEvent): void => {
            if (event.origin === 'trusted-domain.com') {
                try {
                    const data: any = JSON.parse(event.data);
                    console.log(data);
                } catch (error) {
                    console.error(`Failed to parse JSON data: ${(error as Error).message}`);
                }
            } else {
                console.log('Received message from an untrusted origin. Ignoring...');
            }
        });

        socket.addEventListener('close', (): void => {
            console.log('Socket closed');
            this.sockets = this.sockets.filter(s => s !== socket);
            socket.removeEventListener('message', (event) => this.messageHandler(event));
            socket.removeEventListener('close', () => this.connectSocket(socket));
        });
    }

    private messageHandler(event: MessageEvent): void {
        const socket = event.currentTarget as WebSocket;
        if (event.origin === 'trusted-domain.com') {
            try {
                const data: any = JSON.parse(event.data);
                console.log(data);
            } catch (error) {
                console.error(`Failed to parse JSON data: ${(error as Error).message}`);
            }
        } else {
            console.log('Received message from an untrusted origin. Ignoring...');
        }
    }
}

export default ConnectToPeers;
