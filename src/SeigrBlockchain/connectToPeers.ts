/* The class ConnectionError extends the Error class and represents an error that occurs when a
connection to a peer fails. */
class ConnectionError extends Error {
    constructor(peer: string, message: string) {
      super(`Failed to connect to peer ${peer}: ${message}`);
      this.name = "ConnectionError";
    }
  }
  
/* The `ConnectToPeers` class is responsible for connecting to a list of peers using WebSockets. Here
is a breakdown of what each part of the class does: */
  class ConnectToPeers {
    sockets: WebSocket[];
  
    constructor(private peers: string[]) {
      this.sockets = [];
    }
  
/**
 * The function `isValidUrl` checks if a given string is a valid URL.
 * @param {string} url - A string representing a URL.
 * @returns The function `isValidUrl` returns a boolean value.
 */
    isValidUrl(url: string): boolean {
      const urlRegex = /^(ftp|http|https|wss):\/\/[^ "]+$/;
      return urlRegex.test(url);
    }
  
    /**
     * The `connectSocket` function sets up event listeners for a WebSocket connection, handling
     * incoming messages and closing events.
     * @param {WebSocket} socket - The `socket` parameter is of type `WebSocket`. It represents the
     * WebSocket connection that you want to connect to.
     */
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
      };
  
      socket.addEventListener('message', messageListener);
      socket.addEventListener('close', closeListener);
    }
  
/**
 * The function creates a WebSocket connection to a specified peer and returns a promise that resolves
 * with the WebSocket object.
 * @param {string} peer - The `peer` parameter is a string that represents the URL of the WebSocket
 * server that the client wants to connect to.
 * @returns A Promise object is being returned.
 */
    private createWebSocket(peer: string): Promise<WebSocket> {
      return new Promise((resolve, reject) => {
        const socket = new WebSocket(peer);
        socket.addEventListener('open', () => resolve(socket));
        socket.addEventListener('error', (error: Event) => {
          const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
          reject(new ConnectionError(peer, errorMessage));
        });
      });
    }
  
   /**
    * The function connects to a list of peers by creating websockets and handling any connection
    * errors.
    */
    async connectToPeers(): Promise<void> {
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
            console.error(`Failed to connect to peer ${peer}: ${error.message}`);
          } else {
            console.error(error);
          }
        }
      }
    }
  }
  
  export default ConnectToPeers;
  