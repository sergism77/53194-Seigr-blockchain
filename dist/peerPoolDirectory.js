"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerPoolDirectory = void 0;
class PeerPoolDirectory {
    constructor() {
        this.peerPoolDirectory = [];
    }
    addPeer(peer) {
        this.peerPoolDirectory.push(peer);
    }
    removePeer(peer) {
        const index = this.peerPoolDirectory.indexOf(peer);
        if (index !== -1) {
            this.peerPoolDirectory.splice(index, 1);
        }
    }
    getPeerPoolDirectory() {
        return this.peerPoolDirectory;
    }
    setPeerPoolDirectory(peerPoolDirectory) {
        this.peerPoolDirectory = peerPoolDirectory;
    }
    getPeerPoolDirectoryLength() {
        return this.peerPoolDirectory.length;
    }
    getPeerPoolDirectoryElement(index) {
        if (index < 0 || index >= this.peerPoolDirectory.length) {
            throw new Error(`Index ${index} is out of bounds for peerPoolDirectory`);
        }
        return this.peerPoolDirectory[index];
    }
    setPeerPoolDirectoryElement(index, peer) {
        this.peerPoolDirectory[index] = peer;
    }
    getPeerPoolDirectoryElementByPeer(peer) {
        return this.peerPoolDirectory.find((p) => p === peer);
    }
    setPeerPoolDirectoryElementByPeer(peer, newPeer) {
        const index = this.peerPoolDirectory.indexOf(peer);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerId(peerId) {
        return this.peerPoolDirectory.find((p) => p.getPeerId() === peerId);
    }
    setPeerPoolDirectoryElementByPeerId(peerId, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerId() === peerId);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerIp(peerIp) {
        return this.peerPoolDirectory.find((p) => p.getPeerIp() === peerIp);
    }
    setPeerPoolDirectoryElementByPeerIp(peerIp, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerIp() === peerIp);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerPort(peerPort) {
        return this.peerPoolDirectory.find((p) => p.getPeerPort() === peerPort);
    }
    setPeerPoolDirectoryElementByPeerPort(peerPort, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerPort() === peerPort);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerSocket(peerSocket) {
        return this.peerPoolDirectory.find((p) => p.getPeerSocket() === peerSocket);
    }
    setPeerPoolDirectoryElementByPeerSocket(peerSocket, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocket() === peerSocket);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerSocketId(peerSocketId) {
        return this.peerPoolDirectory.find((p) => p.getPeerSocketId() === peerSocketId);
    }
    setPeerPoolDirectoryElementByPeerSocketId(peerSocketId, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocketId() === peerSocketId);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerSocketIp(peerSocketIp) {
        return this.peerPoolDirectory.find((p) => p.getPeerSocketIp() === peerSocketIp);
    }
    setPeerPoolDirectoryElementByPeerSocketIp(peerSocketIp, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocketIp() === peerSocketIp);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    getPeerPoolDirectoryElementByPeerSocketPort(peerSocketPort) {
        return this.peerPoolDirectory.find((p) => p.getPeerSocketPort() === peerSocketPort);
    }
    setPeerPoolDirectoryElementByPeerSocketPort(peerSocketPort, newPeer) {
        const index = this.peerPoolDirectory.findIndex((p) => p.getPeerSocketPort() === peerSocketPort);
        if (index !== -1) {
            this.peerPoolDirectory[index] = newPeer;
        }
    }
    broadcast(message) {
        for (const peer of this.peerPoolDirectory) {
            if (peer && typeof peer.send === "function") {
                peer.send(message);
            }
        }
    }
    broadcastExcept(message, excludedPeer) {
        for (const peer of this.peerPoolDirectory) {
            if (peer !== excludedPeer && typeof peer.send === "function") {
                peer.send(message);
            }
        }
    }
    broadcastTo(peerPool, message) {
        for (const peer of peerPool) {
            if (peer && typeof peer.send === "function") {
                peer.send(message);
            }
        }
    }
    broadcastToExcept(peerPool, message, excludedPeer) {
        for (const peer of peerPool) {
            if (peer !== excludedPeer && typeof peer.send === "function") {
                peer.send(message);
            }
        }
    }
    receiveFrom(message, peerPool, peer) {
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
    sendTo(peer, message) {
        if (peer && typeof peer.send === "function") {
            peer.send(message);
        }
    }
    sendToPeers(peerPool, message) {
        for (const peer of peerPool) {
            if (peer && typeof peer.send === "function") {
                peer.send(message);
            }
        }
    }
    disconnect(peer) {
        if (peer && typeof peer.disconnect === "function") {
            peer.disconnect();
        }
    }
    connect(peer) {
        if (peer && typeof peer.connect === "function") {
            peer.connect();
        }
    }
}
exports.PeerPoolDirectory = PeerPoolDirectory;
