const { Peer } = require("../..SeigrBlockchain/peer");
const { PeerPool } = require("../..SeigrBlockchain/peerPool");
const { PeerPoolDirectory } = require("../..SeigrBlockchain/peerPoolDirectory");
const { PeerPoolManager } = require("../..SeigrBlockchain/peerPoolManager");

// Initialize the peerPool, peerPoolDirectory, peerPoolManager, etc. with Seigr Blockchain (your existing code)

// Add Peer Button
const addPeerBtn = document.getElementById("addPeerBtn");
addPeerBtn.addEventListener("click", () => {
  const peerAddressInput = document.getElementById("peerAddressInput");
  const peerAddress = peerAddressInput.value;

  // Create a new peer
  const newPeer = new Peer(peerAddress);

  // Add the peer to the peer pool
  PeerPool.addPeer(newPeer);

  // Clear the input field
  peerAddressInput.value = "";

  // Update the peer pool display
  displayPeerPool();
});

// Display Peer Pool
function displayPeerPool() {
  const peerPoolListElement = document.getElementById("peerPoolList");
  peerPoolListElement.innerHTML = "";

  // Iterate through each peer in the peer pool
  PeerPool.peers.forEach((peer) => {
    const listItem = document.createElement("li");
    listItem.textContent = peer.address;
    peerPoolListElement.appendChild(listItem);
  });
}

// Call the displayPeerPool function initially to show the existing peers
displayPeerPool();
