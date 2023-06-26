import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as elliptic from 'elliptic';
import * as crypto from 'crypto';
import { CryptoHash, VerifySignature } from './utils';
import { STARTING_BALANCE } from './config';
import Wallet from './wallet';

const ec = new elliptic.ec('secp256k1');

// Update transactionDirectory to be configurable
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');

interface UnspentTxOut {
  readonly txOutId: string;
  readonly txOutIndex: number;
  readonly address: string;
  readonly amount: number;
}

interface TxIn {
  readonly txOutId: string;
  readonly txOutIndex: number;
  readonly signature: string;
}

interface TxOut {
  readonly address: string;
  readonly amount: number;
}

const isTxInStructureValid = (txIn: TxIn): boolean => {
  if (txIn === null) {
    console.log(`txIn is null`);
    return false;
  } else if (typeof txIn.signature !== 'string') {
    console.log(`invalid signature type in txIn`);
    return false;
  } else if (typeof txIn.txOutId !== 'string') {
    console.log(`invalid txOutId type in txIn`);
    return false;
  } else if (typeof txIn.txOutIndex !== 'number') {
    console.log(`invalid txOutIndex type in txIn`);
    return false;
  } else {
    return true;
  }
};

const isTxOutStructureValid = (txOut: TxOut): boolean => {
  if (txOut === null) {
    console.log(`txOut is null`);
    return false;
  } else if (typeof txOut.address !== 'string') {
    console.log(`invalid address type in txOut`);
    return false;
  } else if (typeof txOut.amount !== 'number') {
    console.log(`invalid amount type in txOut`);
    return false;
  } else {
    return true;
  }
};

const getTransactionId = (transaction: any): string => {
  const transactionData = JSON.stringify(transaction);
  return CryptoHash(transactionData);
};

const isValidTransactionStructure = (transaction: any): boolean => {
  if (
    typeof transaction.id !== 'string' ||
    typeof transaction.input !== 'object' ||
    typeof transaction.outputMap !== 'object'
  ) {
    return false;
  }

  const { input, outputMap } = transaction;

  if (Object.keys(input).length !== 4) {
    return false;
  }

  if (
    typeof input.timestamp !== 'number' ||
    typeof input.amount !== 'number' ||
    typeof input.address !== 'string' ||
    typeof input.signature !== 'string'
  ) {
    return false;
  }

  if (Object.keys(outputMap).length < 1) {
    return false;
  }

  for (const output of Object.values(outputMap)) {
    if (typeof output !== 'number') {
      return false;
    }
  }

  return true;
};

const findUnspentTxOut = (
  transactionId: string,
  outputIndex: number,
  unspentTxOuts: UnspentTxOut[]
): UnspentTxOut | undefined => {
  return unspentTxOuts.find(
    (utxo) => utxo.txOutId === transactionId && utxo.txOutIndex === outputIndex
  );
};

class Transaction {
  id: string;
  outputMap: { [key: string]: number };
  input: {
    timestamp: number;
    amount: number;
    address: string;
    signature: string;
  };

  constructor({ senderWallet, recipient, amount }: { senderWallet: Wallet; recipient: string; amount: number }) {
    this.id = CryptoHash(Date.now().toString());
    this.outputMap = this.createOutputMap(senderWallet, recipient, amount);
    this.input = this.createInput(senderWallet, this.outputMap);
  }

  createOutputMap(senderWallet: Wallet, recipient: string, amount: number): { [key: string]: number } {
    return {
      [recipient]: amount,
      [senderWallet.publicKey()]: senderWallet.balance - amount,
    };
  }

  createInput(senderWallet: Wallet, outputMap: { [key: string]: number }): {
    timestamp: number;
    amount: number;
    address: string;
    signature: string;
  } {
    const signature = senderWallet.sign(JSON.stringify(outputMap));

    return {
      timestamp: Date.now(),
      amount: senderWallet.balance,
      address: senderWallet.publicKey(),
      signature: signature.toDER('hex'),
    };
  }

  verifyTransaction(): boolean {
    const { address, amount, signature } = this.input;
    const { outputMap } = this;

    if (amount !== outputMap[address]) {
      console.error(`Invalid transaction from ${address}`);
      return false;
    }

    if (!VerifySignature(address, JSON.stringify(outputMap), signature)) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }

    return true;
  }

  update({ recipient, amount }: { recipient: string; amount: number }): void {
    const transaction = this;

    if (amount > transaction.outputMap[transaction.input.address]) {
      throw new Error('Amount exceeds balance');
    }

    if (!transaction.outputMap[recipient]) {
      transaction.outputMap[recipient] = amount;
    } else {
      transaction.outputMap[recipient] += amount;
    }

    transaction.outputMap[transaction.input.address] -= amount;
    transaction.input.amount = transaction.outputMap[transaction.input.address];
  }
}

class SaveTransaction {
  transaction: Transaction;
  directory: string;

  constructor({ transaction, directory = 'default-path' }: { transaction: Transaction; directory?: string }) {
    this.transaction = transaction;
    this.directory = directory;
  }

  saveTransaction(): void {
    const transactionFile = path.join(this.directory, `${this.transaction.id}.json`);
    fs.writeFileSync(transactionFile, JSON.stringify(this.transaction));
  }

  updateTransaction(): void {
    const transactionFile = path.join(this.directory, `${this.transaction.id}.json`);
    if (!fs.existsSync(transactionFile)) {
      throw new Error(`Transaction file '${transactionFile}' does not exist for update`);
    }

    const transactionData = fs.readFileSync(transactionFile, 'utf8');
    const existingTransaction = JSON.parse(transactionData);
    existingTransaction.outputMap = this.transaction.outputMap;

    fs.writeFileSync(transactionFile, JSON.stringify(existingTransaction));
  }
}

const CreateTransaction = ({
  senderWallet,
  recipient,
  amount,
}: {
  senderWallet: Wallet;
  recipient: string;
  amount: number;
}): Transaction => {
  if (amount > senderWallet.balance) {
    throw new Error('Amount exceeds balance');
  }

  return new Transaction({
    senderWallet,
    recipient,
    amount,
  });
};

const LoadTransactions = ({
  directory = 'default-directory',
}: {
  directory: string;
}): Transaction[] => {
  const transactionFiles = fs.readdirSync(directory);
  const transactions: Transaction[] = [];

  for (const file of transactionFiles) {
    const transactionFile = path.join(directory, file);
    if (!fs.existsSync(transactionFile)) {
      throw new Error(`Transaction file '${transactionFile}' not found`);
    }

    const transactionData = fs.readFileSync(transactionFile, 'utf8');
    const transaction = JSON.parse(transactionData);
    transactions.push(transaction);
  }

  return transactions;
};

const encryptPrivateKey = (privateKey: string, passphrase: string) => {
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(passphrase, 'salt', 24);
  const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
  let encryptedPrivateKey = cipher.update(privateKey, 'utf8', 'hex');
  encryptedPrivateKey += cipher.final('hex');

  return {
    encryptedPrivateKey,
    iv: iv.toString('hex'),
  };
};

const decryptPrivateKey = (encryptedPrivateKey: string, iv: string, passphrase: string) => {
  const key = crypto.scryptSync(passphrase, 'salt', 24);
  const decipher = crypto.createDecipheriv('aes-192-cbc', key, Buffer.from(iv, 'hex'));
  let decryptedPrivateKey = decipher.update(encryptedPrivateKey, 'hex', 'utf8');
  decryptedPrivateKey += decipher.final('utf8');
  return decryptedPrivateKey;
};

export {
  Transaction,
  CreateTransaction,
  SaveTransaction,
  LoadTransactions,
  encryptPrivateKey,
  decryptPrivateKey,
  UnspentTxOut,
  TxIn,
  TxOut,
  getTransactionId,
  isValidTransactionStructure,
  findUnspentTxOut,
};
