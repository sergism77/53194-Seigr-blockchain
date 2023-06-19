// updateBalance.js

// Function to update the balance display
function updateBalance(balance) {
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = balance;
  }
  
  // Export the function
  module.exports = { updateBalance };
  