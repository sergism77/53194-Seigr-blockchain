"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const peer_1 = require("./peer");
const peerPoolDirectory_1 = require("./peerPoolDirectory");
class PeerPoolManager {
    constructor(peerPoolDirectory = {}) {
        this.peerList = new peer_1.PeerList();
        this.peerPoolDirectory = new peerPoolDirectory_1.PeerPoolDirectory(peerPoolDirectory);
    }
    addPeer(peer) {
        this.peerList.addPeer(peer);
        this.peerPoolDirectory.addPeer(peer);
    }
    removePeer(peer) {
        this.peerList.removePeer(peer);
        this.peerPoolDirectory.removePeer(peer);
    }
    connectToPeer(peer) {
        if (typeof peer.connect === "function") {
            peer.connect();
        }
        else {
            throw new Error("The peer does not have the connect method");
        }
    }
    disconnectFromPeer(peer) {
        if (typeof peer.disconnect === "function") {
            peer.disconnect();
        }
        else {
            throw new Error("The peer does not have the disconnect method");
        }
    }
    sendToPeer(peer, message) {
        if (typeof peer.send === "function") {
            peer.send(message);
        }
        else {
            throw new Error("The peer does not have the send method");
        }
    }
    receiveFromPeer(peer, message) {
        if (typeof peer.receive === "function") {
            peer.receive(message);
        }
        else {
            throw new Error("The peer does not have the receive method");
        }
    }
    broadcastToPeers(message) {
        if (typeof this.peerList.broadcast === "function") {
            this.peerList.broadcast(message);
        }
        else {
            throw new Error("The PeerList does not have the broadcast method");
        }
    }
    connectToPeers() {
        if (typeof this.peerList.connect === "function") {
            this.peerList.connect();
        }
        else {
            throw new Error("The PeerList does not have the connect method");
        }
    }
    disconnectFromPeers() {
        if (typeof this.peerList.disconnect === "function") {
            this.peerList.disconnect();
        }
        else {
            throw new Error("The PeerList does not have the disconnect method");
        }
    }
    sendToPeers(message) {
        if (typeof this.peerList.send === "function") {
            this.peerList.send(message);
        }
        else {
            throw new Error("The PeerList does not have the send method");
        }
    }
    receiveFromPeers(message) {
        if (typeof this.peerList.receive === "function") {
            this.peerList.receive(message);
        }
        else {
            throw new Error("The PeerList does not have the receive method");
        }
    }
    connectToPeerPoolDirectory() {
        if (typeof this.peerPoolDirectory.connect === "function") {
            this.peerPoolDirectory.connect();
        }
        else {
            throw new Error("The PeerPoolDirectory does not have the connect method");
        }
    }
    disconnectFromPeerPoolDirectory() {
        if (typeof this.peerPoolDirectory.disconnect === "function") {
            this.peerPoolDirectory.disconnect();
        }
        else {
            throw new Error("The PeerPoolDirectory does not have the disconnect method");
        }
    }
    sendToPeerPoolDirectory(message) {
        if (typeof this.peerPoolDirectory.send === "function") {
            this.peerPoolDirectory.send(message);
        }
        else {
            throw new Error("The PeerPoolDirectory does not have the send method");
        }
    }
    receiveFromPeerPoolDirectory(message) {
        if (typeof this.peerPoolDirectory.receive === "function") {
            this.peerPoolDirectory.receive(message);
        }
        else {
            throw new Error("The PeerPoolDirectory does not have the receive method");
        }
    }
    broadcastToPeerPoolDirectory(message) {
        if (typeof this.peerPoolDirectory.broadcast === "function") {
            this.peerPoolDirectory.broadcast(message);
        }
        else {
            throw new Error("The PeerPoolDirectory does not have the broadcast method");
        }
    }
}
exports.default = PeerPoolManager;
