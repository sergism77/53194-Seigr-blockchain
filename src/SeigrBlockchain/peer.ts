class Peer {
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
    static forEach: any;

  constructor() {
    this.id = null;
    this.address = null;
    this.port = null;
    this.lastSeen = null;
    this.lastSeenTimestamp = null;
    this.lastSeenDate = null;
    this.blockchain = null;
    this.blockchainLength = null;
    this.blockchainLastBlock = null;
    this.blockchainLastBlockHash = null;
    this.blockchainLastBlockTimestamp = null;
    this.blockchainLastBlockDate = null;
  }
}

class PeerList {
  peers: Peer[];
  blockchain: any;
  blockchainLength: any;
  blockchainLastBlock: any;
  blockchainLastBlockHash: any;
  blockchainLastBlockTimestamp: any;
  blockchainLastBlockDate: any;

  constructor() {
    this.peers = [];
    this.blockchain = null;
    this.blockchainLength = null;
    this.blockchainLastBlock = null;
    this.blockchainLastBlockHash = null;
    this.blockchainLastBlockTimestamp = null;
    this.blockchainLastBlockDate = null;
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

  getPeers() {
    return this.peers;
  }

  getPeer(peerId: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].id === peerId) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByAddress(address: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].address === address) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByPort(port: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].port === port) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByLastSeen(lastSeen: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].lastSeen === lastSeen) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByLastSeenTimestamp(lastSeenTimestamp: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].lastSeenTimestamp === lastSeenTimestamp) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByLastSeenDate(lastSeenDate: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].lastSeenDate === lastSeenDate) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByBlockchain(blockchain: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].blockchain === blockchain) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByBlockchainLength(blockchainLength: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].blockchainLength === blockchainLength) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByBlockchainLastBlock(blockchainLastBlock: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].blockchainLastBlock === blockchainLastBlock) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByBlockchainLastBlockHash(blockchainLastBlockHash: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].blockchainLastBlockHash === blockchainLastBlockHash) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) {
        return this.peers[i];
      }
    }
    return null;
  }

  getPeerByBlockchainLastBlockDate(blockchainLastBlockDate: any) {
    for (let i = 0; i < this.peers.length; i++) {
      if (this.peers[i].blockchainLastBlockDate === blockchainLastBlockDate) {
        return this.peers[i];
      }
    }
    return null;
  }
}

class PeerListItem {
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
  peer: any;
  peerList: any;
  peerListItem: any;
  peerListItems: PeerListItem[];

  constructor() {
    this.id = null;
    this.address = null;
    this.port = null;
    this.lastSeen = null;
    this.lastSeenTimestamp = null;
    this.lastSeenDate = null;
    this.blockchain = null;
    this.blockchainLength = null;
    this.blockchainLastBlock = null;
    this.blockchainLastBlockHash = null;
    this.blockchainLastBlockTimestamp = null;
    this.blockchainLastBlockDate = null;
    this.peer = null;
    this.peerList = null;
    this.peerListItem = null;
    this.peerListItems = [];
    this.peerListItems.push(this);
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
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].id === peerListItemId) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByAddress(address: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].address === address) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPort(port: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].port === port) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByLastSeen(lastSeen: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].lastSeen === lastSeen) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByLastSeenTimestamp(lastSeenTimestamp: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].lastSeenTimestamp === lastSeenTimestamp) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByLastSeenDate(lastSeenDate: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].lastSeenDate === lastSeenDate) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByBlockchain(blockchain: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].blockchain === blockchain) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByBlockchainLength(blockchainLength: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].blockchainLength === blockchainLength) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByBlockchainLastBlock(blockchainLastBlock: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].blockchainLastBlock === blockchainLastBlock) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByBlockchainLastBlockHash(blockchainLastBlockHash: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].blockchainLastBlockHash === blockchainLastBlockHash) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByBlockchainLastBlockDate(blockchainLastBlockDate: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].blockchainLastBlockDate === blockchainLastBlockDate) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeer(peer: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer === peer) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerId(peerId: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.id === peerId) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerAddress(peerAddress: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.address === peerAddress) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerPort(peerPort: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.port === peerPort) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerLastSeen(peerLastSeen: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.lastSeen === peerLastSeen) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerLastSeenTimestamp(peerLastSeenTimestamp: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.lastSeenTimestamp === peerLastSeenTimestamp) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerLastSeenDate(peerLastSeenDate: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.lastSeenDate === peerLastSeenDate) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerBlockchain(peerBlockchain: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.blockchain === peerBlockchain) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerBlockchainLength(peerBlockchainLength: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.blockchainLength === peerBlockchainLength) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  getPeerListItemByPeerBlockchainLastBlock(peerBlockchainLastBlock: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      if (this.peerListItems[i].peer.blockchainLastBlock === peerBlockchainLastBlock) {
        return this.peerListItems[i];
      }
    }
    return null;
  }

  forEach(callback: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      callback(this.peerListItems[i]);
    }
  }

  forEachPeer(callback: any) {
    for (let i = 0; i < this.peerListItems.length; i++) {
      callback(this.peerListItems[i].peer);
    }
  }

}

export { Peer, PeerList, PeerListItem };
