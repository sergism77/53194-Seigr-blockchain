import { PeerList } from "./peer";
import { PeerPoolDirectory } from "./peerPoolDirectory";

interface Peer {
  connect: () => void;
  disconnect: () => void;
  send: (message: any) => void;
  receive: (message: any) => void;
}

class PeerPoolManager {
  peerList: PeerList;
  peerPoolDirectory: PeerPoolDirectory;

  constructor(peerPoolDirectory: any = {}) {
    this.peerList = new PeerList();
    this.peerPoolDirectory = new PeerPoolDirectory(peerPoolDirectory);
  }

  addPeer(peer: Peer) {
    this.peerList.addPeer(peer);
    this.peerPoolDirectory.addPeer(peer);
  }

  removePeer(peer: Peer) {
    this.peerList.removePeer(peer);
    this.peerPoolDirectory.removePeer(peer);
  }

  connectToPeer(peer: Peer) {
    if (typeof peer.connect === "function") {
      peer.connect();
    } else {
      throw new Error("The peer does not have the connect method");
    }
  }

  disconnectFromPeer(peer: Peer) {
    if (typeof peer.disconnect === "function") {
      peer.disconnect();
    } else {
      throw new Error("The peer does not have the disconnect method");
    }
  }

  sendToPeer(peer: Peer, message: any) {
    if (typeof peer.send === "function") {
      peer.send(message);
    } else {
      throw new Error("The peer does not have the send method");
    }
  }

  receiveFromPeer(peer: Peer, message: any) {
    if (typeof peer.receive === "function") {
      peer.receive(message);
    } else {
      throw new Error("The peer does not have the receive method");
    }
  }

  broadcastToPeers(message: any) {
    if (typeof this.peerList.broadcast === "function") {
      this.peerList.broadcast(message);
    } else {
      throw new Error("The PeerList does not have the broadcast method");
    }
  }

  connectToPeers() {
    if (typeof this.peerList.connect === "function") {
      this.peerList.connect();
    } else {
      throw new Error("The PeerList does not have the connect method");
    }
  }

  disconnectFromPeers() {
    if (typeof this.peerList.disconnect === "function") {
      this.peerList.disconnect();
    } else {
      throw new Error("The PeerList does not have the disconnect method");
    }
  }

  sendToPeers(message: any) {
    if (typeof this.peerList.send === "function") {
      this.peerList.send(message);
    } else {
      throw new Error("The PeerList does not have the send method");
    }
  }

  receiveFromPeers(message: any) {
    if (typeof this.peerList.receive === "function") {
      this.peerList.receive(message);
    } else {
      throw new Error("The PeerList does not have the receive method");
    }
  }

  connectToPeerPoolDirectory() {
    if (typeof this.peerPoolDirectory.connect === "function") {
      this.peerPoolDirectory.connect();
    } else {
      throw new Error("The PeerPoolDirectory does not have the connect method");
    }
  }

  disconnectFromPeerPoolDirectory() {
    if (typeof this.peerPoolDirectory.disconnect === "function") {
      this.peerPoolDirectory.disconnect();
    } else {
      throw new Error("The PeerPoolDirectory does not have the disconnect method");
    }
  }

  sendToPeerPoolDirectory(message: any) {
    if (typeof this.peerPoolDirectory.send === "function") {
      this.peerPoolDirectory.send(message);
    } else {
      throw new Error("The PeerPoolDirectory does not have the send method");
    }
  }

  receiveFromPeerPoolDirectory(message: any) {
    if (typeof this.peerPoolDirectory.receive === "function") {
      this.peerPoolDirectory.receive(message);
    } else {
      throw new Error("The PeerPoolDirectory does not have the receive method");
    }
  }

  broadcastToPeerPoolDirectory(message: any) {
    if (typeof this.peerPoolDirectory.broadcast === "function") {
      this.peerPoolDirectory.broadcast(message);
    } else {
      throw new Error("The PeerPoolDirectory does not have the broadcast method");
    }
  }
}

export default PeerPoolManager;
