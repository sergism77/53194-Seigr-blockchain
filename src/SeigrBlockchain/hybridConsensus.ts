import { Blockchain } from "../blockchain/blockchain";
import { Transaction } from "../transaction";
import { AbstractAccount } from "../abstractAccount";
import { SEIG } from "../seig";

const blockchain = new Blockchain();

const hybridConsensus = {
  p2pPort: 53194,
  generateWallet: () => {
    return "53194x" + Math.random().toString(16).substr(2, 40);
  },
  ASIC_RESISTANT: true,
  BLOCKCHAIN_ID: 53194,
  TOKEN_NAME: "SEIG",
  SMART_CONTRACTS: true,
  start: () => {
    console.log("Hybrid consensus algorithm started");
  },
  validateBlock: (block, previousBlockTime, BLOCK_TIME) => {
    const { nonce, hash } = blockchain.mineBlock(block, 2);
    block.nonce = nonce;
    block.hash = hash;

    if (block.timestamp - previousBlockTime < BLOCK_TIME) {
      throw new Error("Block time too short");
    }

    const timeSinceLastBlock = block.timestamp - previousBlockTime;

    console.log(`Block validated. Time since last block: ${timeSinceLastBlock}`);
  },
  transactions: (from, to, amount) => {
    console.log(`Adding transaction from ${from} to ${to} for ${amount} ${hybridConsensus.TOKEN_NAME}`);
    blockchain.addTransaction(new Transaction(from, to, amount));
  },
  fundProject: (project, amount, safe) => {
    const fee = safe.getBalance() * 0.1;
    if (amount > fee) {
      throw new Error("Insufficient funds");
    }
    safe.balance -= amount;
    console.log(`Project ${project} funded with ${amount} ${hybridConsensus.TOKEN_NAME}`);
  }
};

module.exports = hybridConsensus;
