//this is the output of the transaction

const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;

class TransactionOutput {
    constructor(recipient, value, parentTransactionId) {
        this.recipient = recipient;
        this.value = value;
        this.parentTransactionId = parentTransactionId;
        this.id = SHA256(this.recipient + this.value + this.parentTransactionId).toString();
    }

    //returns the recipient
    getRecipient() {
        return this.recipient;
    }

    //returns the value
    getValue() {
        return this.value;
    }

    //returns the parent transaction id
    getParentTransactionId() {
        return this.parentTransactionId;
    }

    //returns the id
    getId() {
        return this.id;
    }

    //returns the string representation of the transaction output
    toString() {
        return "Transaction Output: \n" +
            "Recipient: " + this.recipient + "\n" +
            "Value: " + this.value + "\n" +
            "Parent Transaction Id: " + this.parentTransactionId + "\n" +
            "Id: " + this.id + "\n";
    }
}

module.exports = TransactionOutput;