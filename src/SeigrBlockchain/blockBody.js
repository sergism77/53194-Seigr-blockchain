class BlockBody {
    constructor({ transactions }) {
        this.transactions = transactions;
    }

    static genesis() {
        return new this({ transactions: [] });
    }

    addTransaction({ transaction }) {
        // Perform validations on the transaction object here
        // Ensure necessary properties exist and have the correct data types
        this.transactions.push(transaction);
    }

    removeTransaction({ transactionId }) {
        // Implement logic to remove a transaction with the given ID from the transactions array
        // Find the transaction by its ID and remove it from the array
    }

    toString() {
        const formattedTransactions = this.transactions
            .map((transaction) => JSON.stringify(transaction, null, 2))
            .join('\n');
        return `Block Body:
Transactions:
${formattedTransactions}`;
    }

    print() {
        console.log(this.toString());
    }
}

module.exports = BlockBody;
