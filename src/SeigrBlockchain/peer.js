class peer {
    constructor() {
        this.id = null;
        this.address = null;
        this.port = null;
        this.lastSeen = null;
        this.lastSeenTimestamp = null;
        this.lastSeenDate = null;
    }
}

class peerList {
    constructor() {
        this.peers = [];
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
}

class peerListItem {
    constructor() {
        this.id = null;
        this.address = null;
        this.port = null;
        this.lastSeen = null;
        this.lastSeenTimestamp = null;
        this.lastSeenDate = null;
    }
}

module.exports = { peer, peerList, peerListItem };