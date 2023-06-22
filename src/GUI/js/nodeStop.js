const { ipcRenderer } = require('electron');
const { spawn } = require('child_process');

function executeScript(command) {
  return new Promise((resolve, reject) => {
    const script = spawn('node', command);

    script.stdout.on('data', (data) => {
      console.log(`stdout:\n${data}`);
    });

    script.stderr.on('data', (data) => {
      console.error(`stderr:\n${data}`);
    });

    script.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Script execution failed with code ${code}`));
      }
    });
  });
}

const nodeStop = document.getElementById('nodeStop');

nodeStop.addEventListener('click', async function() {
  try {
    await Promise.all([
      executeScript(['src/SeigrBlockchain/p2pServer']),
      executeScript(['src/SeigrBlockchain/p2pClient'])
    ]);

    ipcRenderer.send('nodeStop');
  } catch (error) {
    console.error(error);
  }
});
