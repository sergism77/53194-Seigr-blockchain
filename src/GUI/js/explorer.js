const { ipcRenderer } = require('electron');

class Explorer {
  constructor() {
    // ... any initialization code specific to the Electron app's Explorer ...
  }

  displayBlocks() {
    ipcRenderer.send('display-blocks');
  }

  displayBlockInfo(blockNumber) {
    ipcRenderer.send('display-block-info', blockNumber);
  }

  searchBlocks(blockNumber) {
    ipcRenderer.send('search-blocks', blockNumber);
  }

  searchTransactions(address) {
    ipcRenderer.send('search-transactions', address);
  }

  searchPeers() {
    ipcRenderer.send('search-peers');
  }

  getMiningEffortLast24Hours() {
    ipcRenderer.send('get-mining-effort-last-24-hours');
  }

  getCurrentMiningEffort() {
    ipcRenderer.send('get-current-mining-effort');
  }
}

module.exports = Explorer;
