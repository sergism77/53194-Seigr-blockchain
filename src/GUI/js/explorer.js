const { PeerPoolDirectory } = require("./peerPoolDirectory");

class Explorer {
  constructor(peerPoolDirectory) {
    this.peerPoolDirectory = peerPoolDirectory;
  }

  searchBlocks() {
    this.peerPoolDirectory.searchBlocks();
  }

  searchTransactions() {
    this.peerPoolDirectory.searchTransactions();
  }

  searchPeers() {
    this.peerPoolDirectory.searchPeers();
  }

  getPeerPoolDirectory() {
    return this.peerPoolDirectory;
  }

  setPeerPoolDirectory(peerPoolDirectory) {
    this.peerPoolDirectory = peerPoolDirectory;
    return this.peerPoolDirectory;
  }
}

module.exports = { Explorer };
