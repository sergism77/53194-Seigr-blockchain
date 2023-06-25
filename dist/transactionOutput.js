'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const SHA256 = __importStar(require("crypto-js/sha256"));
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
