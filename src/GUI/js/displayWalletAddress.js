// displayWalletAddress.js

// Function to display the wallet address
function displayWalletAddress(address) {
    const walletAddressElement = document.getElementById('walletAddress');
    walletAddressElement.textContent = address;
  }
  
  // Export the function
  module.exports = { displayWalletAddress };
  