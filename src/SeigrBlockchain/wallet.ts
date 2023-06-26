import { STARTING_BALANCE } from './config';
import { CryptoHash, VerifySignature } from './utils';
import { Transaction } from './transaction';
import { ec as EC } from 'elliptic';
import crypto from 'crypto';
import base58 from 'bs58';

const ellipticCurve = new EC('secp256k1');

class Wallet {
  keyPair: EC.KeyPair;
  balance: number;
  address: string;

  constructor(keyPair?: EC.KeyPair) {
    if (keyPair) {
      this.keyPair = keyPair;
    } else {
      this.keyPair = ellipticCurve.genKeyPair();
    }
    this.balance = STARTING_BALANCE;
    this.address = this.generateAddress(this.keyPair);
  }
  

  publicKey(): string {
    return this.keyPair.getPublic().encode('hex', true);
  }

  sign(data: string): EC.Signature {
    try {
      return this.keyPair.sign(CryptoHash(data));
    } catch (error) {
      throw new Error('Error signing the data');
    }
  }

  generateAddress(keyPair: EC.KeyPair): string {
    const publicKey = keyPair.getPublic();
    const publicKeyHex = publicKey.encode('hex', true);
    const publicKeyBuffer = Buffer.from(publicKeyHex, 'hex');
    const publicKeyHash = crypto.createHash('sha256').update(publicKeyBuffer).digest();
    const addressBytes = Buffer.concat([Buffer.from([0x53, 0x19, 0x4e]), publicKeyHash]);
    const checksum = crypto.createHash('sha256').update(addressBytes).digest();
    const addressWithChecksum = Buffer.concat([addressBytes, checksum.subarray(0, 4)]);
    const address = base58.encode(addressWithChecksum);
    return address;
  }
  
  
  
  
    
  

  getPrivateKey(): string {
    return this.keyPair.getPrivate().toString(16);
  }

  createTransaction({ recipient, amount, chain }: { recipient: string, amount: number, chain?: any[] }): Transaction {
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

  static verifyTransaction({ transaction }: { transaction: Transaction }): boolean {
    const {
      input: { address, signature },
      outputMap,
    } = transaction;
    const outputTotal = Object.values(outputMap).reduce(
      (total, outputAmount) => total + outputAmount
    );
    if (outputTotal !== transaction.input.amount) {
      console.error(`Invalid transaction from ${address}`);
      return false;
    }
    if (!VerifySignature(address, JSON.stringify(outputMap), signature)) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }
    return true;
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
    return hasConductedTransaction
      ? outputsTotal
      : STARTING_BALANCE + outputsTotal;
  }

  static blockchainWallet(): Wallet {
    const blockchainWallet = new this();
    blockchainWallet.address = 'blockchain-wallet';
    return blockchainWallet;
  }
}

export default Wallet;
