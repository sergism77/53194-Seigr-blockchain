'use strict';

import * as SHA256 from 'crypto-js/sha256';
import * as EC from 'elliptic';

class TransactionOutput {
    recipient: string;
    value: number;
    parentTransactionId: string;
    id: string;

    constructor(recipient: string, value: number, parentTransactionId: string) {
        this.recipient = recipient;
        this.value = value;
        this.parentTransactionId = parentTransactionId;
        this.id = SHA256(this.recipient + this.value + this.parentTransactionId).toString();
    }

    //returns the recipient
    getRecipient(): string {
        return this.recipient;
    }

    //returns the value
    getValue(): number {
        return this.value;
    }

    //returns the parent transaction id
    getParentTransactionId(): string {
        return this.parentTransactionId;
    }

    //returns the id
    getId(): string {
        return this.id;
    }

    //returns the string representation of the transaction output
    toString(): string {
        return "Transaction Output: \n" +
            "Recipient: " + this.recipient + "\n" +
            "Value: " + this.value + "\n" +
            "Parent Transaction Id: " + this.parentTransactionId + "\n" +
            "Id: " + this.id + "\n";
    }
}

export = TransactionOutput;