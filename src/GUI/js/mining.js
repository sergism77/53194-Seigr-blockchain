const os = require('os');
const cluster = require('cluster');
const { ipcRenderer } = require('electron');
const SeigrBlockchain = require('../../SeigrBlockchain/SeigrBlockchain.js');
const CreateBlock = require('../../SeigrBlockchain/createBlock.js');
const Wallet = require('../../SeigrBlockchain/wallet.js');

const recommendedThreads = Math.ceil(os.cpus().length / 2);
const numMiningThreads = recommendedThreads; // Update this with user input or configuration

const seigrBlockchain = new SeigrBlockchain();
const wallet = new Wallet();
const minerAddress = wallet.generateAddress();

let totalHashrate = 0;
let totalBlocksMined = 0;

if (cluster.isMaster) {
  console.log(`Master thread started. Mining with ${numMiningThreads} threads.`);
  for (let i = 0; i < numMiningThreads; i++) {
    cluster.fork();
  }

  cluster.on('message', (worker, message) => {
    if (message.type === 'blockMined') {
      totalHashrate += message.hashrate;
      totalBlocksMined += 1;

      updateMiningStatus(totalHashrate, totalBlocksMined);
    }
  });
} else {
  mineBlocks();
}

function mineBlocks() {
  const currentBlock = seigrBlockchain.getLastBlock();
  console.log('Mining Block:', currentBlock);

  const startTime = Date.now();
  const newBlock = CreateBlock.mineBlock({
    lastBlock: currentBlock,
    transactions: seigrBlockchain.getPendingTransactions(),
    miner: minerAddress,
  });
  const endTime = Date.now();
  const elapsedSeconds = (endTime - startTime) / 1000;
  const hashrate = Math.floor(newBlock.nonce / elapsedSeconds);

  seigrBlockchain.addBlock(newBlock);

  const minerBalance = seigrBlockchain.getBalanceOfAddress(minerAddress);
  const difficulty = newBlock.difficulty;
  const blockReward = seigrBlockchain.getBlockReward();

  console.log('Miner Balance:', minerBalance);
  console.log('Difficulty:', difficulty);
  console.log('Block Reward:', blockReward);

  process.send({ type: 'blockMined', hashrate });

  setTimeout(mineBlocks, 1000);
}

function updateMiningStatus(hashrate, blocksMined) {
  ipcRenderer.send('update-mining-status', { hashrate, blocksMined });
}
