'use strict';

class createGenesisTransaction {
    lastBlockHash: string = ""; // the hash of the previous block
    timestamp: number = Date.now(); // creation timestamp
    transactions: {sender: string, receiver: string, amount: number}[] = [
        {
            sender: "",
            receiver: "",
            amount: 0
        }
    ];
    hash: string = ""; // the hash of the genesis block

    constructor(sender: string, receiver: string, amount: number) {
        this.transactions = [
            {
                sender: sender,
                receiver: receiver,
                amount: amount
            }
        ];

        this.calculateHash();
    }

    calculateHash(): void {
        // Implementation to calculate the hash of the transaction
    }

    saveTransaction(filePath: string): void {
        // Implementation to save the transaction to a file
    }

    static loadTransaction(filePath: string): createGenesisTransaction {
        // Implementation to load the transaction from a file
        return new createGenesisTransaction("", "", 0);
    }

    getTransaction(): {lastBlockHash: string, timestamp: number, transactions: {sender: string, receiver: string, amount: number}[], hash: string} {
        return {
            lastBlockHash: this.lastBlockHash,
            timestamp: this.timestamp,
            transactions: this.transactions,
            hash: this.hash
        };
    }
}

export = createGenesisTransaction;