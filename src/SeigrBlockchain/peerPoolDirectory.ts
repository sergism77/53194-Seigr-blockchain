'use strict';

class PeerPoolDirectory {
    private peerPoolDirectory: any[];
  
    constructor() {
      this.peerPoolDirectory = [];
    }
  
    public addPeer(peer: any): void {
      this.peerPoolDirectory.push(peer);
    }
  
    public removePeer(peer: any): void {
      this.peerPoolDirectory.splice(this.peerPoolDirectory.indexOf(peer), 1);
    }
  
    public getPeerPoolDirectory(): any[] {
      return this.peerPoolDirectory;
    }
  
    public setPeerPoolDirectory(peerPoolDirectory: any[]): any[] {
      this.peerPoolDirectory = peerPoolDirectory;
      return this.peerPoolDirectory;
    }

    public getPeerPoolDirectoryLength(): number {
      return this.peerPoolDirectory.length;
    }

    public getPeerPoolDirectoryElement(index: number): any {
      return this.peerPoolDirectory[index];
    }

    public setPeerPoolDirectoryElement(index: number, peer: any): void {
      this.peerPoolDirectory[index] = peer;
    }

    public getPeerPoolDirectoryElementByPeer(peer: any): any {
      return this.peerPoolDirectory[this.peerPoolDirectory.indexOf(peer)];
    }

    public setPeerPoolDirectoryElementByPeer(peer: any, newPeer: any): void {
      this.peerPoolDirectory[this.peerPoolDirectory.indexOf(peer)] = newPeer;
    }

    public getPeerPoolDirectoryElementByPeerId(peerId: string): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerId() === peerId) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerId(peerId: string, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerId() === peerId) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public getPeerPoolDirectoryElementByPeerIp(peerIp: string): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerIp() === peerIp) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerIp(peerIp: string, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerIp() === peerIp) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public getPeerPoolDirectoryElementByPeerPort(peerPort: number): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerPort() === peerPort) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerPort(peerPort: number, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerPort() === peerPort) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public getPeerPoolDirectoryElementByPeerSocket(peerSocket: any): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocket() === peerSocket) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerSocket(peerSocket: any, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocket() === peerSocket) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public getPeerPoolDirectoryElementByPeerSocketId(peerSocketId: string): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocketId() === peerSocketId) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerSocketId(peerSocketId: string, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocketId() === peerSocketId) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public getPeerPoolDirectoryElementByPeerSocketIp(peerSocketIp: string): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocketIp() === peerSocketIp) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerSocketIp(peerSocketIp: string, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocketIp() === peerSocketIp) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public getPeerPoolDirectoryElementByPeerSocketPort(peerSocketPort: number): any {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocketPort() === peerSocketPort) {
          return this.peerPoolDirectory[i];
        }
      }
    }

    public setPeerPoolDirectoryElementByPeerSocketPort(peerSocketPort: number, newPeer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i].getPeerSocketPort() === peerSocketPort) {
          this.peerPoolDirectory[i] = newPeer;
        }
      }
    }

    public broadcast (message: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        this.peerPoolDirectory[i].send(message);
      }
    }

    public broadcastExcept (message: any, peer: any): void {
      for (let i = 0; i < this.peerPoolDirectory.length; i++) {
        if (this.peerPoolDirectory[i] !== peer) {
          this.peerPoolDirectory[i].send(message);
        }
      }
    }

    public broadcastTo (message: any, peerPool: any): void {
      for (let i = 0; i < peerPool.length; i++) {
        peerPool[i].send(message);
      }
    }

    public broadcastToExcept (message: any, peerPool: any, peer: any): void {
      for (let i = 0; i < peerPool.length; i++) {
        if (peerPool[i] !== peer) {
          peerPool[i].send(message);
        }
      }
    }

    public receive (message: any, peer: any): void {
      if (message.type === 'request') {
        if (message.request === 'peerPoolDirectory') {
          peer.send({
            type: 'response',
            response: 'peerPoolDirectory',
            peerPoolDirectory: this.peerPoolDirectory
          });
        }
      }
    }

    public receiveFrom (message: any, peerPool: any, peer: any): void {
      if (message.type === 'request') {
        if (message.request === 'peerPoolDirectory') {
          peer.send({
            type: 'response',
            response: 'peerPoolDirectory',
            peerPoolDirectory: this.peerPoolDirectory
          });
        }
      }
    }

    public receiveFromExcept (message: any, peerPool: any, peer: any): void {
      if (message.type === 'request') {
        if (message.request === 'peerPoolDirectory') {
          peer.send({
            type: 'response',
            response: 'peerPoolDirectory',
            peerPoolDirectory: this.peerPoolDirectory
          });
        }
      }
    }

    public receiveFromAll (message: any, peerPool: any): void {
      if (message.type === 'request') {
        if (message.request === 'peerPoolDirectory') {
          peerPool.send({
            type: 'response',
            response: 'peerPoolDirectory',
            peerPoolDirectory: this.peerPoolDirectory
          });
        }
      }
    }

    public receiveFromAllExcept (message: any, peerPool: any, peer: any): void {
      if (message.type === 'request') {
        if (message.request === 'peerPoolDirectory') {
          peerPool.send({
            type: 'response',
            response: 'peerPoolDirectory',
            peerPoolDirectory: this.peerPoolDirectory
          });
        }
      }
    }

    public receiveFromAllTo (message: any, peerPool: any, peer: any): void {
      if (message.type === 'request') {
        if (message.request === 'peerPoolDirectory') {
          peer.send({
            type: 'response',
            response: 'peerPoolDirectory',
            peerPoolDirectory: this.peerPoolDirectory
          });
        }
      }
    }

    public send (message: any, peer: any): void {
      peer.send(message);
    }

    public sendTo (message: any, peerPool: any, peer: any): void {
      peer.send(message);
    }

    public disconnect (peer: any): void {
      peer.disconnect();
    }

    public connect (peer: any): void {
      peer.connect();
    }

  }
  
  export { PeerPoolDirectory };