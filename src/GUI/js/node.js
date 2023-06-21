const { ipcRenderer, remote } = require('electron');
const { dialog } = remote;

const startNodeBtn = document.getElementById('startNodeBtn');
const stopNodeBtn = document.getElementById('stopNodeBtn');
const connectBtn = document.getElementById('connectBtn');
const syncModeSelect = document.getElementById('syncModeSelect');
const addNodeForm = document.getElementById('addNodeForm');
const addNodeInput = document.getElementById('addNodeInput');

startNodeBtn.addEventListener('click', () => {
  ipcRenderer.send('start-node');
});

stopNodeBtn.addEventListener('click', () => {
  ipcRenderer.send('stop-node');
});

connectBtn.addEventListener('click', () => {
  const nodeAddress = addNodeInput.value;
  if (nodeAddress) {
    ipcRenderer.send('connect-node', { nodeAddress });
    addNodeInput.value = ''; // Clear the input field
  }
});

syncModeSelect.addEventListener('change', () => {
  const selectedMode = syncModeSelect.value;
  if (selectedMode === 'full') {
    ipcRenderer.send('set-sync-mode', { syncMode: 'full' });
  } else if (selectedMode === 'light') {
    ipcRenderer.send('set-sync-mode', { syncMode: 'light' });
  }
});

addNodeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nodeAddress = addNodeInput.value;
  if (nodeAddress) {
    ipcRenderer.send('add-node', { nodeAddress });
    addNodeInput.value = ''; // Clear the input field
  }
});

ipcRenderer.on('node-status', (event, { isRunning }) => {
  startNodeBtn.disabled = isRunning;
  stopNodeBtn.disabled = !isRunning;
  connectBtn.disabled = !isRunning;
  addNodeInput.disabled = !isRunning;
});

ipcRenderer.on('wallet-status', (event, { walletConnected }) => {
  // Handle wallet status
});

ipcRenderer.on('node-info', (event, { ipAddress, connectedNodes }) => {
  // Handle node info
});

ipcRenderer.on('sync-mode', (event, { currentMode }) => {
  syncModeSelect.value = currentMode;
});

ipcRenderer.on('add-node-error', (event, { message }) => {
  dialog.showErrorBox('Error', message);
});

function selectWalletFile() {
  const filePaths = dialog.showOpenDialogSync({
    title: 'Select Wallet File',
    properties: ['openFile'],
    filters: [
      { name: 'Wallet Files', extensions: ['json'] },
      { name: 'All Files', extensions: ['*'] },
    ],
  });

  if (filePaths && filePaths.length > 0) {
    const walletFile = filePaths[0];
    ipcRenderer.send('wallet-file-selected', { walletFile });
  }
}

ipcRenderer.on('select-wallet-file', selectWalletFile);
