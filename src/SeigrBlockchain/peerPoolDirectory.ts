class PeerPoolDirectory {
  private peerPoolDirectory: any[];

  constructor() {
    this.peerPoolDirectory = [];
  }

  public addPeer(peer: any): void {
    this.peerPoolDirectory.push(peer);
  }

  public removePeer(peer: any): void {
    const index = this.peerPoolDirectory.indexOf(peer);
    if (index !== -1) {
      this.peerPoolDirectory.splice(index, 1);
    }
  }

  public getPeerPoolDirectory(): any[] {
    return this.peerPoolDirectory;
  }

  public setPeerPoolDirectory(peerPoolDirectory: any[]): void {
    this.peerPoolDirectory = peerPoolDirectory;
  }

  public getPeerPoolDirectoryLength(): number {
    return this.peerPoolDirectory.length;
  }

  public getPeerPoolDirectoryElement(index: number): any {
    if (index < 0 || index >= this.peerPoolDirectory.length) {
      throw new Error(`Index ${index} is out of bounds for peerPoolDirectory`);
    }
    return this.peerPoolDirectory[index];
  }

  public setPeerPoolDirectoryElement(index: number, peer: any): void {
    this.peerPoolDirectory[index] = peer;
  }

  public getPeerPoolDirectoryElementByPeer(peer: any): any {
    return this.peerPoolDirectory.find((p) => p === peer);
  }

  public setPeerPoolDirectoryElementByPeer(peer: any, newPeer: any): void {
    const index = this.peerPoolDirectory.indexOf(peer);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerId(peerId: string): any {
    return this.peerPoolDirectory.find((p) => p.getPeerId() === peerId);
  }

  public setPeerPoolDirectoryElementByPeerId(peerId: string, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerId() === peerId);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerIp(peerIp: string): any {
    return this.peerPoolDirectory.find((p) => p.getPeerIp() === peerIp);
  }

  public setPeerPoolDirectoryElementByPeerIp(peerIp: string, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerIp() === peerIp);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerPort(peerPort: number): any {
    return this.peerPoolDirectory.find((p) => p.getPeerPort() === peerPort);
  }

  public setPeerPoolDirectoryElementByPeerPort(peerPort: number, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerPort() === peerPort);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerSocket(peerSocket: any): any {
    return this.peerPoolDirectory.find((p) => p.getPeerSocket() === peerSocket);
  }

  public setPeerPoolDirectoryElementByPeerSocket(peerSocket: any, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocket() === peerSocket);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerSocketId(peerSocketId: string): any {
    return this.peerPoolDirectory.find((p) => p.getPeerSocketId() === peerSocketId);
  }

  public setPeerPoolDirectoryElementByPeerSocketId(peerSocketId: string, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocketId() === peerSocketId);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerSocketIp(peerSocketIp: string): any {
    return this.peerPoolDirectory.find((p) => p.getPeerSocketIp() === peerSocketIp);
  }

  public setPeerPoolDirectoryElementByPeerSocketIp(peerSocketIp: string, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocketIp() === peerSocketIp);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public getPeerPoolDirectoryElementByPeerSocketPort(peerSocketPort: number): any {
    return this.peerPoolDirectory.find((p) => p.getPeerSocketPort() === peerSocketPort);
  }

  public setPeerPoolDirectoryElementByPeerSocketPort(peerSocketPort: number, newPeer: any): void {
    const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocketPort() === peerSocketPort);
    if (index !== -1) {
      this.peerPoolDirectory[index] = newPeer;
    }
  }

  public broadcast(message: any): void {
    for (const peer of this.peerPoolDirectory) {
      if (peer && typeof peer.send === "function") {
        peer.send(message);
      }
    }
  }

  public broadcastExcept(message: any, excludedPeer: any): void {
    for (const peer of this.peerPoolDirectory) {
      if (peer !== excludedPeer && typeof peer.send === "function") {
        peer.send(message);
      }
    }
  }

  public broadcastTo(peerPool: any[], message: any): void {
    for (const peer of peerPool) {
      if (peer && typeof peer.send === "function") {
        peer.send(message);
      }
    }
  }

  public broadcastToExcept(peerPool: any[], message: any, excludedPeer: any): void {
    for (const peer of peerPool) {
      if (peer !== excludedPeer && typeof peer.send === "function") {
        peer.send(message);
      }
    }
  }

  public receiveFrom(message: any, peerPool: any[], peer: any): void {
    if (message.type === "request" && message.request === "peerPoolDirectory") {
      for (const otherPeer of peerPool) {
        if (otherPeer !== peer && typeof otherPeer.send === "function") {
          otherPeer.send({
            type: "response",
            response: "peerPoolDirectory",
            peerPoolDirectory: this.peerPoolDirectory,
          });
        }
      }
    }
  }

  public sendTo(peer: any, message: any): void {
    if (peer && typeof peer.send === "function") {
      peer.send(message);
    }
  }

  public sendToPeers(peerPool: any[], message: any): void {
    for (const peer of peerPool) {
      if (peer && typeof peer.send === "function") {
        peer.send(message);
      }
    }
  }

  public disconnect(peer: any): void {
    if (peer && typeof peer.disconnect === "function") {
      peer.disconnect();
    }
  }

  public connect(peer: any): void {
    if (peer && typeof peer.connect === "function") {
      peer.connect();
    }
  }
}

export { PeerPoolDirectory };
