const { PeerPoolDirectory } = require("./peerPoolDirectory");

// Assuming you have imported the necessary modules and classes

class Explorer {
  constructor(blockchain, peerPoolDirectory) {
    this.blockchain = blockchain;
    this.peerPoolDirectory = peerPoolDirectory;
  }

  displayBlocks() {
    const blockchainTable = document.getElementById('blockchain-table');
    blockchainTable.innerHTML = ''; // Clear the table before populating

    this.blockchain.chain.forEach((block) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${block.blockNumber}</td>
        <td>${block.hash}</td>
        <td>${block.timestamp}</td>
        <td>${block.transactions.length}</td>
      `;
      blockchainTable.appendChild(row);
    });
  }

  displayBlockInfo(blockNumber) {
    const block = this.blockchain.getBlockByNumber(blockNumber);
    if (!block) {
      console.log(`Block ${blockNumber} not found.`);
      return;
    }

    // Display block information in the UI
    document.getElementById('block-number').textContent = block.blockNumber;
    document.getElementById('block-hash').textContent = block.hash;
    document.getElementById('block-timestamp').textContent = block.timestamp;
    document.getElementById('block-transactions').textContent = block.transactions.length;
    document.getElementById('block-difficulty').textContent = block.difficulty;
  }

  searchBlocks(blockNumber) {
    this.displayBlockInfo(blockNumber);
  }

  searchTransactions(address) {
    const transactions = this.blockchain.getTransactionsByAddress(address);
    // Display transactions in the UI or perform other actions with the transactions data
    console.log(transactions);
  }

  searchPeers() {
    const peers = this.peerPoolDirectory.getPeers();
    // Display peers in the UI or perform other actions with the peers data
    console.log(peers);
  }

  getMiningEffortLast24Hours() {
    const miningEffortLast24Hours = this.blockchain.getMiningEffortLast24Hours();
    // Display mining effort last 24 hours in the UI or perform other actions with the data
    console.log(miningEffortLast24Hours);
  }

  getCurrentMiningEffort() {
    const currentMiningEffort = this.blockchain.getCurrentMiningEffort();
    // Display current mining effort in the UI or perform other actions with the data
    console.log(currentMiningEffort);
  }
}

// Create an instance of the Explorer class with the Seigr Blockchain and PeerPoolDirectory
const explorer = new Explorer(seigrBlockchainInstance, peerPoolDirectoryInstance);

// Call the necessary methods to populate the UI or perform other actions
explorer.displayBlocks();
explorer.displayBlockInfo(1);
explorer.searchBlocks(2);
explorer.searchTransactions('walletAddress');
explorer.searchPeers();
explorer.getMiningEffortLast24Hours();
explorer.getCurrentMiningEffort();


module.exports = { Explorer };
