import { PeerList } from "./peer";
import { PeerPoolDirectory } from "./peerPoolDirectory";

class PeerPoolManager {
  peerList: PeerList;
  peerPoolDirectory: PeerPoolDirectory;

  constructor() {
    this.peerList = new PeerList();
    this.peerPoolDirectory = new PeerPoolDirectory();
  }

  addPeer(peer: any) {
    this.peerList.addPeer(peer);
    this.peerPoolDirectory.addPeer(peer);
  }

  removePeer(peer: any) {
    this.peerList.removePeer(peer);
    this.peerPoolDirectory.removePeer(peer);
  }

  connectToPeer(peer: any) {
    peer.connect();
  }

  disconnectFromPeer(peer: any) {
    peer.disconnect();
  }

  sendToPeer(peer: any, message: any) {
    peer.send(message);
  }

  receiveFromPeer(peer: any, message: any) {
    peer.receive(message);
  }

  broadcastToPeers(message: any) {
    this.peerList.broadcast(message);
  }

  connectToPeers() {
    this.peerList.connect();
  }

  disconnectFromPeers() {
    this.peerList.disconnect();
  }

  sendToPeers(message: any) {
    this.peerList.send(message);
  }

  receiveFromPeers(message: any) {
    this.peerList.receive(message);
  }


  connectToPeerPoolDirectory() {
    this.peerPoolDirectory.connect();
  }

  disconnectFromPeerPoolDirectory() {
    this.peerPoolDirectory.disconnect();
  }

  sendToPeerPoolDirectory(message: any) {
    this.peerPoolDirectory.send(message);
  }

  receiveFromPeerPoolDirectory(message: any) {
    this.peerPoolDirectory.receive(message);
  }

  broadcastToPeerPoolDirectory(message: any) {
    this.peerPoolDirectory.broadcast(message);
  }
}

export default PeerPoolManager;
