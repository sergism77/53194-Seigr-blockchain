'use strict';

import { STARTING_BALANCE } from './config';
import { cryptoHash, verifySignature } from './utils';
import Transaction from './transaction';
import ec from 'elliptic';
import { createGenesisWallet, createWallet, saveWallet } from './walletUtils';
import crypto from 'crypto';
import base58 from 'bs58';

const secp256k1 = new ec.ec('secp256k1');

class Wallet {
  keyPair: ec.ec.KeyPair;
  balance: number;
  address: string;
  createGenesisWallet: () => void;
  createWallet: () => void;
  saveWallet: () => void;

  constructor(keyPair?: ec.ec.KeyPair) {
    if (keyPair) {
      this.keyPair = keyPair;
    } else {
      this.keyPair = secp256k1.genKeyPair();
    }
    this.balance = STARTING_BALANCE;
    this.address = this.generateAddress(this.keyPair.getPublic().encode('hex'));
    this.createGenesisWallet = createGenesisWallet;
    this.createWallet = createWallet;
    this.saveWallet = saveWallet;
  }

  publicKey(): string {
    return this.keyPair.getPublic().encode('hex');
  }

  sign(data: string): ec.ec.Signature {
    try {
      return this.keyPair.sign(cryptoHash(data));
    } catch (error) {
      throw new Error('Error signing the data');
    }
  }

  generateAddress(publicKey: string): string {
    const publicKeyHash = crypto.createHash('sha256').update(publicKey).digest();
    const addressBytes = Buffer.concat([Buffer.from([0x53, 0x19, 0x4e]), publicKeyHash]);
    const checksum = crypto.createHash('sha256').update(addressBytes).digest();
    const addressWithChecksum = Buffer.concat([addressBytes, checksum.subarray(0, 4)]);
    const address = base58.encode(addressWithChecksum);
    return address;
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
    if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
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