import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as elliptic from 'elliptic';
import * as crypto from 'crypto';
import { CryptoHash, VerifySignature } from './utils';
import { STARTING_BALANCE } from './config';

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

/**
 * Find an unspent transaction output (UTXO) by transaction ID and output index.
 * @param transactionId - The transaction ID to search for.
 * @param outputIndex - The output index to search for.
 * @param unspentTxOuts - The array of unspent transaction outputs to search in.
 * @returns The found unspent transaction output (UTXO), or undefined if not found.
 */
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
  readonly id: string;
  readonly outputMap: { [key: string]: number };
  readonly input: {
    readonly timestamp: number;
    readonly amount: number;
    readonly address: string;
    readonly signature: string;
  };

  constructor({ senderWallet, recipient, amount }: { senderWallet: Wallet; recipient: string; amount: number }) {
    if (!(senderWallet && recipient && amount > 0)) {
      throw new Error('Invalid transaction parameters');
    }
    
    const timestamp = Date.now();
    const pubKey = senderWallet.getPublicKey( );

    const outputMap = this.createOutputMap(senderWallet, recipient, amount);

    const signature = senderWallet.sign(JSON.stringify(outputMap));

    this.id = CryptoHash(timestamp + pubKey + JSON.stringify(outputMap) + signature);
    this.outputMap = outputMap;
    this.input = { timestamp, amount, address: pubKey, signature };
  }

  private createOutputMap(senderWallet: Wallet, recipient: string, amount: number): { [key: string]: number } {
    if (!(senderWallet && recipient && amount > 0)) {
      throw new Error('Incomplete Parameters for Transaction');
    }

    if (amount > senderWallet.balance()) {
      throw new Error('Amount exceeds sender balance');
    }

    const pbKey = senderWallet.getPublicKey( );
    return {
      [pbKey]: senderWallet.balance() - amount,
      [recipient]: amount,
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
}

class Wallet {
  private balance: number;
  private pubKey: string;
  private pvtKey: string;

  constructor() {
    this.balance = STARTING_BALANCE;
    this.pubKey = '';
    this.pvtKey = '';
  }

  getBalance(): number {
    return this.balance;
  }

  getPublicKey(): string {
    return this.pubKey;
  }

  transferTo(to: string, amount: number) {
    if (!(to && amount > 0)) {
      throw new Error('Insufficient command parameters');
    }

    if (!(amount <= this.balance)) {
      throw new Error('Balance insufficient');
    }

    // Transaction logic goes here
  }

  setKeys() {
    this.pubKey = this.generatePublicKey();
    this.pvtKey = this.generatePrivateKey();
  }

  generatePublicKey(): string {
    // Generate and return public key
    return '';
  }

  generatePrivateKey(): string {
    // Generate and return private key
    return '';
  }

  sign(data: string): string {
    // Sign the data using the private key and return the signature
    return '';
  }
}

class TransactionIO {
  private transaction: Transaction;
  private directory: string;

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
  if (amount > senderWallet.getBalance()) {
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
  TransactionIO,
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
