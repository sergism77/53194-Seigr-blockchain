'use strict';

class Explorer {
  blockchain: any;

  constructor(blockchain: any) {
    this.blockchain = blockchain;
  }

  displayBlocks(): void {
    const blockchainTable = document.getElementById('blockchain-table');
    blockchainTable.innerHTML = ''; // Clear the table before populating

    this.blockchain.chain.forEach((block: any) => {
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

  displayBlockInfo(blockNumber: number): void {
    const block = this.blockchain.getBlockByNumber(blockNumber);
    if (!block) {
      console.log(`Block ${blockNumber} not found.`);
      return;
    }

    // Display block information in the UI
    document.getElementById('block-number').textContent = block.blockNumber.toString();
    document.getElementById('block-hash').textContent = block.hash;
    document.getElementById('block-timestamp').textContent = block.timestamp.toString();
    document.getElementById('block-transactions').textContent = block.transactions.length.toString();
  }
}

export = Explorer;