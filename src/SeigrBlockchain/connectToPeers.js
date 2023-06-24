class ConnectToPeers {
    constructor() {
        this.sockets = [];
    }

    connectToPeers() {
        peers.forEach(peer => {
            //ws://localhost:53194
            const socket = new Websocket(peer);

            socket.on('open', () => this.connectSocket(socket));
        });
    }

    connectSocket(socket) {
        this.sockets.push(socket);
        console.log('Socket connected');

        this.messageHandler(socket);
    }

    messageHandler(socket) {
        socket.on('message', message => {
            const data = JSON.parse(message);

            console.log(data);
        });
    }
}

module.exports = ConnectToPeers;