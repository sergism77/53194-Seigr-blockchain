import * as Websocket from 'ws';

const P2P_PORT: number = 53194;
const peers: string[] = process.env.PEERS ? process.env.PEERS.split(',') : [];

class Listen {
    private sockets: Websocket[] = [];

    public listen(): void {
        const server = new Websocket.Server({ port: P2P_PORT });

        server.on('connection', (socket: Websocket) => this.connectSocket(socket));

        console.log(`Listening for peer-to-peer connections on: ${P2P_PORT}`);
    }

    private connectSocket(socket: Websocket): void {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
    }

    private messageHandler(socket: Websocket): void {
        socket.on('message', (message: string) => {
            const data = JSON.parse(message);

            console.log(data);
        });
    }
}

export = Listen;