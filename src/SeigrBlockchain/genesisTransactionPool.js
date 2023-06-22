'use strict';

const { REWARD_INPUT, MINING_REWARD } = require('./config');
const { Transaction } = require('./transaction');
const createTransaction = require('./createTransaction');
const createWallet = require('./walletUtils');
const { cryptoHash } = require('./utils');
const GENESIS_DATA = require('./genesis');
const GENESIS_TRANSACTION_DATA = require('./genesisTransaction');
const timestamp = undefined || {};
const input = undefined || {};
const output = undefined || {};
const hash = undefined || {};
const signature = undefined || {};
const publicKey = undefined || {};
const amount = undefined || {};
const address = undefined || {};

class BaseTransaction {
  constructor({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
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
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address }) {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransactionPool extends BaseTransaction {}

class mineGenesisTransactionPoolRewardTimestamp extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTimestamp() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInputOutput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInputOutputHash() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTimestampInputOutputHashSignature() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransaction extends BaseTransaction {}

class mineGenesisTransactionPoolRewardTransaction extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransaction() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestamp() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInputOutput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInputOutputHash() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }

  static mineGenesisTransactionPoolRewardTransactionTimestampInputOutputHashSignature() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransactionPoolReward extends BaseTransaction {}

class mineGenesisTransactionPoolRewardTransactionInput extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionInput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransactionPoolRewardTransactionOutput extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionOutput() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransactionPoolRewardTransactionHash extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionHash() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransactionPoolRewardTransactionSignature extends BaseTransaction {
  static mineGenesisTransactionPoolRewardTransactionSignature() {
    return new this({
      timestamp,
      input,
      output,
      hash,
      signature,
      publicKey,
      amount,
      address
    });
  }
}

class mineGenesisTransactionPoolRewardInput extends BaseTransaction {}

class mineGenesisTransactionPoolRewardOutput extends BaseTransaction {}

class mineGenesisTransactionPoolRewardHash extends BaseTransaction {}

class mineGenesisTransactionPoolRewardSignature extends BaseTransaction {}

class mineGenesisTransactionPoolRewardPublicKey extends BaseTransaction {}

class mineGenesisTransactionPoolRewardAmount extends BaseTransaction {}

class mineGenesisTransactionPoolRewardTransactionAmount extends BaseTransaction {}

class mineGenesisTransactionPoolRewardAddress extends BaseTransaction {}

class mineGenesisTransactionPoolRewardTransactionPublicKey extends BaseTransaction {}

class mineGenesisTransactionPoolRewardTransactionAddress extends BaseTransaction {}

module.exports = {
  mineGenesisTransactionPool,
  mineGenesisTransactionPoolReward,
  mineGenesisTransactionPoolRewardTransactionAmount,
  mineGenesisTransactionPoolRewardTransaction,
  mineGenesisTransactionPoolRewardTransactionSignature,
  mineGenesisTransactionPoolRewardTimestamp,
  mineGenesisTransactionPoolRewardTransactionInput,
  mineGenesisTransactionPoolRewardTransactionAddress,
  mineGenesisTransactionPoolRewardTransactionOutput,
  mineGenesisTransactionPoolRewardTransactionHash,
  mineGenesisTransactionPoolRewardInput,
  mineGenesisTransactionPoolRewardOutput,
  mineGenesisTransactionPoolRewardHash,
  mineGenesisTransactionPoolRewardSignature,
  mineGenesisTransactionPoolRewardPublicKey,
  mineGenesisTransactionPoolRewardAmount,
  mineGenesisTransactionPoolRewardAddress
};
