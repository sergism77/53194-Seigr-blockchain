class ConnectionError extends Error {
    constructor(peer: string, message: string) {
      super(`Failed to connect to peer ${peer}: ${message}`);
      this.name = "ConnectionError";
    }
  }
  
  class ConnectToPeers {
    sockets: WebSocket[];
  
    constructor(private peers: string[]) {
      this.sockets = [];
    }
  
    isValidUrl(url: string): boolean {
      const urlRegex = /^(ftp|http|https|wss):\/\/[^ "]+$/;
      return urlRegex.test(url);
    }
  
    connectSocket(socket: WebSocket): void {
      const messageListener = (event: MessageEvent): void => {
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
      };
  
      const closeListener = (): void => {
        console.log('Socket closed');
        this.sockets = this.sockets.filter(s => s !== socket);
        socket.removeEventListener('message', messageListener);
        socket.removeEventListener('close', closeListener);
      };
  
      socket.addEventListener('message', messageListener);
      socket.addEventListener('close', closeListener);
    }
  
    private createWebSocket(peer: string): Promise<WebSocket> {
      return new Promise((resolve, reject) => {
        const socket = new WebSocket(peer);
        socket.addEventListener('open', () => resolve(socket));
        socket.addEventListener('error', (error: Event) => {
          const errorMessage = (error as unknown) instanceof Error ? (error as Error).message : 'Unknown error occurred';
          reject(new ConnectionError(peer, errorMessage));
        });
      });
    }
  
    async connectToPeers() {
      for (const peer of this.peers) {
        try {
          if (!this.isValidUrl(peer)) {
            throw new Error(`Invalid peer URL: ${peer}`);
          }
          
          const socket = await this.createWebSocket(peer);
          this.connectSocket(socket);
          console.log(`Connected to peer: ${peer}`);
        } catch (error) {
          if (error instanceof ConnectionError) {
            console.error(`Failed to connect to peer ${peer}: ${(error as Error).message}`);
          } else {
            console.error(error);
          }
        }
      }
    }
  }
  
  export default ConnectToPeers;
  