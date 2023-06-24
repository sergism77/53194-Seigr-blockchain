import { v4 as uuidv4 } from 'uuid';
import { VerifySignature, CryptoHash } from './utils';
import { REWARD_INPUT, MINING_REWARD } from './config';
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

interface AddressInput {
  timestamp: number;
  address: string;
  amount: number;
  signature: any;
}

interface AddressOutput {
  address: string;
  amount: number;
}

interface AddressData {
  id: string;
  input: AddressInput;
  outputs: AddressOutput[];
}

class Address {
  id: string;
  input: AddressInput;
  outputs: AddressOutput[];

  constructor(data: AddressData) {
    this.id = data.id;
    this.input = data.input;
    this.outputs = data.outputs;
  }

  static verifyAddress(address: Address) {
    return ec.verify(
      address.input.address,
      address.input.signature,
      CryptoHash(address.input)
    );
  }

  static createAddress() {
    return ec.genKeyPair();
  }

  static createHash(data: any) {
    return CryptoHash(
      data.timestamp,
      data.lastHash,
      data.data,
      data.nonce,
      data.difficulty
    );
  }

  static signAddress(dataHash: any, privateKey: string) {
    const key = ec.keyFromPrivate(privateKey);
    return key.sign(dataHash);
  }

  static createTransaction({ senderWallet, recipient, amount }: any) {
    if (amount > senderWallet.balance) {
      throw new Error('Amount exceeds balance');
    }

    const dataHash = CryptoHash(
      Date.now(),
      senderWallet.address,
      senderWallet.balance,
      recipient,
      amount
    );

    const input: AddressInput = {
      timestamp: Date.now(),
      address: senderWallet.address,
      amount: senderWallet.balance,
      signature: senderWallet.signAddress(dataHash)
    };

    const outputs: AddressOutput[] = [
      { address: senderWallet.address, amount: senderWallet.balance - amount },
      { address: recipient, amount }
    ];

    return new Address({
      id: uuidv4(),
      input,
      outputs
    });
  }

  static rewardTransaction({ minerWallet }: any) {
    const input: AddressInput = REWARD_INPUT;
    const outputs: AddressOutput[] = [
      { address: minerWallet.address, amount: MINING_REWARD }
    ];

    return new Address({
      id: REWARD_INPUT.id,
      input,
      outputs
    });
  }

  update({ senderWallet, recipient, amount }: any) {
    const senderOutput = this.outputs.find(
      (output) => output.address === senderWallet.address
    );

    if (amount > senderOutput.amount) {
      throw new Error('Amount exceeds balance');
    }

    senderOutput.amount = senderOutput.amount - amount;

    this.outputs.push({ address: recipient, amount });

    const dataHash = CryptoHash(
      Date.now(),
      senderWallet.address,
      senderWallet.balance,
      recipient,
      amount
    );

    this.input = {
      timestamp: Date.now(),
      address: senderWallet.address,
      amount: senderWallet.balance,
      signature: senderWallet.signAddress(dataHash)
    };
  }

  transactionMap() {
    return {
      id: this.id,
      input: this.input,
      outputs: this.outputs
    };
  }

  static validTransaction(transaction: any) {
    const { input, outputs } = transaction;

    const outputTotal = outputs.reduce(
      (total: number, output: any) => total + output.amount,
      0
    );

    if (input.amount !== outputTotal) {
      console.error(`Invalid transaction from ${input.address}`);
      return false;
    }

    if (!VerifySignature({ publicKey: input.address, data: input, signature: input.signature })) {
      console.error(`Invalid signature from ${input.address}`);
      return false;
    }

    return true;
  }

  static clearBlockchainTransactions({ chain, transactionPool }: any) {
    const transactionsToKeep: any[] = [];

    for (const block of chain.slice(1)) {
      for (const transaction of block.data) {
        if (!transactionPool.includes(transaction)) {
          transactionsToKeep.push(transaction);
        }
      }
    }

    transactionPool.length = 0;
    Array.prototype.push.apply(transactionPool, transactionsToKeep);
  }
}

class AddressPool {
  addressPool: Address[];

  constructor() {
    this.addressPool = [];
  }

  static validAddressPool(addressPool: Address[]) {
    for (const address of addressPool) {
      if (address.input.address === REWARD_INPUT.address) {
        console.error('The miner reward input is invalid');
        return false;
      }

      const totalOutputAmount = address.outputs.reduce(
        (total, output) => total + output.amount,
        0
      );

      if (totalOutputAmount !== address.input.amount) {
        console.error(`The address ${address.input.address} has an invalid balance`);
        return false;
      }

      if (!Address.verifyAddress(address)) {
        console.error(`The address ${address.input.address} has an invalid signature`);
        return false;
      }
    }

    return true;
  }

  static clearBlockchainAddressPool({ chain, addressPool }: any) {
    const addressesToKeep: Address[] = [];

    for (const block of chain.slice(1)) {
      for (const address of block.data) {
        if (!addressPool.includes(address)) {
          addressesToKeep.push(address);
        }
      }
    }

    addressPool.length = 0;
    Array.prototype.push.apply(addressPool, addressesToKeep);
  }
}

class AddressMiner {
  addressMiner: Address[];

  constructor() {
    this.addressMiner = [];
  }

  static validAddressMiner(addressMiner: Address[]) {
    for (const address of addressMiner) {
      if (address.input.address === REWARD_INPUT.address) {
        console.error('The miner reward input is invalid');
        return false;
      }

      const totalOutputAmount = address.outputs.reduce(
        (total, output) => total + output.amount,
        0
      );

      if (totalOutputAmount !== address.input.amount) {
        console.error(`The address ${address.input.address} has an invalid balance`);
        return false;
      }

      if (!Address.verifyAddress(address)) {
        console.error(`The address ${address.input.address} has an invalid signature`);
        return false;
      }
    }

    return true;
  }

  static clearBlockchainAddressMiner({ chain, addressMiner }: any) {
    const addressesToKeep: Address[] = [];

    for (const block of chain.slice(1)) {
      for (const address of block.data) {
        if (!addressMiner.includes(address)) {
          addressesToKeep.push(address);
        }
      }
    }

    addressMiner.length = 0;
    Array.prototype.push.apply(addressMiner, addressesToKeep);
  }
}

class AddressMap {
  static createAddressMap(addressPool: Address[]) {
    const addressMap = new Map<string, Address>();

    for (const address of addressPool) {
      addressMap.set(address.id, address);
    }

    return addressMap;
  }
}

class AddressPoolMap {
  static createAddressPoolMap(addressPool: Address[]) {
    const addressPoolMap = new Map<string, Address>();

    for (const address of addressPool) {
      addressPoolMap.set(address.id, address);
    }

    return addressPoolMap;
  }
}

class AddressMinerMap {
  static createAddressMinerMap(addressMiner: Address[]) {
    const addressMinerMap = new Map<string, Address>();

    for (const address of addressMiner) {
      addressMinerMap.set(address.id, address);
    }

    return addressMinerMap;
  }
}

export { Address, AddressPool, AddressMiner, AddressMap, AddressPoolMap, AddressMinerMap };
