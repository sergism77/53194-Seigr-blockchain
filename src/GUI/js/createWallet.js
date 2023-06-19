// createWallet.js

// Function to create a new wallet
function createWallet() {
    // Implement the wallet creation logic
    const wallet = new Wallet();
    wallet.saveWallet(); // Assuming you have a method to save the wallet
    
    // Display the wallet address
    displayWalletAddress(wallet.address);
  }
  
  // Export the function
  module.exports = { createWallet };
  