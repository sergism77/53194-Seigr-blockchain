const { Peer, PeerList, PeerListItem } = require("./peer");
const { PeerPool } = require("./peerPool");
const { PeerPoolDirectory } = require("./peerPoolDirectory");
const { PeerPoolManager } = require("./peerPoolManager");

// Initialize peerPoolManager, peerPoolDirectory, peerPool, peerList, etc. (your existing code)

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
  peerPoolListElement.innerHTML = "";

  // Iterate through each peer in the peer pool
  PeerList.forEach((peer) => {
    const listItem = document.createElement("li");
    listItem.textContent = peer.address;
    peerPoolListElement.appendChild(listItem);
  });
}

// Call the displayPeerPool function initially to show the existing peers
displayPeerPool();
