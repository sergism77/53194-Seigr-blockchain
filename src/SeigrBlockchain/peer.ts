interface Peer {
  id: any;
  address: any;
  port: any;
  lastSeen: any;
  lastSeenTimestamp: any;
  lastSeenDate: any;
  blockchain: any;
  blockchainLength: any;
  blockchainLastBlock: any;
  blockchainLastBlockHash: any;
  blockchainLastBlockTimestamp: any;
  blockchainLastBlockDate: any;
  send: (message: any) => void;
  connect: () => void;
  disconnect: () => void;
  receive: (message: any) => void;
}

class PeerList {
  peers: Peer[];

  constructor() {
    this.peers = [];
  }

  addPeer(peer: Peer) {
    this.peers.push(peer);
  }

  removePeer(peer: Peer) {
    const index = this.peers.indexOf(peer);
    if (index > -1) {
      this.peers.splice(index, 1);
    }
  }

  connect() {
    this.peers.forEach(peer => peer.connect());
  }

  disconnect() {
    this.peers.forEach(peer => peer.disconnect());
  }

  send(message: any) {
    this.peers.forEach(peer => peer.send(message));
  }

  receive(message: any) {
    this.peers.forEach(peer => peer.receive(message));
  }

  getPeers() {
    return this.peers;
  }

  getPeer(peerId: any) {
    return this.peers.find(peer => peer.id === peerId) || null;
  }

  getPeerByAddress(address: any) {
    return this.peers.find(peer => peer.address === address) || null;
  }

  getPeerByPort(port: any) {
    return this.peers.find(peer => peer.port === port) || null;
  }

  getPeerByLastSeen(lastSeen: any) {
    return this.peers.find(peer => peer.lastSeen === lastSeen) || null;
  }

  getPeerByLastSeenTimestamp(lastSeenTimestamp: any) {
    return this.peers.find(peer => peer.lastSeenTimestamp === lastSeenTimestamp) || null;
  }

  getPeerByLastSeenDate(lastSeenDate: any) {
    return this.peers.find(peer => peer.lastSeenDate === lastSeenDate) || null;
  }

  getPeerByBlockchain(blockchain: any) {
    return this.peers.find(peer => peer.blockchain === blockchain) || null;
  }

  getPeerByBlockchainLength(blockchainLength: any) {
    return this.peers.find(peer => peer.blockchainLength === blockchainLength) || null;
  }

  getPeerByBlockchainLastBlock(blockchainLastBlock: any) {
    return this.peers.find(peer => peer.blockchainLastBlock === blockchainLastBlock) || null;
  }

  getPeerByBlockchainLastBlockHash(blockchainLastBlockHash: any) {
    return this.peers.find(peer => peer.blockchainLastBlockHash === blockchainLastBlockHash) || null;
  }

  getPeerByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp: any) {
    return this.peers.find(peer => peer.blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) || null;
  }

  getPeerByBlockchainLastBlockDate(blockchainLastBlockDate: any) {
    return this.peers.find(peer => peer.blockchainLastBlockDate === blockchainLastBlockDate) || null;
  }

  broadcast = (message: any) => {
    this.peers.forEach(peer => peer.send(message));
  }
}

class PeerListItem {
  peer: Peer;
  peerListItems: PeerListItem[];

  constructor(peer: Peer) {
    this.peer = peer;
    this.peerListItems = [this];
  }

  addPeerListItem(peerListItem: PeerListItem) {
    this.peerListItems.push(peerListItem);
  }

  removePeerListItem(peerListItem: PeerListItem) {
    const index = this.peerListItems.indexOf(peerListItem);
    if (index > -1) {
      this.peerListItems.splice(index, 1);
    }
  }

  getPeerListItems() {
    return this.peerListItems;
  }

  getPeerListItem(peerListItemId: any) {
    return this.peerListItems.find(item => item.peer.id === peerListItemId) || null;
  }

  getPeerListItemByAddress(address: any) {
    return this.peerListItems.find(item => item.peer.address === address) || null;
  }

  getPeerListItemByPort(port: any) {
    return this.peerListItems.find(item => item.peer.port === port) || null;
  }

  getPeerListItemByLastSeen(lastSeen: any) {
    return this.peerListItems.find(item => item.peer.lastSeen === lastSeen) || null;
  }

  getPeerListItemByLastSeenTimestamp(lastSeenTimestamp: any) {
    return this.peerListItems.find(item => item.peer.lastSeenTimestamp === lastSeenTimestamp) || null;
  }

  getPeerListItemByLastSeenDate(lastSeenDate: any) {
    return this.peerListItems.find(item => item.peer.lastSeenDate === lastSeenDate) || null;
  }

  getPeerListItemByBlockchain(blockchain: any) {
    return this.peerListItems.find(item => item.peer.blockchain === blockchain) || null;
  }

  getPeerListItemByBlockchainLength(blockchainLength: any) {
    return this.peerListItems.find(item => item.peer.blockchainLength === blockchainLength) || null;
  }

  getPeerListItemByBlockchainLastBlock(blockchainLastBlock: any) {
    return this.peerListItems.find(item => item.peer.blockchainLastBlock === blockchainLastBlock) || null;
  }

  getPeerListItemByBlockchainLastBlockHash(blockchainLastBlockHash: any) {
    return this.peerListItems.find(item => item.peer.blockchainLastBlockHash === blockchainLastBlockHash) || null;
  }

  getPeerListItemByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp: any) {
    return this.peerListItems.find(item => item.peer.blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) || null;
  }

  getPeerListItemByBlockchainLastBlockDate(blockchainLastBlockDate: any) {
    return this.peerListItems.find(item => item.peer.blockchainLastBlockDate === blockchainLastBlockDate) || null;
  }

  forEach(callback: (peerListItem: PeerListItem) => void) {
    this.peerListItems.forEach(callback);
  }

  forEachPeer(callback: (peer: Peer) => void) {
    this.peerListItems.forEach(item => callback(item.peer));
  }
}

export { Peer, PeerList, PeerListItem };
