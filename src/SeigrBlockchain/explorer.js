'use strict';

class Explorer {
  constructor(blockchain) {
    this.blockchain = blockchain;
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
  }
}

module.exports = Explorer;
