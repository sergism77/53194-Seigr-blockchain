
class BlockBody {
    constructor({ transactions }) {
        this.transactions = transactions;
    }

    static genesis() {
        return new this({ transactions: [] });
    }

    addTransaction({ transaction }) {
        this.transactions.push(transaction);
    }

    toString() {
        return `Block Body: 
        Transactions: ${this.transactions}`;
    }

    print() {
        console.log(this.toString());
    }
}

module.exports = BlockBody;