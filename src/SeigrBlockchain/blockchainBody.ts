'use strict';

import SHA256 from 'crypto-js/sha256';
import EC from 'elliptic';
import { v4 as uuidv4 } from 'uuid';
import TransactionInput from './transactionInput';
import TransactionOutput from './transactionOutput';
import SeigrBlockchainTransaction from './transaction';
import BlockBodyTransaction from './blockBodyTransaction';

class BlockchainBody {
  SHA256: any;
  ec: any;
  uuidv4: any;
  TransactionInput: any;
  TransactionOutput: any;
  SeigrBlockchainTransaction: any;
  BlockBodyTransaction: any;

  constructor() {
    this.SHA256 = SHA256;
    this.ec = new EC('secp256k1');
    this.uuidv4 = uuidv4;
    this.TransactionInput = TransactionInput;
    this.TransactionOutput = TransactionOutput;
    this.SeigrBlockchainTransaction = SeigrBlockchainTransaction;
    this.BlockBodyTransaction = BlockBodyTransaction;
  }

  toString() {
    return (
      'Blockchain Body: \n' +
      'SHA256: ' +
      this.SHA256 +
      '\n' +
      'EC: ' +
      this.ec +
      '\n' +
      'UUIDv4: ' +
      this.uuidv4 +
      '\n' +
      'Transaction Input: ' +
      this.TransactionInput +
      '\n' +
      'Transaction Output: ' +
      this.TransactionOutput +
      '\n' +
      'Seigr Blockchain Transaction: ' +
      this.SeigrBlockchainTransaction +
      '\n' +
      'Block Body Transaction: ' +
      this.BlockBodyTransaction +
      '\n'
    );
  }
}

export default BlockchainBody;