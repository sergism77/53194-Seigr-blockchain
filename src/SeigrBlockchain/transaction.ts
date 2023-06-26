import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { CryptoHash, VerifySignature } from './utils';
import { STARTING_BALANCE } from './config';
import Wallet from './wallet';
import * as elliptic from 'elliptic';
import * as crypto from 'crypto';

const ec = new elliptic.ec('secp256k1');

// Update transactionDirectory to be configurable
const transactionDirectory = path.join(os.homedir(), 'Seigr', 'transactions');

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
    this.outputMap = this.createOutputMap({
      senderWallet,
      recipient,
      amount,
    });
    this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
  }

  createOutputMap({ senderWallet, recipient, amount }: { senderWallet: Wallet; recipient: string; amount: number }): { [key: string]: number } {
    const outputMap: { [key: string]: number } = {};

    outputMap[recipient] = amount;
    outputMap[senderWallet.publicKey()] = senderWallet.balance - amount;

    return outputMap;
  }

  createInput({
    senderWallet,
    outputMap,
  }: {
    senderWallet: Wallet;
    outputMap: { [key: string]: number };
  }): {
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
    if (amount > this.outputMap[this.input.address]) {
      throw new Error('Amount exceeds balance');
    }

    if (!this.outputMap[recipient]) {
      this.outputMap[recipient] = amount;
    } else {
      this.outputMap[recipient] += amount;
    }

    this.outputMap[this.input.address] -= amount;
    this.input.amount = this.outputMap[this.input.address];
  }
}

class SaveTransaction {
  transaction: Transaction;

  constructor({ transaction }: { transaction: Transaction }) {
    this.transaction = transaction;
  }

  saveTransaction(): void {
    const transactionFile = path.join(transactionDirectory, `${this.transaction.id}.json`);
    fs.writeFileSync(transactionFile, JSON.stringify(this.transaction));
  }
}

const CreateTransaction = ({ senderWallet, recipient, amount }: { senderWallet: Wallet; recipient: string; amount: number }): Transaction => {
  if (amount > senderWallet.balance) {
    throw new Error('Amount exceeds balance');
  }

  return new Transaction({
    senderWallet,
    recipient,
    amount,
  });
};

const LoadTransaction = ({ transactionId }: { transactionId: string }): Transaction => {
  const transactionFile = path.join(transactionDirectory, `${transactionId}.json`);

  if (!fs.existsSync(transactionFile)) {
    throw new Error('Transaction file not found');
  }

  const transactionData = fs.readFileSync(transactionFile, 'utf8');

  try {
    return JSON.parse(transactionData);
  } catch (error) {
    throw new Error('Invalid transaction file');
  }
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

export { Transaction, CreateTransaction, SaveTransaction, LoadTransaction, encryptPrivateKey };
