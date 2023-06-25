"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTxIn = exports.getCoinbaseTransaction = exports.getTxInAmount = exports.hasDuplicates = exports.validateCoinbaseTx = exports.validateTxIn = exports.validateTransaction = exports.validateBlockTransactions = exports.updateUnspentTxOuts = exports.processTransactions = exports.createTransaction = exports.filterTxPoolTxs = exports.createTxOuts = exports.getPublicFromWallet = exports.getBalance = void 0;
const _ = __importStar(require("lodash"));
const transaction_1 = require("./transaction");
const transaction_2 = require("./transaction");
const getBalance = (address, unspentTxOuts) => {
    return _(findUnspentTxOuts(address, unspentTxOuts))
        .map((uTxO) => uTxO.amount)
        .sum();
};
exports.getBalance = getBalance;
const getPublicFromWallet = (aWallet) => {
    return aWallet.keyPair.getPublic().encode('hex');
};
exports.getPublicFromWallet = getPublicFromWallet;
const createTxOuts = (receiverAddress, myAddress, amount, leftOverAmount) => {
    const txOut1 = new transaction_2.TxOut(receiverAddress, amount);
    if (leftOverAmount === 0) {
        return [txOut1];
    }
    else {
        const leftOverTx = new transaction_2.TxOut(myAddress, leftOverAmount);
        return [txOut1, leftOverTx];
    }
};
exports.createTxOuts = createTxOuts;
const filterTxPoolTxs = (unspentTxOuts, transactionPool) => {
    const txIns = _(transactionPool)
        .map((tx) => tx.txIns)
        .flatten()
        .value();
    const removable = [];
    for (const unspentTxOut of unspentTxOuts) {
        const txIn = _.find(txIns, (aTxIn) => {
            return aTxIn.txOutIndex === unspentTxOut.txOutIndex && aTxIn.txOutId === unspentTxOut.txOutId;
        });
        if (txIn === undefined) {
        }
        else {
            removable.push(unspentTxOut);
        }
    }
    return _.without(unspentTxOuts, ...removable);
};
exports.filterTxPoolTxs = filterTxPoolTxs;
const createTransaction = (receiverAddress, amount, privateKey, unspentTxOuts, txPool) => {
    console.log('createTransaction');
    const myAddress = getPublicFromWallet(privateKey);
    const myUnspentTxOutsA = unspentTxOuts.filter((uTxO) => uTxO.address === myAddress);
    const myUnspentTxOuts = filterTxPoolTxs(myUnspentTxOutsA, txPool);
    const { includedUnspentTxOuts, leftOverAmount } = findTxOutsForAmount(amount, myUnspentTxOuts);
    const toUnsignedTxIn = (unspentTxOut) => {
        const txIn = new transaction_2.TxIn();
        txIn.txOutId = unspentTxOut.txOutId;
        txIn.txOutIndex = unspentTxOut.txOutIndex;
        return txIn;
    };
    const unsignedTxIns = includedUnspentTxOuts.map(toUnsignedTxIn);
    const tx = new transaction_2.Transaction();
    tx.txIns = unsignedTxIns;
    tx.txOuts = createTxOuts(receiverAddress, myAddress, amount, leftOverAmount);
    tx.id = (0, transaction_2.getTransactionId)(tx);
    tx.txIns = tx.txIns.map((txIn, index) => {
        txIn.signature = signTxIn(tx, index, privateKey, unspentTxOuts);
        return txIn;
    });
    return tx;
};
exports.createTransaction = createTransaction;
const processTransactions = (aTransactions, aUnspentTxOuts, blockIndex) => {
    if (!isValidTransactionsStructure(aTransactions)) {
        return null;
    }
    if (!validateBlockTransactions(aTransactions, aUnspentTxOuts, blockIndex)) {
        return null;
    }
    return updateUnspentTxOuts(aTransactions, aUnspentTxOuts);
};
exports.processTransactions = processTransactions;
const updateUnspentTxOuts = (transactions, aUnspentTxOuts) => {
    const newUnspentTxOuts = transactions
        .map((t) => {
        return t.txOuts.map((txOut, index) => new transaction_1.UnspentTxOut(t.id, index, txOut.address, txOut.amount));
    })
        .reduce((a, b) => a.concat(b), []);
    const consumedTxOuts = transactions
        .map((t) => t.txIns)
        .reduce((a, b) => a.concat(b), [])
        .map((txIn) => new transaction_1.UnspentTxOut(txIn.txOutId, txIn.txOutIndex, '', 0));
    const resultingUnspentTxOuts = aUnspentTxOuts
        .filter(((uTxO) => !(0, transaction_1.findUnspentTxOut)(uTxO.txOutId, uTxO.txOutIndex, consumedTxOuts)))
        .concat(newUnspentTxOuts);
    return resultingUnspentTxOuts;
};
exports.updateUnspentTxOuts = updateUnspentTxOuts;
const validateBlockTransactions = (aTransactions, aUnspentTxOuts, blockIndex) => {
    const coinbaseTx = aTransactions[0];
    if (!validateCoinbaseTx(coinbaseTx, blockIndex)) {
        return false;
    }
    const txIns = _(aTransactions)
        .map((tx) => tx.txIns)
        .flatten()
        .value();
    if (hasDuplicates(txIns)) {
        return false;
    }
    const normalTransactions = aTransactions.slice(1);
    return normalTransactions.map((tx) => validateTransaction(tx, aUnspentTxOuts)).reduce((a, b) => a && b, true);
};
exports.validateBlockTransactions = validateBlockTransactions;
const validateTransaction = (transaction, aUnspentTxOuts) => {
    if (!(0, transaction_2.isValidTransactionStructure)(transaction)) {
        return false;
    }
    if ((0, transaction_2.getTransactionId)(transaction) !== transaction.id) {
        return false;
    }
    const hasValidTxIns = transaction.txIns
        .map((txIn) => validateTxIn(txIn, transaction, aUnspentTxOuts))
        .reduce((a, b) => a && b, true);
    if (!hasValidTxIns) {
        return false;
    }
    const totalTxInValues = transaction.txIns.map((txIn) => getTxInAmount(txIn, aUnspentTxOuts)).reduce((a, b) => a + b, 0);
    const totalTxOutValues = transaction.txOuts.map((txOut) => txOut.amount).reduce((a, b) => a + b, 0);
    if (totalTxOutValues !== totalTxInValues) {
        return false;
    }
    return true;
};
exports.validateTransaction = validateTransaction;
const validateTxIn = (txIn, transaction, aUnspentTxOuts) => {
    const referencedUTxOut = aUnspentTxOuts.find((uTxO) => uTxO.txOutId === txIn.txOutId && uTxO.txOutIndex === txIn.txOutIndex);
    if (referencedUTxOut == null) {
        return false;
    }
    const address = referencedUTxOut.address;
    const key = ec.keyFromPublic(address, 'hex');
    const validSignature = key.verify(transaction.id, txIn.signature);
    if (!validSignature) {
        return false;
    }
    return true;
};
exports.validateTxIn = validateTxIn;
const validateCoinbaseTx = (transaction, blockIndex) => {
    if ((0, transaction_2.getTransactionId)(transaction) !== transaction.id) {
        return false;
    }
    if (transaction.txIns.length !== 1) {
        return false;
    }
    if (transaction.txIns[0].txOutIndex !== blockIndex) {
        return false;
    }
    if (transaction.txOuts.length !== 1) {
        return false;
    }
    if (transaction.txOuts[0].amount != COINBASE_AMOUNT) {
        return false;
    }
    return true;
};
exports.validateCoinbaseTx = validateCoinbaseTx;
const hasDuplicates = (txIns) => {
    const groups = _.countBy(txIns, (txIn) => txIn.txOutId + txIn.txOutIndex);
    return _(groups)
        .map((value, key) => {
        if (value > 1) {
            return true;
        }
        else {
            return false;
        }
    })
        .includes(true);
};
exports.hasDuplicates = hasDuplicates;
const getTxInAmount = (txIn, aUnspentTxOuts) => {
    return (0, transaction_1.findUnspentTxOut)(txIn.txOutId, txIn.txOutIndex, aUnspentTxOuts).amount;
};
exports.getTxInAmount = getTxInAmount;
const getCoinbaseTransaction = (address, blockIndex) => {
    const t = new transaction_2.Transaction();
    const txIn = new transaction_2.TxIn();
    txIn.signature = '';
    txIn.txOutId = '';
    txIn.txOutIndex = blockIndex;
    t.txIns = [txIn];
    t.txOuts = [new transaction_2.TxOut(address, COINBASE_AMOUNT)];
    t.id = (0, transaction_2.getTransactionId)(t);
    return t;
};
exports.getCoinbaseTransaction = getCoinbaseTransaction;
const signTxIn = (transaction, txInIndex, privateKey, aUnspentTxOuts) => {
    const txIn = transaction.txIns[txInIndex];
    const dataToSign = transaction.id;
    const referencedUnspentTxOut = (0, transaction_1.findUnspentTxOut)(txIn.txOutId, txIn.txOutIndex, aUnspentTxOuts);
    if (referencedUnspentTxOut == null) {
        throw Error();
    }
    const referencedAddress = referencedUnspentTxOut.address;
    if (getPublicFromWallet(privateKey) !== referencedAddress) {
        throw Error();
    }
    const key = ec.keyFromPrivate(privateKey, 'hex');
    const signature = toHexString(key.sign(dataToSign).toDER());
    return signature;
};
exports.signTxIn = signTxIn;
