import _ from 'lodash';
import { findUnspentTxOut, UnspentTxOut, Transaction, getTransactionId, isValidTransactionStructure } from './transaction';
import { ec } from 'elliptic';

const getBalance = (address: string, unspentTxOuts: UnspentTxOut[] = []): number => {
    return _(findUnspentTxOut(address, 0, unspentTxOuts))
      .map((uTxO) => {
        if (typeof uTxO === 'string') {
          throw new Error('Invalid UnspentTxOut type');
        }
        return uTxO.amount;
      })
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
): any[] => {
  const txOut1 = { address: receiverAddress, amount: amount };
  if (leftOverAmount === 0) {
    return [txOut1];
  } else {
    const txOut2 = { address: myAddress, amount: leftOverAmount };
    return [txOut1, txOut2];
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
      return aTxIn.txOutIndex === unspentTxOut.index && aTxIn.txOutId === unspentTxOut.transactionId;
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

  const includedUnspentTxOuts = findUnspentTxOut(myAddress, 0, myUnspentTxOuts);

  if (!includedUnspentTxOuts) {
    throw new Error('No unspent transaction outputs found');
  }

  const leftOverAmount = calculateLeftOverAmount(includedUnspentTxOuts, amount);

  const toUnsignedTxIn = (unspentTxOut: UnspentTxOut): any => {
    const txIn = { txOutId: unspentTxOut.transactionId, txOutIndex: unspentTxOut.index };
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

const calculateLeftOverAmount = (includedUnspentTxOuts: UnspentTxOut[], amount: number): number => {
  const totalAmount = includedUnspentTxOuts.reduce((sum, uTxO) => sum + uTxO.amount, 0);
  return totalAmount - amount;
};

const signTxIn = (
  transaction: Transaction,
  txInIndex: number,
  privateKey: string,
  unspentTxOuts: UnspentTxOut[]
): string => {
  const txIn = transaction.txIns[txInIndex];

  const dataToSign = transaction.id;
  const referencedUnspentTxOut = findUnspentTxOut(txIn.txOutId, txIn.txOutIndex, unspentTxOuts);

  if (!referencedUnspentTxOut) {
    throw new Error('Referenced unspent transaction output not found');
  }

  const referencedAddress = referencedUnspentTxOut.address;

  if (getPublicFromWallet(privateKey) !== referencedAddress) {
    throw new Error('Private key does not match the referenced address');
  }

  const key = ec.keyFromPrivate(privateKey, 'hex');
  const signature = toHexString(key.sign(dataToSign).toDER());

  return signature;
};

const toHexString = (byteArray: number[]): string => {
  return Array.from(byteArray, (byte) => {
    return ('0' + (byte & 0xff).toString(16)).slice(-2);
  }).join('');
};

export {
  getBalance,
  getPublicFromWallet,
  createTxOuts,
  filterTxPoolTxs,
  createTransaction,
};
