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
  }
  
  export { PeerPoolDirectory };