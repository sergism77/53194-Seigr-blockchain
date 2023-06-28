class DAOSafe {
    balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    deposit(amount: number) {
      if (amount <= 0) {
        throw new Error("Invalid deposit amount. Expected a positive number.");
      }
  
      this.balance += amount;
    }
  
    withdraw(amount: number) {
      if (amount <= 0) {
        throw new Error("Invalid withdrawal amount. Expected a positive number.");
      }
  
      if (amount > this.balance) {
        throw new Error("Insufficient balance in the DAOSafe.");
      }
  
      this.balance -= amount;
    }
  }
  
  export default DAOSafe;
  