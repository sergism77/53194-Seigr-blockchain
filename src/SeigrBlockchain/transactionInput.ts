'use strict';

import * as SHA256 from 'crypto-js/sha256';
import * as EC from 'elliptic';
const ec = new EC.ec('secp256k1');
import { v4 as uuidv4 } from 'uuid';

class TransactionInput {
    transactionOutputId: string;
    UTXO: any;

    constructor(transactionOutputId: string) {
        this.transactionOutputId = transactionOutputId;
        this.UTXO = null;
    }

    //returns true if the transaction output can be used as an input to the transaction
    canBeUsedAsInputToTransaction(): boolean {
        if (this.UTXO == null) {
            return false;
        }
        return true;
    }

    //returns the transaction output id
    getTransactionOutputId(): string {
        return this.transactionOutputId;
    }

    //returns the UTXO
    getUTXO(): any {
        return this.UTXO;
    }

    //sets the UTXO
    setUTXO(UTXO: any): void {
        this.UTXO = UTXO;
    }

    //returns the string representation of the transaction input
    toString(): string {
        return "Transaction Input: \n" +
            "Transaction Output Id: " + this.transactionOutputId + "\n";
    }
}

export = TransactionInput;