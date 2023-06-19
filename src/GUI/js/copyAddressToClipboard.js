// copyAddressToClipboard.js

// Function to copy the wallet address to the clipboard
function copyAddressToClipboard() {
    // Implement the logic to copy the wallet address to the clipboard
    const walletAddressElement = document.getElementById('walletAddress');
    const address = walletAddressElement.textContent;
  
    navigator.clipboard.writeText(address)
      .then(() => {
        // Success: Address copied to clipboard
        console.log('Address copied to clipboard:', address);
        // You can also show a success message or trigger a notification here
      })
      .catch((error) => {
        // Error: Failed to copy address to clipboard
        console.error('Failed to copy address to clipboard:', error);
        // You can show an error message or handle the error gracefully
      });
  }
  
  // Export the function
  module.exports = { copyAddressToClipboard };
  