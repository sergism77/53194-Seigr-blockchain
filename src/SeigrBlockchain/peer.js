class Peer {
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
    constructor() {
      this.peers = [];
  
      this.blockchain = null;
      this.blockchainLength = null;
      this.blockchainLastBlock = null;
      this.blockchainLastBlockHash = null;
      this.blockchainLastBlockTimestamp = null;
      this.blockchainLastBlockDate = null;
    }
  
    addPeer(peer) {
      this.peers.push(peer);
    }
  
    removePeer(peer) {
      this.peers.splice(this.peers.indexOf(peer), 1);
    }
  
    getPeers() {
      return this.peers;
    }
  
    getPeer(peerId) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].id === peerId) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByAddress(address) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].address === address) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByPort(port) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].port === port) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByLastSeen(lastSeen) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].lastSeen === lastSeen) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByLastSeenTimestamp(lastSeenTimestamp) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].lastSeenTimestamp === lastSeenTimestamp) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByLastSeenDate(lastSeenDate) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].lastSeenDate === lastSeenDate) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByBlockchain(blockchain) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].blockchain === blockchain) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByBlockchainLength(blockchainLength) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].blockchainLength === blockchainLength) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByBlockchainLastBlock(blockchainLastBlock) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].blockchainLastBlock === blockchainLastBlock) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByBlockchainLastBlockHash(blockchainLastBlockHash) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].blockchainLastBlockHash === blockchainLastBlockHash) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) {
          return this.peers[i];
        }
      }
      return null;
    }
  
    getPeerByBlockchainLastBlockDate(blockchainLastBlockDate) {
      for (let i = 0; i < this.peers.length; i++) {
        if (this.peers[i].blockchainLastBlockDate === blockchainLastBlockDate) {
          return this.peers[i];
        }
      }
      return null;
    }
  }
  
  class PeerListItem {
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
  
    addPeerListItem(peerListItem) {
      this.peerListItems.push(peerListItem);
    }
  
    removePeerListItem(peerListItem) {
      this.peerListItems.splice(this.peerListItems.indexOf(peerListItem), 1);
    }
  
    getPeerListItems() {
      return this.peerListItems;
    }
  
    getPeerListItem(peerListItemId) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].id === peerListItemId) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByAddress(address) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].address === address) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPort(port) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].port === port) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByLastSeen(lastSeen) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].lastSeen === lastSeen) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByLastSeenTimestamp(lastSeenTimestamp) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].lastSeenTimestamp === lastSeenTimestamp) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByLastSeenDate(lastSeenDate) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].lastSeenDate === lastSeenDate) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByBlockchain(blockchain) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].blockchain === blockchain) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByBlockchainLength(blockchainLength) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].blockchainLength === blockchainLength) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByBlockchainLastBlock(blockchainLastBlock) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].blockchainLastBlock === blockchainLastBlock) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByBlockchainLastBlockHash(blockchainLastBlockHash) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].blockchainLastBlockHash === blockchainLastBlockHash) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByBlockchainLastBlockDate(blockchainLastBlockDate) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].blockchainLastBlockDate === blockchainLastBlockDate) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeer(peer) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer === peer) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerId(peerId) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.id === peerId) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerAddress(peerAddress) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.address === peerAddress) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerPort(peerPort) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.port === peerPort) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerLastSeen(peerLastSeen) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.lastSeen === peerLastSeen) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerLastSeenTimestamp(peerLastSeenTimestamp) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.lastSeenTimestamp === peerLastSeenTimestamp) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerLastSeenDate(peerLastSeenDate) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.lastSeenDate === peerLastSeenDate) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchain(peerBlockchain) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchain === peerBlockchain) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLength(peerBlockchainLength) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLength === peerBlockchainLength) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlock(peerBlockchainLastBlock) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlock === peerBlockchainLastBlock) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockHash(peerBlockchainLastBlockHash) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockHash === peerBlockchainLastBlockHash) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockTimestamp(peerBlockchainLastBlockTimestamp) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockTimestamp === peerBlockchainLastBlockTimestamp) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockDate(peerBlockchainLastBlockDate) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockDate === peerBlockchainLastBlockDate) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockHash(peerBlockchainLastBlockHash) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockHash === peerBlockchainLastBlockHash) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockTimestamp(peerBlockchainLastBlockTimestamp) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockTimestamp === peerBlockchainLastBlockTimestamp) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockDate(peerBlockchainLastBlockDate) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockDate === peerBlockchainLastBlockDate) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockHash(peerBlockchainLastBlockHash) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockHash === peerBlockchainLastBlockHash) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockTimestamp(peerBlockchainLastBlockTimestamp) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockTimestamp === peerBlockchainLastBlockTimestamp) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  
    getPeerListItemByPeerBlockchainLastBlockDate(peerBlockchainLastBlockDate) {
      for (let i = 0; i < this.peerListItems.length; i++) {
        if (this.peerListItems[i].peer.blockchainLastBlockDate === peerBlockchainLastBlockDate) {
          return this.peerListItems[i];
        }
      }
      return null;
    }
  }
  
  module.exports = { Peer, PeerList, PeerListItem };
  