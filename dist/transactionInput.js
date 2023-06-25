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
const EC = __importStar(require("elliptic"));
const ec = new EC.ec('secp256k1');
class TransactionInput {
    constructor(transactionOutputId) {
        this.transactionOutputId = transactionOutputId;
        this.UTXO = null;
    }
    //returns true if the transaction output can be used as an input to the transaction
    canBeUsedAsInputToTransaction() {
        if (this.UTXO == null) {
            return false;
        }
        return true;
    }
    //returns the transaction output id
    getTransactionOutputId() {
        return this.transactionOutputId;
    }
    //returns the UTXO
    getUTXO() {
        return this.UTXO;
    }
    //sets the UTXO
    setUTXO(UTXO) {
        this.UTXO = UTXO;
    }
    //returns the string representation of the transaction input
    toString() {
        return "Transaction Input: \n" +
            "Transaction Output Id: " + this.transactionOutputId + "\n";
    }
}
module.exports = TransactionInput;
