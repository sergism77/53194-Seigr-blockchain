const { ipcRenderer } = require('electron');

export default class Explorer {
  constructor() {
    // ... any initialization code specific to the Electron app's Explorer ...

    // Listen for async-reply message from main process
    ipcRenderer.on('async-reply', (event, arg) => {
      console.log(arg);
    }
    );

    // Listen for async-error message from main process
    ipcRenderer.on('async-error', (event, arg) => {
      console.log(arg);
    }
    );

    // Listen for sync-reply message from main process
    ipcRenderer.on('sync-reply', (event, arg) => {
      console.log(arg);
    }
    );

    // Listen for sync-error message from main process
    ipcRenderer.on('sync-error', (event, arg) => {
      console.log(arg);
    }
    );

    
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
