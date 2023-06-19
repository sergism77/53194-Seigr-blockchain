// Import required modules
const SeigrBlockchain = require('../../SeigrBlockchain/SeigrBlockchain.js');
const CreateBlock = require('../../SeigrBlockchain/createBlock.js');
const Wallet = require('../../SeigrBlockchain/wallet.js');

// Initialize the Seigr blockchain
const seigrBlockchain = new SeigrBlockchain();
const wallet = new Wallet();

// Generate a new wallet address for the miner
const minerAddress = wallet.generateAddress();

// Start mining blocks
function mineBlocks() {
  // Display current block being mined
  const currentBlock = seigrBlockchain.getLastBlock();
  console.log('Mining Block:', currentBlock);

  // Mine a new block
  const newBlock = CreateBlock.mineBlock({
    lastBlock: currentBlock,
    transactions: seigrBlockchain.getPendingTransactions(),
    miner: minerAddress,
  });

  // Add the new block to the blockchain
  seigrBlockchain.addBlock(newBlock);

  // Display updated balance, difficulty, and block reward
  const minerBalance = seigrBlockchain.getBalanceOfAddress(minerAddress);
  const difficulty = newBlock.difficulty;
  const blockReward = seigrBlockchain.getBlockReward();

  console.log('Miner Balance:', minerBalance);
  console.log('Difficulty:', difficulty);
  console.log('Block Reward:', blockReward);

  // Repeat the mining process
  setTimeout(mineBlocks, 1000);
}

// Start mining
mineBlocks();
