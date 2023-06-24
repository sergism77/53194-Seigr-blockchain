'use strict';

class SeigrBlockchainTransaction {
    transactionId: string | null;
    transactionInputs: any[];
    transactionOutputs: any[];
    transactionFee: number;
    transactionSignature: string | null;
    transactionTimestamp: number;
    transactionHash: string | null;
    transactionSize: number;

    constructor() {
        this.transactionId = null;
        this.transactionInputs = [];
        this.transactionOutputs = [];
        this.transactionFee = 0;
        this.transactionSignature = null;
        this.transactionTimestamp = 0;
        this.transactionHash = null;
        this.transactionSize = 0;
    }

    toString(): string {
        return "Seigr Blockchain Transaction: \n" +
            "Transaction ID: " + this.transactionId + "\n" +
            "Transaction Inputs: " + this.transactionInputs + "\n" +
            "Transaction Outputs: " + this.transactionOutputs + "\n" +
            "Transaction Fee: " + this.transactionFee + "\n" +
            "Transaction Signature: " + this.transactionSignature + "\n" +
            "Transaction Timestamp: " + this.transactionTimestamp + "\n" +
            "Transaction Hash: " + this.transactionHash + "\n" +
            "Transaction Size: " + this.transactionSize + "\n";
    }

    print(): void {
        console.log(this.toString());
    }
}

export = SeigrBlockchainTransaction;