import { REWARD_INPUT, MINING_REWARD } from './config';
import { Transaction } from './transaction';
import createTransaction from './createTransaction';
import createWallet from './walletUtils';
import { cryptoHash } from './utils';
import GENESIS_DATA from './genesis';
import GENESIS_TRANSACTION_DATA from './genesisTransaction';

interface TransactionProps {
  timestamp: number;
  input: any;
  output: any;
  hash: string;
  signature: string;
  publicKey: string;
  amount: number;
  address: string;
}

class BaseTransaction {
  timestamp: number;
  input: any;
  output: any;
  hash: string;
  signature: string;
  publicKey: string;
  amount: number;
  address: string;

  constructor({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address,
  }: TransactionProps) {
    this.timestamp = timestamp;
    this.input = input;
    this.output = output;
    this.hash = hash;
    this.signature = signature;
    this.publicKey = publicKey;
    this.amount = amount;
    this.address = address;
  }

  static genesis() {
    return new this(GENESIS_TRANSACTION_DATA);
  }

  static mineGenesisTransaction() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static createTransaction({
    timestamp,
    input,
    output,
    hash,
    signature,
    publicKey,
    amount,
    address,
  }: TransactionProps) {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address,
    });
  }
}

class MineGenesisTransactionPool extends BaseTransaction {}

class MineGenesisTransactionPoolRewardTimestamp extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTimestamp() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInput() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInputOutput() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInputOutputHash() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInputOutputHashSignature() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }
}

class MineGenesisTransaction extends BaseTransaction {}

class MineGenesisTransactionPoolRewardTransaction extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransaction() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestamp() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInput() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInputOutput() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInputOutputHash() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInputOutputHashSignature() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }
}

class MineGenesisTransactionPoolReward extends BaseTransaction {}

class MineGenesisTransactionPoolRewardTransactionInput extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionInput() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }
}

class MineGenesisTransactionPoolRewardTransactionOutput extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionOutput() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }
}

class MineGenesisTransactionPoolRewardTransactionHash extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionHash() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }
}

class MineGenesisTransactionPoolRewardTransactionSignature extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionSignature() {
    return new this({
      timestamp: undefined,
      input: undefined,
      output: undefined,
      hash: undefined,
      signature: undefined,
      publicKey: undefined,
      amount: undefined,
      address: undefined,
    });
  }
}

class MineGenesisTransactionPoolRewardInput extends BaseTransaction {}

class MineGenesisTransactionPoolRewardOutput extends BaseTransaction {}

class MineGenesisTransactionPoolRewardHash extends BaseTransaction {}

class MineGenesisTransactionPoolRewardSignature extends BaseTransaction {}

class MineGenesisTransactionPoolRewardPublicKey extends BaseTransaction {}

class MineGenesisTransactionPoolRewardAmount extends BaseTransaction {}

class MineGenesisTransactionPoolRewardTransactionAmount extends BaseTransaction {}

class MineGenesisTransactionPoolRewardAddress extends BaseTransaction {}

class MineGenesisTransactionPoolRewardTransactionPublicKey extends BaseTransaction {}

class MineGenesisTransactionPoolRewardTransactionAddress extends BaseTransaction {}

export {
  MineGenesisTransactionPool,
  MineGenesisTransactionPoolReward,
  MineGenesisTransactionPoolRewardTransactionAmount,
  MineGenesisTransactionPoolRewardTransaction,
  MineGenesisTransactionPoolRewardTransactionSignature,
  MineGenesisTransactionPoolRewardTimestamp,
  MineGenesisTransactionPoolRewardTransactionInput,
  MineGenesisTransactionPoolRewardTransactionAddress,
  MineGenesisTransactionPoolRewardTransactionOutput,
  MineGenesisTransactionPoolRewardTransactionHash,
  MineGenesisTransactionPoolRewardInput,
  MineGenesisTransactionPoolRewardOutput,
  MineGenesisTransactionPoolRewardHash,
  MineGenesisTransactionPoolRewardSignature,
  MineGenesisTransactionPoolRewardPublicKey,
  MineGenesisTransactionPoolRewardAmount,
  MineGenesisTransactionPoolRewardAddress,
};
