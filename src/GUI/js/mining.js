const os = require('os');
const cluster = require('cluster');
const SeigrBlockchain = require('../../SeigrBlockchain/SeigrBlockchain.js');
const CreateBlock = require('../../SeigrBlockchain/createBlock.js');
const Wallet = require('../../SeigrBlockchain/wallet.js');

// Get the number of available CPU threads
const availableThreads = os.cpus().length;
const recommendedThreads = Math.ceil(availableThreads / 2);

// Display the available number of threads and recommendation
console.log('Available CPU Threads:', availableThreads);
console.log('Recommended Mining Threads:', recommendedThreads);

// Get the number of threads for mining from the user (input or configuration)
const numMiningThreads = recommendedThreads; // Update this with user input or configuration

// Initialize the Seigr blockchain
const seigrBlockchain = new SeigrBlockchain();
const wallet = new Wallet();

// Generate a new wallet address for the miner
const minerAddress = wallet.generateAddress();

// Initialize mining status and statistics
let totalHashrate = 0;
let totalBlocksMined = 0;

// Start mining blocks using multiple threads
if (cluster.isMaster) {
  console.log(`Master thread started. Mining with ${numMiningThreads} threads.`);
  for (let i = 0; i < numMiningThreads; i++) {
    cluster.fork();
  }

  // Update mining status and statistics when a block is mined
  cluster.on('message', (worker, message) => {
    if (message.type === 'blockMined') {
      totalHashrate += message.hashrate;
      totalBlocksMined += 1;

      // Display mining status and statistics
      updateMiningStatus(totalHashrate, totalBlocksMined);
    }
  });
} else {
  mineBlocks();
}

// Mine blocks using a single thread
function mineBlocks() {
  // Display current block being mined
  const currentBlock = seigrBlockchain.getLastBlock();
  console.log('Mining Block:', currentBlock);

  // Mine a new block and calculate hashrate
  const startTime = Date.now();
  const newBlock = CreateBlock.mineBlock({
    lastBlock: currentBlock,
    transactions: seigrBlockchain.getPendingTransactions(),
    miner: minerAddress,
  });
  const endTime = Date.now();
  const elapsedSeconds = (endTime - startTime) / 1000;
  const hashrate = Math.floor(newBlock.nonce / elapsedSeconds);

  // Add the new block to the blockchain
  seigrBlockchain.addBlock(newBlock);

  // Display updated balance, difficulty, and block reward
  const minerBalance = seigrBlockchain.getBalanceOfAddress(minerAddress);
  const difficulty = newBlock.difficulty;
  const blockReward = seigrBlockchain.getBlockReward();

  console.log('Miner Balance:', minerBalance);
  console.log('Difficulty:', difficulty);
  console.log('Block Reward:', blockReward);

  // Send mining status and statistics to master thread
  process.send({ type: 'blockMined', hashrate });

  // Repeat the mining process
  setTimeout(mineBlocks, 1000);
}

// Update mining status in the UI
function updateMiningStatus(hashrate, blocksMined) {
  // Update the total hashrate
  const totalHashrateElement = document.getElementById('total-hashrate');
  totalHashrateElement.textContent = `${hashrate} hashes/s`;

  // Update the total blocks mined
  const totalBlocksMinedElement = document.getElementById('total-blocks-mined');
  totalBlocksMinedElement.textContent = blocksMined;
}
