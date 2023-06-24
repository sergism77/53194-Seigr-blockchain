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
   * Creates a new key pair for an address.
   * @returns The newly created key pair.
   */
  static createAddress() {
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
  static signAddress(dataHash: any, privateKey: string) {
    const key = ec.keyFromPrivate(privateKey);
    return key.sign(dataHash);
  }

  /**
   * Creates a new transaction from the sender wallet to the recipient.
   * @param senderWallet The sender's wallet.
   * @param recipient The recipient's address.
   * @param amount The amount to transfer.
   * @returns The created transaction.
   */
  static createTransaction({ senderWallet, recipient, amount }: any) {
    if (amount > senderWallet.balance || amount <= 0) {
      throw new Error('Invalid transaction amount');
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

  /**
   * Creates a reward transaction for the miner.
   * @param minerWallet The miner's wallet.
   * @returns The created reward transaction.
   */
  static createRewardTransaction({ minerWallet }: any) {
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

  /**
   * Updates the transaction by transferring funds from the sender to the recipient.
   * @param senderWallet The sender's wallet.
   * @param recipient The recipient's address.
   * @param amount The amount to transfer.
   */
  update({ senderWallet, recipient, amount }: any) {
    const senderOutput = this.outputs.find(
      (output) => output.address === senderWallet.address
    );

    if (amount > senderOutput.amount || amount <= 0) {
      throw new Error('Invalid transaction amount');
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

  /**
   * Returns the transaction as a key-value map.
   * @returns The transaction as a key-value map.
   */
  transactionMap() {
    return {
      id: this.id,
      input: this.input,
      outputs: this.outputs
    };
  }

  /**
   * Checks if a transaction is valid by verifying the input and outputs.
   * @param transaction The transaction to validate.
   * @returns True if the transaction is valid, false otherwise.
   */
  static isValidTransaction(transaction: any): boolean {
    const { input, outputs } = transaction;

    const outputTotal = outputs.reduce(
      (total: number, output: any) => total + output.amount,
      0
    );

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
   * Clears the blockchain transaction pool by removing transactions that are already in the chain.
   * @param chain The blockchain chain.
   * @param transactionPool The transaction pool to clear.
   */
  static clearBlockchainTransactions({ chain, transactionPool }: any) {
    const transactionsToKeep = chain
      .slice(1)
      .flatMap((block: any) => block.data);

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
   * Adds an address to the address pool.
   * @param address The address to add.
   */
  addAddress(address: Address) {
    this.addressPool.push(address);
  }

  /**
   * Removes an address from the address pool.
   * @param address The address to remove.
   */
  removeAddress(address: Address) {
    const index = this.addressPool.indexOf(address);
    if (index > -1) {
      this.addressPool.splice(index, 1);
    }
  }

  /**
   * Checks if the address pool is valid by verifying all addresses in the pool.
   * @returns True if the address pool is valid, false otherwise.
   */
  isValidAddressPool(): boolean {
    for (const address of this.addressPool) {
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

  /**
   * Clears the blockchain address pool by removing addresses that are already in the chain.
   * @param chain The blockchain chain.
   */
  clearBlockchainAddressPool(chain: any[]) {
    const addressesToKeep = chain
      .slice(1)
      .flatMap((block: any) => block.data);

    this.addressPool = addressesToKeep;
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

export { Address, AddressPool, AddressMap };
