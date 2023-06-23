const { contextBridge, ipcRenderer } = require('electron');

// Expose a limited set of functions to the renderer process
const exposedAPI = {
  setTitle: (title) => {
    // Handle any errors when calling ipcRenderer.send()
    try {
      ipcRenderer.send('set-title', title);
    } catch (error) {
      console.error('Error calling setTitle:', error);
    }
  },
  // Add more exposed functions here...
  setSubtitle: (subtitle) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');
    
    ipcRenderer.send('set-subtitle', subtitle);
  },
  //do we need to add more exposed functions here? answer: yes
  setWallets: (wallets) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');

    ipcRenderer.send('set-wallets', wallets);
  },
  setWalletsByAddress: (walletsByAddress) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');

    ipcRenderer.send('set-walletsByAddress', walletsByAddress);
  },
  setWalletsByAddressAndToken: (walletsByAddressAndToken) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');

    ipcRenderer.send('set-walletsByAddressAndToken', walletsByAddressAndToken);
  },
  setWalletsByToken: (walletsByToken) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');

    ipcRenderer.send('set-walletsByToken', walletsByToken);
  },
  setWalletsByTokenId: (walletsByTokenId) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');

    ipcRenderer.send('set-walletsByTokenId', walletsByTokenId);
  },
  setWalletsByTokenIdAndAddress: (walletsByTokenIdAndAddress) => {
    // Sets the subtitle of the application window
    // Usage: electronAPI.setSubtitle('My Subtitle');

    ipcRenderer.send('set-walletsByTokenIdAndAddress', walletsByTokenIdAndAddress);

  },



  // Define an interface for the exposed API
  // Include documentation on how to use each function
  // For example:
  // setSubtitle: (subtitle) => {
  //   // Sets the subtitle of the application window
  //   // Usage: electronAPI.setSubtitle('My Subtitle');
  //   ipcRenderer.send('set-subtitle', subtitle);
  // },
};

// Expose the API to the renderer process using contextBridge
contextBridge.exposeInMainWorld('electronAPI', exposedAPI);
