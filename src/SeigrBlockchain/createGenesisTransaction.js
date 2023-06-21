class createGenesisTransaction {
    constructor(sender, receiver, amount) {
      this.lastBlockHash = ""; // the hash of the previous block
      this.timestamp = Date.now(); // creation timestamp
      this.transactions = [
        {
          sender: sender,
          receiver: receiver,
          amount: amount
        }
      ];
      this.hash = ""; // the hash of the genesis block
  
      this.calculateHash();
    }
  
    calculateHash() {
      // Implementation to calculate the hash of the transaction
    }
  
    saveTransaction(filePath) {
      // Implementation to save the transaction to a file
    }
  
    static loadTransaction(filePath) {
      // Implementation to load the transaction from a file
    }
  
    getTransaction() {
      return {
        lastBlockHash: this.lastBlockHash,
        timestamp: this.timestamp,
        transactions: this.transactions,
        hash: this.hash
      };
    }
  }
  
  module.exports = createGenesisTransaction;
  