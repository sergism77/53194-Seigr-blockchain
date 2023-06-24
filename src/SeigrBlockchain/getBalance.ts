import * as _ from 'lodash';
import { findUnspentTxOut, UnspentTxOut } from './transaction';
import { TxIn, TxOut, Transaction, getTransactionId, isValidTransactionStructure } from './transaction';

const getBalance = (address: string, unspentTxOuts: UnspentTxOut[]): number => {
return _(findUnspentTxOuts(address, unspentTxOuts))
.map((uTxO) => uTxO.amount)
.sum();
};

const getPublicFromWallet = (aWallet: any): string => {
return aWallet.keyPair.getPublic().encode('hex');
};

const createTxOuts = (
receiverAddress: string,
myAddress: string,
amount: number,
leftOverAmount: number
): TxOut[] => {
const txOut1 = new TxOut(receiverAddress, amount);
if (leftOverAmount === 0) {
return [txOut1];
} else {
const leftOverTx = new TxOut(myAddress, leftOverAmount);
return [txOut1, leftOverTx];
}
};

const filterTxPoolTxs = (unspentTxOuts: UnspentTxOut[], transactionPool: Transaction[]): UnspentTxOut[] => {
const txIns = _(transactionPool)
.map((tx) => tx.txIns)
.flatten()
.value();
const removable: UnspentTxOut[] = [];
for (const unspentTxOut of unspentTxOuts) {
const txIn = _.find(txIns, (aTxIn) => {
return aTxIn.txOutIndex === unspentTxOut.txOutIndex && aTxIn.txOutId === unspentTxOut.txOutId;
});
if (txIn === undefined) {
} else {
removable.push(unspentTxOut);
}
}
return _.without(unspentTxOuts, ...removable);
};

const createTransaction = (
receiverAddress: string,
amount: number,
privateKey: string,
unspentTxOuts: UnspentTxOut[],
txPool: Transaction[]
): Transaction => {
console.log('createTransaction');
const myAddress = getPublicFromWallet(privateKey);

const myUnspentTxOutsA = unspentTxOuts.filter((uTxO) => uTxO.address === myAddress);

const myUnspentTxOuts = filterTxPoolTxs(myUnspentTxOutsA, txPool);

const { includedUnspentTxOuts, leftOverAmount } = findTxOutsForAmount(amount, myUnspentTxOuts);

const toUnsignedTxIn = (unspentTxOut: UnspentTxOut): TxIn => {
const txIn = new TxIn();
txIn.txOutId = unspentTxOut.txOutId;
txIn.txOutIndex = unspentTxOut.txOutIndex;
return txIn;
};

const unsignedTxIns = includedUnspentTxOuts.map(toUnsignedTxIn);

const tx = new Transaction();
tx.txIns = unsignedTxIns;
tx.txOuts = createTxOuts(receiverAddress, myAddress, amount, leftOverAmount);
tx.id = getTransactionId(tx);

tx.txIns = tx.txIns.map((txIn, index) => {
txIn.signature = signTxIn(tx, index, privateKey, unspentTxOuts);
return txIn;
});

return tx;
};

const processTransactions = (
aTransactions: Transaction[],
aUnspentTxOuts: UnspentTxOut[],
blockIndex: number
): UnspentTxOut[] | null => {
if (!isValidTransactionsStructure(aTransactions)) {
return null;
}

if (!validateBlockTransactions(aTransactions, aUnspentTxOuts, blockIndex)) {
return null;
}

return updateUnspentTxOuts(aTransactions, aUnspentTxOuts);
};

const updateUnspentTxOuts = (transactions: Transaction[], aUnspentTxOuts: UnspentTxOut[]): UnspentTxOut[] => {
const newUnspentTxOuts: UnspentTxOut[] = transactions
.map((t) => {
return t.txOuts.map((txOut, index) => new UnspentTxOut(t.id, index, txOut.address, txOut.amount));
})
.reduce((a, b) => a.concat(b), []);

const consumedTxOuts: UnspentTxOut[] = transactions
.map((t) => t.txIns)
.reduce((a, b) => a.concat(b), [])
.map((txIn) => new UnspentTxOut(txIn.txOutId, txIn.txOutIndex, '', 0));

const resultingUnspentTxOuts = aUnspentTxOuts
.filter(((uTxO) => !findUnspentTxOut(uTxO.txOutId, uTxO.txOutIndex, consumedTxOuts)))
.concat(newUnspentTxOuts);

return resultingUnspentTxOuts;
};

const validateBlockTransactions = (
aTransactions: Transaction[],
aUnspentTxOuts: UnspentTxOut[],
blockIndex: number
): boolean => {
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

const validateTransaction = (transaction: Transaction, aUnspentTxOuts: UnspentTxOut[]): boolean => {
if (!isValidTransactionStructure(transaction)) {
return false;
}

if (getTransactionId(transaction) !== transaction.id) {
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

const validateTxIn = (txIn: TxIn, transaction: Transaction, aUnspentTxOuts: UnspentTxOut[]): boolean => {
const referencedUTxOut = aUnspentTxOuts.find(
(uTxO) => uTxO.txOutId === txIn.txOutId && uTxO.txOutIndex === txIn.txOutIndex
);

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

const validateCoinbaseTx = (transaction: Transaction, blockIndex: number): boolean => {
if (getTransactionId(transaction) !== transaction.id) {
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

const hasDuplicates = (txIns: TxIn[]): boolean => {
const groups = _.countBy(txIns, (txIn) => txIn.txOutId + txIn.txOutIndex);

return _(groups)
.map((value, key) => {
if (value > 1) {
return true;
} else {
return false;
}
})
.includes(true);
};

const getTxInAmount = (txIn: TxIn, aUnspentTxOuts: UnspentTxOut[]): number => {
return findUnspentTxOut(txIn.txOutId, txIn.txOutIndex, aUnspentTxOuts).amount;
};

const getCoinbaseTransaction = (address: string, blockIndex: number): Transaction => {
const t = new Transaction();
const txIn = new TxIn();
txIn.signature = '';
txIn.txOutId = '';
txIn.txOutIndex = blockIndex;

t.txIns = [txIn];
t.txOuts = [new TxOut(address, COINBASE_AMOUNT)];
t.id = getTransactionId(t);

return t;
};

const signTxIn = (
transaction: Transaction,
txInIndex: number,
privateKey: string,
aUnspentTxOuts: UnspentTxOut[]
): string => {
const txIn = transaction.txIns[txInIndex];

const dataToSign = transaction.id;
const referencedUnspentTxOut = findUnspentTxOut(txIn.txOutId, txIn.txOutIndex, aUnspentTxOuts);

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

export {
getBalance,
getPublicFromWallet,
createTxOuts,
filterTxPoolTxs,
createTransaction,
processTransactions,
updateUnspentTxOuts,
validateBlockTransactions,
validateTransaction,
validateTxIn,
validateCoinbaseTx,
hasDuplicates,
getTxInAmount,
getCoinbaseTransaction,
signTxIn,
};