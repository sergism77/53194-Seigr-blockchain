import { v4 as uuidv4 } from 'uuid';
import { VerifySignature, CryptoHash } from './utils';
import { config } from './config';
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

interface AddressInput {
  timestamp: number;
  address: string;
  amount: number;
  signature: EC.Signature;
  privateKey?: KeyPair;
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

  /**
   * Verifies the address by checking the signature.
   * @param address The address to verify.
   * @returns True if the address is valid, false otherwise.
   */
  static verifyAddress(address: Address): boolean {
    return ec.verify(
      address.input.address,
      address.input.signature,
      CryptoHash(address.input)
    );
  }

  /**
   * Generates a new elliptic curve key pair.
   * @returns An elliptic curve key pair.
   */
  static genKeyPair() {
    return ec.genKeyPair();
  }

  /**
   * Creates a hash of the given data.
   * @param data The data to hash.
   * @returns The hash value.
   */
  static hash(data: any) {
    return CryptoHash(
      data.timestamp,
      data.lastHash,
      data.data,
      data.nonce,
      data.difficulty
    );
  }

  /**
   * Signs the data hash using the private key.
   * @param dataHash The hash of the data to sign.
   * @param privateKey The private key used for signing.
   * @returns The signature.
   */
  static signAddress(dataHash: string, privateKey: string | KeyPair) {
    const key = typeof privateKey === 'string' ? ec.keyFromPrivate(privateKey) : privateKey;
    return key.sign(dataHash);
  }

  /**
   * Creates a new transaction from the sender wallet to the recipient.
   * @param senderWallet The sender's wallet.
   * @param recipient The recipient's address.
   * @param amount The amount to transfer.
   * @returns The created transaction.
   */
  static createTransaction(senderWallet: Address, recipient: string, amount: number): AddressData {
    if (amount > senderWallet.input.amount || amount <= 0) {
      throw new Error('Invalid transaction amount');
    }

    const data = {
      timestamp: Date.now(),
      lastHash: senderWallet.id,
      data: {
        senderAddress: senderWallet.input.address,
        recipientAddress: recipient,
        amount: amount
      }
    };

    const input: AddressInput = {
      timestamp: Date.now(),
      address: senderWallet.input.address,
      amount: senderWallet.input.amount,
      signature: Address.signAddress(Address.hash(data), senderWallet.input.privateKey)
    };

    const outputs: AddressOutput[] = [
      { address: recipient, amount: amount },
      { address: senderWallet.input.address, amount: senderWallet.input.amount - amount }
    ];

    return new Address({ id: uuidv4(), input: input, outputs: outputs });
  }

  /**
   * Creates a reward transaction for the miner.
   * @param minerWallet The wallet of the miner.
   * @returns The reward transaction.
   */
  static createRewardTransaction(minerWallet: any): AddressData {
    const input: AddressInput = {
      timestamp: Date.now(),
      address: minerWallet.address,
      amount: config.getMiningReward(),
      signature: Address.signAddress('', '') // Generate the signature based on the input and private key
    };

    const outputs: AddressOutput[] = [
      { address: minerWallet.address, amount: config.getMiningReward() }
    ];

    return new Address({
      id: uuidv4(),
      input,
      outputs
    });
  }

  /**
   * Updates the transaction with new sender, recipient, and amount.
   * @param senderWallet The sender's wallet.
   * @param recipient The recipient's address.
   * @param amount The amount to transfer.
   */
  update({ senderWallet, recipient, amount }: { senderWallet: Address; recipient: string; amount: number }): void {
    const senderOutput = this.outputs.find((output) => output.address === senderWallet.input.address);

    if (!senderOutput) {
      throw new Error('Sender output not found');
    }

    if (amount > senderOutput.amount) {
      throw new Error('Amount exceeds balance');
    }

    senderOutput.amount -= amount;

    this.outputs.push({ address: recipient, amount });

    const dataHash = CryptoHash(
      Date.now(),
      senderWallet.input.address,
      senderOutput.amount,
      recipient,
      amount
    );

    this.input = {
      timestamp: Date.now(),
      address: senderWallet.input.address,
      amount: senderOutput.amount,
      signature: Address.signAddress(dataHash, senderWallet.input.privateKey)
    };
  }

  /**
   * Converts the transaction to a key-value format.
   * @returns The transaction in key-value format.
   */
  transactionMap(): { id: string; input: AddressInput; outputs: AddressOutput[] } {
    return {
      id: this.id,
      input: this.input,
      outputs: this.outputs
    };
  }

  /**
   * Checks if the transaction is valid.
   * @param transaction The transaction to validate.
   * @returns True if the transaction is valid, false otherwise.
   */
  static isValidTransaction(transaction: any): boolean {
    const { input, outputs } = transaction;

    const outputTotal = outputs.reduce((total: number, output: any) => total + output.amount, 0);

    if (input.amount !== outputTotal) {
      console.error(`Invalid transaction from ${input.address}`);
      return false;
    }

    if (!VerifySignature(input.address, input, input.signature)) {
      console.error(`Invalid signature from ${input.address}`);
      return false;
    }

    return true;
  }

  /**
   * Clears the blockchain transactions by removing transactions that are already present in the chain.
   * @param chain The blockchain chain.
   * @param transactionPool The transaction pool.
   */
  static clearBlockchainTransactions(chain: any[], transactionPool: any[]): void {
    const transactionsToKeep: any[] = [];

    for (const block of chain.slice(1)) {
      for (const transaction of block.data) {
        if (!transactionPool.includes(transaction)) {
          transactionsToKeep.push(transaction);
        }
      }
    }

    transactionPool.length = 0;
    transactionPool.push(...transactionsToKeep);
  }
}

class AddressPool {
  addressPool: Address[];

  constructor() {
    this.addressPool = [];
  }

  /**
   * Adds an address to the pool.
   * @param address The address to add.
   */
  addAddress(address: Address): void {
    this.addressPool.push(address);
  }

  /**
   * Removes an address from the pool.
   * @param address The address to remove.
   */
  removeAddress(address: Address): void {
    const index = this.addressPool.findIndex((addr) => addr.id === address.id);
    if (index !== -1) {
      this.addressPool.splice(index, 1);
    }
  }

  /**
   * Validates the address pool.
   * @returns True if the address pool is valid, false otherwise.
   */
  isValidAddressPool(): boolean {
    for (const address of this.addressPool) {
      if (address.input.address === config.getRewardInput().address) {
        console.error('The miner reward input is invalid');
        return false;
      }

      const totalOutputAmount = address.outputs.reduce((total, output) => total + output.amount, 0);

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

  /**
   * Clears the blockchain address pool by removing addresses that are already in the chain.
   * @param chain The blockchain chain.
   */
  clearBlockchainAddressPool(chain: any[]): void {
    const addressesToKeep: Address[] = [];

    for (const block of chain.slice(1)) {
      for (const address of block.data) {
        if (!this.addressPool.includes(address)) {
          addressesToKeep.push(address);
        }
      }
    }

    this.addressPool.length = 0;
    this.addressPool.push(...addressesToKeep);
  }

  /**
   * Creates an address map from the address pool.
   * @returns The address map.
   */
  createAddressMap(): Map<string, Address> {
    const addressMap = new Map<string, Address>();

    for (const address of this.addressPool) {
      addressMap.set(address.id, address);
    }

    return addressMap;
  }
}

class AddressMiner {
  addressMiner: Address[];

  constructor() {
    this.addressMiner = [];
  }

  /**
   * Validates the address miner.
   * @returns True if the address miner is valid, false otherwise.
   */
  isValidAddressMiner(): boolean {
    for (const address of this.addressMiner) {
      if (address.input.address === config.getRewardInput().address) {
        console.error('The miner reward input is invalid');
        return false;
      }

      const totalOutputAmount = address.outputs.reduce((total, output) => total + output.amount, 0);

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

  /**
   * Clears the blockchain address miner by removing addresses that are already in the chain.
   * @param chain The blockchain chain.
   */
  clearBlockchainAddressMiner(chain: any[]): void {
    const addressesToKeep: Address[] = [];

    for (const block of chain.slice(1)) {
      for (const address of block.data) {
        if (!this.addressMiner.includes(address)) {
          addressesToKeep.push(address);
        }
      }
    }

    this.addressMiner.length = 0;
    this.addressMiner.push(...addressesToKeep);
  }

  /**
   * Creates an address miner map from the address miner.
   * @returns The address miner map.
   */
  createAddressMinerMap(): Map<string, Address> {
    const addressMinerMap = new Map<string, Address>();

    for (const address of this.addressMiner) {
      addressMinerMap.set(address.id, address);
    }

    return addressMinerMap;
  }
}

export { Address, AddressPool, AddressMiner };
