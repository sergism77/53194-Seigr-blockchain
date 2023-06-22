const { spawn } = require('child_process');

// Start p2pServer
const p2pServer = spawn('node', ['src/SeigrBlockchain/p2pServer']);

p2pServer.stdout.on('data', (data) => {
  console.log(`p2pServer stdout:\n${data}`);
});

p2pServer.stderr.on('data', (data) => {
  console.error(`p2pServer stderr:\n${data}`);
});

p2pServer.on('close', (code) => {
  console.log(`p2pServer process exited with code ${code}`);
});

// Start p2pClient
const p2pClient = spawn('node', ['src/SeigrBlockchain/p2pClient']);

p2pClient.stdout.on('data', (data) => {
  console.log(`p2pClient stdout:\n${data}`);
});

p2pClient.stderr.on('data', (data) => {
  console.error(`p2pClient stderr:\n${data}`);
});

p2pClient.on('close', (code) => {
  console.log(`p2pClient process exited with code ${code}`);
});
