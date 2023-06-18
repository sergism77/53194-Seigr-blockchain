//this is the PeerPoolManager class. It will be used to manage the PeerPool.

const PeerPoolManager = class { 
    //this is the constructor function.
    constructor() {
        //this is the peerList property. It will be used to store the peers.
        this.peerList = new PeerList();
        //this is the peerPoolDirectory property. It will be used to store the peerPoolDirectory.
        this.peerPoolDirectory = new PeerPoolDirectory();
    }
    //this is the addPeer function. It will be used to add a peer to the peerPool.
    addPeer(peer) {
        //this will add the peer to the peerList.
        this.peerList.addPeer(peer);
        //this will add the peer to the peerPoolDirectory.
        this.peerPoolDirectory.addPeer(peer);
    }
    //this is the removePeer function. It will be used to remove a peer from the peerPool.
    removePeer(peer) {
        //this will remove the peer from the peerList.
        this.peerList.removePeer(peer);
        //this will remove the peer from the peerPoolDirectory.
        this.peerPoolDirectory.removePeer(peer);
    }
    //this is the connect function. It will be used to connect to a peer.
    connect(peer) {
        //this will connect to the peer.
        peer.connect();
    }
    //this is the disconnect function. It will be used to disconnect from a peer.
    disconnect(peer) {
        //this will disconnect from the peer.
        peer.disconnect();
    }
    //this is the send function. It will be used to send a message to a peer.
    send(peer, message) {
        //this will send the message to the peer.
        peer.send(message);
    }
    //this is the receive function. It will be used to receive a message from a peer.
    receive(peer, message) {
        //this will receive the message from the peer.
        peer.receive(message);
    }
    //this is the broadcast function. It will be used to broadcast a message to all peers.
    broadcast(message) {
        //this will broadcast the message to all peers.
        this.peerList.broadcast(message);
    }
    //this is the getPeerList function. It will be used to get the peerList.
    getPeerList() {
        //this will return the peerList.
        return this.peerList;
    }
    //this is the getPeerPoolDirectory function. It will be used to get the peerPoolDirectory.
    getPeerPoolDirectory()
    {
        //this will return the peerPoolDirectory.
        return this.peerPoolDirectory;
    }
    //this is the setPeerList function. It will be used to set the peerList.
    setPeerList(peerList) {
        //this will set the peerList.
        this.peerList = peerList;

        //this will return the peerList.
        return this.peerList;

    }
    //this is the setPeerPoolDirectory function. It will be used to set the peerPoolDirectory.
    setPeerPoolDirectory(peerPoolDirectory) {
        //this will set the peerPoolDirectory.
        this.peerPoolDirectory = peerPoolDirectory;

        //this will return the peerPoolDirectory.
        return this.peerPoolDirectory;
    }
    //this is the connectToPeer function. It will be used to connect to a peer.
    connectToPeer(peer) {
        //this will connect to the peer.
        peer.connect();
    }
    //this is the disconnectFromPeer function. It will be used to disconnect from a peer.
    disconnectFromPeer(peer) {
        //this will disconnect from the peer.
        peer.disconnect();
    }
    //this is the sendToPeer function. It will be used to send a message to a peer.
    sendToPeer(peer, message) {
        //this will send the message to the peer.
        peer.send(message);
    }

    //this is the receiveFromPeer function. It will be used to receive a message from a peer.
    receiveFromPeer(peer, message) {
        //this will receive the message from the peer.
        peer.receive(message);
    }
    //this is the broadcastToPeers function. It will be used to broadcast a message to all peers.
    broadcastToPeers(message) {
        //this will broadcast the message to all peers.
        this.peerList.broadcast(message);
    }

    //this is the connectToPeers function. It will be used to connect to all peers.
    connectToPeers() {
        //this will connect to all peers.
        this.peerList.connect();
    }
    //this is the disconnectFromPeers function. It will be used to disconnect from all peers.
    disconnectFromPeers() {
        //this will disconnect from all peers.
        this.peerList.disconnect();
    }
    //this is the sendToPeers function. It will be used to send a message to all peers.
    sendToPeers(message) {
        //this will send the message to all peers.
        this.peerList.send(message);
    }
    //this is the receiveFromPeers function. It will be used to receive a message from all peers.
    receiveFromPeers(message) {
        //this will receive the message from all peers.
        this.peerList.receive(message);
    }
    //this is the broadcastToPeers function. It will be used to broadcast a message to all peers.
    broadcastToPeers(message) {
        //this will broadcast the message to all peers.
        this.peerList.broadcast(message);
    }
    //this is the connectToPeerPoolDirectory function. It will be used to connect to all peers in the peerPoolDirectory.
    connectToPeerPoolDirectory() {
        //this will connect to all peers in the peerPoolDirectory.
        this.peerPoolDirectory.connect();
    }
    //this is the disconnectFromPeerPoolDirectory function. It will be used to disconnect from all peers in the peerPoolDirectory.
    disconnectFromPeerPoolDirectory() {
        //this will disconnect from all peers in the peerPoolDirectory.
        this.peerPoolDirectory.disconnect();
    }
    //this is the sendToPeerPoolDirectory function. It will be used to send a message to all peers in the peerPoolDirectory.
    sendToPeerPoolDirectory(message) {
        //this will send the message to all peers in the peerPoolDirectory.
        this.peerPoolDirectory.send(message);
    }
    //this is the receiveFromPeerPoolDirectory function. It will be used to receive a message from all peers in the peerPoolDirectory.
    receiveFromPeerPoolDirectory(message) {
        //this will receive the message from all peers in the peerPoolDirectory.
        this.peerPoolDirectory.receive(message);
    }

    //this is the broadcastToPeerPoolDirectory function. It will be used to broadcast a message to all peers in the peerPoolDirectory.
    broadcastToPeerPoolDirectory(message) {
        //this will broadcast the message to all peers in the peerPoolDirectory.
        this.peerPoolDirectory.broadcast(message);
    }
    //this is the connectToPeerPool function. It will be used to connect to all peers in the peerPool.
    connectToPeerPool() {
        //this will connect to all peers in the peerPool.
        this.peerPool.connect();
    }

    //this is the disconnectFromPeerPool function. It will be used to disconnect from all peers in the peerPool.
    disconnectFromPeerPool() {
        //this will disconnect from all peers in the peerPool.
        this.peerPool.disconnect();
    }
    //this is the sendToPeerPool function. It will be used to send a message to all peers in the peerPool.
    sendToPeerPool(message) {
        //this will send the message to all peers in the peerPool.
        this.peerPool.send(message);
    }
    //this is the receiveFromPeerPool function. It will be used to receive a message from all peers in the peerPool.
    receiveFromPeerPool(message) {
        //this will receive the message from all peers in the peerPool.
        this.peerPool.receive(message);
    }
    //this is the broadcastToPeerPool function. It will be used to broadcast a message to all peers in the peerPool.
    broadcastToPeerPool(message) {
        //this will broadcast the message to all peers in the peerPool.
        this.peerPool.broadcast(message);
    }
    
}

module.exports = PeerPoolManager;
