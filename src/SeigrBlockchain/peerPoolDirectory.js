'use strict';

class PeerPoolDirectory {
    constructor() {
      this.peerPoolDirectory = [];
    }
  
    addPeer(peer) {
      this.peerPoolDirectory.push(peer);
    }
  
    removePeer(peer) {
      this.peerPoolDirectory.splice(this.peerPoolDirectory.indexOf(peer), 1);
    }
  
    getPeerPoolDirectory() {
      return this.peerPoolDirectory;
    }
  
    setPeerPoolDirectory(peerPoolDirectory) {
      this.peerPoolDirectory = peerPoolDirectory;
      return this.peerPoolDirectory;
    }
  }
  
  module.exports = { PeerPoolDirectory };
  