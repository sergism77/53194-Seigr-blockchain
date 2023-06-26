"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransaction = exports.filterTxPoolTxs = exports.createTxOuts = exports.getPublicFromWallet = exports.getBalance = void 0;
const lodash_1 = __importDefault(require("lodash"));
const transaction_1 = require("./transaction");
const elliptic_1 = require("elliptic");
const getBalance = (address, unspentTxOuts = []) => {
    return (0, lodash_1.default)((0, transaction_1.findUnspentTxOut)(address, 0, unspentTxOuts))
        .map((uTxO) => {
        if (typeof uTxO === 'string') {
            throw new Error('Invalid UnspentTxOut type');
        }
        return uTxO.amount;
    })
        .sum();
};
exports.getBalance = getBalance;
const getPublicFromWallet = (aWallet) => {
    return aWallet.keyPair.getPublic().encode('hex');
};
exports.getPublicFromWallet = getPublicFromWallet;
const createTxOuts = (receiverAddress, myAddress, amount, leftOverAmount) => {
    const txOut1 = { address: receiverAddress, amount: amount };
    if (leftOverAmount === 0) {
        return [txOut1];
    }
    else {
        const txOut2 = { address: myAddress, amount: leftOverAmount };
        return [txOut1, txOut2];
    }
};
exports.createTxOuts = createTxOuts;
const filterTxPoolTxs = (unspentTxOuts, transactionPool) => {
    const txIns = (0, lodash_1.default)(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value();
    const removable = [];
    for (const unspentTxOut of unspentTxOuts) {
        const txIn = lodash_1.default.find(txIns, (aTxIn) => {
            return aTxIn.txOutIndex === unspentTxOut.index && aTxIn.txOutId === unspentTxOut.transactionId;
        });
        if (txIn === undefined) {
        }
        else {
            removable.push(unspentTxOut);
        }
    }
    return lodash_1.default.without(unspentTxOuts, ...removable);
};
exports.filterTxPoolTxs = filterTxPoolTxs;
const createTransaction = (receiverAddress, amount, privateKey, unspentTxOuts, txPool) => {
    console.log('createTransaction');
    const myAddress = getPublicFromWallet(privateKey);
    const myUnspentTxOutsA = unspentTxOuts.filter((uTxO) => uTxO.address === myAddress);
    const myUnspentTxOuts = filterTxPoolTxs(myUnspentTxOutsA, txPool);
    const includedUnspentTxOuts = (0, transaction_1.findUnspentTxOut)(myAddress, 0, myUnspentTxOuts);
    if (!includedUnspentTxOuts) {
        throw new Error('No unspent transaction outputs found');
    }
    const leftOverAmount = calculateLeftOverAmount(includedUnspentTxOuts, amount);
    const toUnsignedTxIn = (unspentTxOut) => {
        const txIn = { txOutId: unspentTxOut.transactionId, txOutIndex: unspentTxOut.index };
        return txIn;
    };
    const unsignedTxIns = includedUnspentTxOuts.map(toUnsignedTxIn);
    const tx = new transaction_1.Transaction();
    tx.txIns = unsignedTxIns;
    tx.txOuts = createTxOuts(receiverAddress, myAddress, amount, leftOverAmount);
    tx.id = (0, transaction_1.getTransactionId)(tx);
    tx.txIns = tx.txIns.map((txIn, index) => {
        txIn.signature = signTxIn(tx, index, privateKey, unspentTxOuts);
        return txIn;
    });
    return tx;
};
exports.createTransaction = createTransaction;
const calculateLeftOverAmount = (includedUnspentTxOuts, amount) => {
    const totalAmount = includedUnspentTxOuts.reduce((sum, uTxO) => sum + uTxO.amount, 0);
    return totalAmount - amount;
};
const signTxIn = (transaction, txInIndex, privateKey, unspentTxOuts) => {
    const txIn = transaction.txIns[txInIndex];
    const dataToSign = transaction.id;
    const referencedUnspentTxOut = (0, transaction_1.findUnspentTxOut)(txIn.txOutId, txIn.txOutIndex, unspentTxOuts);
    if (!referencedUnspentTxOut) {
        throw new Error('Referenced unspent transaction output not found');
    }
    const referencedAddress = referencedUnspentTxOut.address;
    if (getPublicFromWallet(privateKey) !== referencedAddress) {
        throw new Error('Private key does not match the referenced address');
    }
    const key = elliptic_1.ec.keyFromPrivate(privateKey, 'hex');
    const signature = toHexString(key.sign(dataToSign).toDER());
    return signature;
};
const toHexString = (byteArray) => {
    return Array.from(byteArray, (byte) => {
        return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
};
