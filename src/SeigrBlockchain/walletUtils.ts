import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { CryptoHash } from './utils';
import { STARTING_BALANCE } from './config';
import { ec as EC, KeyPair } from 'elliptic';
import { VerifySignature } from './utils';
import { Transaction } from './transaction';

const ellipticCurve = new EC('secp256k1');

const walletDirectory = path.join(os.homedir(), 'SeigrBlockchain', 'wallets');

class WalletUtils {
  static createWallet(): Wallet {
    const wallet = new Wallet();
    fs.writeFileSync(
      path.join(walletDirectory, `${wallet.address}.json`),
      JSON.stringify(wallet)
    );
    return wallet;
  }

  static loadWallet(address: string): Wallet {
    const walletPath = path.join(walletDirectory, `${address}.json`);
    if (!fs.existsSync(walletPath)) {
      throw new Error('Wallet does not exist');
    }
    const walletData = fs.readFileSync(walletPath, 'utf8');
    const wallet = Wallet.fromJSON(walletData);
    return wallet;
  }
}

class Wallet {
  balance: number;
  keyPair: KeyPair;
  address: string;

  constructor() {
    this.balance = STARTING_BALANCE;
    this.keyPair = ellipticCurve.genKeyPair();
    this.address = this.keyPair.getPublic().encode('hex');
  }

  publicKey(): string {
    return this.keyPair.getPublic().encode('hex');
  }

  sign(data: string): EC.Signature {
    return this.keyPair.sign(CryptoHash(data));
  }

  createTransaction({ recipient, amount, chain }: { recipient: string, amount: number, chain: any[] }): Transaction {
    if (chain) {
      this.balance = Wallet.calculateBalance({
        chain,
        address: this.address,
      });
    }
    if (amount > this.balance) {
      throw new Error('Amount exceeds balance');
    }

    return new Transaction({ senderWallet: this, recipient, amount });
  }

  static calculateBalance({ chain, address }: { chain: any[], address: string }): number {
    let hasConductedTransaction = false;
    let outputsTotal = 0;
    for (let i = chain.length - 1; i > 0; i--) {
      const block = chain[i];
      for (let transaction of block.data) {
        if (transaction.input.address === address) {
          hasConductedTransaction = true;
        }
        const addressOutput = transaction.outputMap[address];
        if (addressOutput) {
          outputsTotal = outputsTotal + addressOutput;
        }
      }
      if (hasConductedTransaction) {
        break;
      }
    }
    return hasConductedTransaction ? outputsTotal : STARTING_BALANCE + outputsTotal;
  }

  static blockchainWallet(): Wallet {
    const blockchainWallet = new this();
    blockchainWallet.address = 'blockchain-wallet';
    return blockchainWallet;
  }

  static fromJSON(walletData: string): Wallet {
    const { balance, keyPair, address } = JSON.parse(walletData);
    const wallet = new Wallet();
    wallet.balance = balance;
    wallet.keyPair = ellipticCurve.keyFromPrivate(keyPair.privateKey, 'hex');
    wallet.address = address;
    return wallet;
  }

  toJSON(): string {
    return JSON.stringify({
      balance: this.balance,
      keyPair: {
        privateKey: this.keyPair.getPrivate('hex'),
      },
      address: this.address,
    });
  }
}

export = WalletUtils;
