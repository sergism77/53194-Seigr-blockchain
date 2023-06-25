'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerPool = void 0;
class PeerPool {
    //this is the constructor function.
    constructor() {
        //this is the peerPool property. It will be used to store the peers.
        this.peerPool = [];
    }
    //this is the addPeer function. It will be used to add a peer to the peerPool.
    addPeer(peer) {
        //this will add the peer to the peerPool.
        this.peerPool.push(peer);
    }
    //this is the removePeer function. It will be used to remove a peer from the peerPool.
    removePeer(peer) {
        //this will remove the peer from the peerPool.
        this.peerPool.splice(this.peerPool.indexOf(peer), 1);
    }
    //this is the getPeerPool function. It will be used to get the peerPool.
    getPeerPool() {
        //this will return the peerPool.
        return this.peerPool;
    }
}
exports.PeerPool = PeerPool;
