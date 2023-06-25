"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerListItem = exports.PeerList = void 0;
class PeerList {
    constructor() {
        this.peers = [];
    }
    addPeer(peer) {
        if (!this.peers.includes(peer)) {
            this.peers.push(peer);
        }
    }
    removePeer(peer) {
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
    send(message) {
        this.peers.forEach(peer => peer.send(message));
    }
    receive(message) {
        this.peers.forEach(peer => peer.receive(message));
    }
    getPeers() {
        return this.peers;
    }
    getPeer(peerId) {
        return this.peers.find(peer => peer.id === peerId) || null;
    }
    getPeerByAddress(address) {
        return this.peers.find(peer => peer.address === address) || null;
    }
    getPeerByPort(port) {
        return this.peers.find(peer => peer.port === port) || null;
    }
    getPeerByLastSeen(lastSeen) {
        return this.peers.find(peer => peer.lastSeen === lastSeen) || null;
    }
    getPeerByLastSeenTimestamp(lastSeenTimestamp) {
        return this.peers.find(peer => peer.lastSeenTimestamp === lastSeenTimestamp) || null;
    }
    getPeerByLastSeenDate(lastSeenDate) {
        return this.peers.find(peer => peer.lastSeenDate === lastSeenDate) || null;
    }
    getPeerByBlockchain(blockchain) {
        return this.peers.find(peer => peer.blockchain === blockchain) || null;
    }
    getPeerByBlockchainLength(blockchainLength) {
        return this.peers.find(peer => peer.blockchainLength === blockchainLength) || null;
    }
    getPeerByBlockchainLastBlock(blockchainLastBlock) {
        return this.peers.find(peer => peer.blockchainLastBlock === blockchainLastBlock) || null;
    }
    getPeerByBlockchainLastBlockHash(blockchainLastBlockHash) {
        return this.peers.find(peer => peer.blockchainLastBlockHash === blockchainLastBlockHash) || null;
    }
    getPeerByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp) {
        return this.peers.find(peer => peer.blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) || null;
    }
    getPeerByBlockchainLastBlockDate(blockchainLastBlockDate) {
        return this.peers.find(peer => peer.blockchainLastBlockDate === blockchainLastBlockDate) || null;
    }
    getPeerPoolSize() {
        return this.peers.length;
    }
    broadcast(message) {
        this.peers.forEach(peer => peer.send(message));
    }
}
exports.PeerList = PeerList;
class PeerListItem {
    constructor(peer) {
        this.peer = peer;
        this.peerListItems = [this];
    }
    addPeerListItem(peerListItem) {
        this.peerListItems.push(peerListItem);
    }
    removePeerListItem(peerListItem) {
        const index = this.peerListItems.indexOf(peerListItem);
        if (index > -1) {
            this.peerListItems.splice(index, 1);
        }
    }
    getPeerListItems() {
        return this.peerListItems;
    }
    getPeerListItem(peerListItemId) {
        return this.peerListItems.find(item => item.peer.id === peerListItemId) || null;
    }
    getPeerListItemByAddress(address) {
        return this.peerListItems.find(item => item.peer.address === address) || null;
    }
    getPeerListItemByPort(port) {
        return this.peerListItems.find(item => item.peer.port === port) || null;
    }
    getPeerListItemByLastSeen(lastSeen) {
        return this.peerListItems.find(item => item.peer.lastSeen === lastSeen) || null;
    }
    getPeerListItemByLastSeenTimestamp(lastSeenTimestamp) {
        return this.peerListItems.find(item => item.peer.lastSeenTimestamp === lastSeenTimestamp) || null;
    }
    getPeerListItemByLastSeenDate(lastSeenDate) {
        return this.peerListItems.find(item => item.peer.lastSeenDate === lastSeenDate) || null;
    }
    getPeerListItemByBlockchain(blockchain) {
        return this.peerListItems.find(item => item.peer.blockchain === blockchain) || null;
    }
    getPeerListItemByBlockchainLength(blockchainLength) {
        return this.peerListItems.find(item => item.peer.blockchainLength === blockchainLength) || null;
    }
    getPeerListItemByBlockchainLastBlock(blockchainLastBlock) {
        return this.peerListItems.find(item => item.peer.blockchainLastBlock === blockchainLastBlock) || null;
    }
    getPeerListItemByBlockchainLastBlockHash(blockchainLastBlockHash) {
        return this.peerListItems.find(item => item.peer.blockchainLastBlockHash === blockchainLastBlockHash) || null;
    }
    getPeerListItemByBlockchainLastBlockTimestamp(blockchainLastBlockTimestamp) {
        return this.peerListItems.find(item => item.peer.blockchainLastBlockTimestamp === blockchainLastBlockTimestamp) || null;
    }
    getPeerListItemByBlockchainLastBlockDate(blockchainLastBlockDate) {
        return this.peerListItems.find(item => item.peer.blockchainLastBlockDate === blockchainLastBlockDate) || null;
    }
    forEach(callback) {
        this.peerListItems.forEach(callback);
    }
    forEachPeer(callback) {
        this.peerListItems.forEach(item => callback(item.peer));
    }
}
exports.PeerListItem = PeerListItem;
