import { v4 as uuidv4 } from 'uuid';
import { verifySignature, cryptoHash } from './utils';
import { REWARD_INPUT, MINING_REWARD } from './config';
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

class Address {
  id: string;
  input: any;
  outputs: any[];

  constructor(id: string, input: any, outputs: any[]) {
    this.id = id;
    this.input = input;
    this.outputs = outputs;
  }

  static verifyAddress(address: any) {
    return ec.verify(
      address,
      address.signature,
      address.dataHash
    );
  }

  static createAddress() {
    return ec.genKeyPair();
  }

  static createHash(data: any) {
    return cryptoHash(
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

    const dataHash = cryptoHash(
      Date.now(),
      senderWallet.address,
      senderWallet.balance,
      recipient,
      amount
    );

    return new Address({
      id: uuidv4(),
      input: {
        timestamp: Date.now(),
        address: senderWallet.address,
        amount: senderWallet.balance,
        signature: senderWallet.signAddress(dataHash)
      },
      outputs: [
        { address: senderWallet.address, amount: senderWallet.balance - amount },
        { address: recipient, amount }
      ]
    });
  }

  static rewardTransaction({ minerWallet }: any) {
    return new Address({
      id: REWARD_INPUT.id,
      input: REWARD_INPUT,
      outputs: [{ address: minerWallet.address, amount: MINING_REWARD }]
    });
  }

  update({ senderWallet, recipient, amount }: any) {
    const senderOutput = this.outputs.find(output => output.address === senderWallet.address);

    if (amount > senderOutput.amount) {
      throw new Error('Amount exceeds balance');
    }

    senderOutput.amount = senderOutput.amount - amount;

    this.outputs.push({ address: recipient, amount });

    const dataHash = cryptoHash(
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

  static transactionMap({ transactionPool }: any) {
    return transactionPool.map((transaction: any) => transaction.transactionMap());
  }

  transactionMap() {
    return {
      id: this.id,
      input: this.input,
      outputs: this.outputs
    };
  }

  static transactionPoolMap({ transactionPool }: any) {
    const transactionPoolMap: any = {};

    transactionPool.forEach((transaction: any) => {
      transactionPoolMap[transaction.id] = transaction;
    });

    return transactionPoolMap;
  }

  static transactionMinerMap({ transactionMiner }: any) {
    const transactionMinerMap: any = {};

    transactionMiner.forEach((transaction: any) => {
      transactionMinerMap[transaction.id] = transaction;
    });

    return transactionMinerMap;
  }

  static validTransaction(transaction: any) {
    const { input: { address, amount, signature }, outputs } = transaction;

    const outputTotal = outputs.reduce((total: number, output: any) => {
      return total + output.amount;
    }, 0);

    if (amount !== outputTotal) {
      console.error(`Invalid transaction from ${address}`);
      return false;
    }

    if (!verifySignature({ address, dataHash, signature })) {
      console.error(`Invalid signature from ${address}`);
      return false;
    }

    return true;
  }

  static clearBlockchainTransactions({ chain, transactionPool }: any) {
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];

      for (let transaction of block.data) {
        if (transactionPool[transaction.id]) {
          delete transactionPool[transaction.id];
        }
      }
    }
  }
}

class AddressPool {
  addressPool: Address[];
  addressPoolMap: AddressPoolMap;

  constructor() {
    this.addressPool = [];
    this.addressPoolMap = new AddressPoolMap();
  }

  static validAddressPool(addressPool: Address[]) {
    for (let i = 0; i < addressPool.length; i++) {
      const address = addressPool[i];

      if (address.address === REWARD_INPUT.address) {
        console.error('The miner reward input is invalid');
        return false;
      }

      if (Object.values(address.addressMap).reduce((total, outputAmount) => total + outputAmount) !== address.input.amount) {
        console.error(`The address ${address.address} has an invalid balance`);
        return false;
      }

      if (!addressMap.verifyAddress(address)) {
        console.error(`The address ${address.address} has an invalid signature`);
        return false;
      }
    }

    return true;
  }

  static clearBlockchainAddressPool({ chain, addressPool }: any) {
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];

      for (let address of block.data) {
        if (addressPool.addressPoolMap[address.address]) {
          delete addressPool.addressPoolMap[address.address];
        }
      }
    }
  }
}

class AddressMiner {
  addressMiner: Address[];
  addressMinerMap: AddressMinerMap;

  constructor() {
    this.addressMiner = [];
    this.addressMinerMap = new AddressMinerMap();
  }

  static validAddressMiner(addressMiner: Address[]) {
    for (let i = 0; i < addressMiner.length; i++) {
      const address = addressMiner[i];

      if (address.address === REWARD_INPUT.address) {
        console.error('The miner reward input is invalid');
        return false;
      }

      if (Object.values(address.addressMap).reduce((total, outputAmount) => total + outputAmount) !== address.input.amount) {
        console.error(`The address ${address.address} has an invalid balance`);
        return false;
      }

      if (!addressMap.verifyAddress(address)) {
        console.error(`The address ${address.address} has an invalid signature`);
        return false;
      }
    }

    return true;
  }

  static clearBlockchainAddressMiner({ chain, addressMiner }: any) {
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];

      for (let address of block.data) {
        if (addressMiner.addressMinerMap[address.address]) {
          delete addressMiner.addressMinerMap[address.address];
        }
      }
    }
  }
}

class AddressMap {
  addressMap: any[];

  constructor() {
    this.addressMap = [];
  }

  static verifyAddress(address: any) {
    return verifySignature({
      publicKey: address.address,
      dataHash: hash(address.input),
      signature: address.input.signature
    });
  }

  static addressMap({ addressPool }: any) {
    const addressMap: any = {};

    addressPool.forEach((address: any) => {
      addressMap[address.address] = address;
    });

    return addressMap;
  }

  static addressMap({ addressMiner }: any) {
    const addressMap: any = {};

    addressMiner.forEach((address: any) => {
      addressMap[address.address] = address;
    });

    return addressMap;
  }
}

class AddressPoolMap {
  addressPoolMap: any[];

  constructor() {
    this.addressPoolMap = [];
  }

  static addressPoolMap({ addressPool }: any) {
    const addressPoolMap: any = {};

    addressPool.forEach((address: any) => {
      addressPoolMap[address.id] = address;
    });

    return addressPoolMap;
  }

  static addressPoolMap({ addressMiner }: any) {
    const addressPoolMap: any = {};

    addressMiner.forEach((address: any) => {
      addressPoolMap[address.id] = address;
    });

    return addressPoolMap;
  }
}

class AddressMinerMap {
  addressMinerMap: any[];

  constructor() {
    this.addressMinerMap = [];
  }

  static addressMinerMap({ addressMiner }: any) {
    const addressMinerMap: any = {};

    addressMiner.forEach((address: any) => {
      addressMinerMap[address.id] = address;
    });

    return addressMinerMap;
  }

  static addressMinerMap({ addressPool }: any) {
    const addressMinerMap: any = {};

    addressPool.forEach((address: any) => {
      addressMinerMap[address.id] = address;
    });

    return addressMinerMap;
  }
}

export { Address, AddressPool, AddressMiner, AddressMap, AddressPoolMap, AddressMinerMap };
