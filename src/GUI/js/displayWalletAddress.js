// displayWalletAddress.js

// Function to display the wallet address on the page
function showWalletAddressOnPage(address) {
  const walletAddressElement = document.getElementById('walletAddress');
  
  if (walletAddressElement) {
    walletAddressElement.textContent = address;
  } else {
    console.error('Wallet address element not found.');
    // You can show an error message or handle the error gracefully
  }
}

// Export the function
module.exports = { showWalletAddressOnPage };
