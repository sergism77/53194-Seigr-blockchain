// copyAddressToClipboard.js

// Function to copy the wallet address to the clipboard
function copyAddressToClipboard() {
  const walletAddressElement = document.getElementById('walletAddress');
  
  if (!walletAddressElement) {
    // Wallet address element not found
    return;
  }
  
  const address = walletAddressElement.textContent.trim();
  
  if (!address) {
    // Wallet address is empty or invalid
    return;
  }
  
  const supported = !!navigator.clipboard && typeof navigator.clipboard.writeText === "function";
  
  if (supported) {
    // Use the navigator.clipboard API
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
  } else {
    // Use another clipboard-copying method
    const textarea = document.createElement('textarea');
    textarea.value = address;
    document.body.appendChild(textarea);
    textarea.select();
  
    try {
      document.execCommand('copy');
      console.log('Address copied to clipboard:', address);
      // You can also show a success message or trigger a notification here
    } catch (error) {
      console.error('Failed to copy address to clipboard:', error);
      // You can show an error message or handle the error gracefully
    }
  
    document.body.removeChild(textarea);
  }
}

// Export the function
module.exports = { copyAddressToClipboard };
