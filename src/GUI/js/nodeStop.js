const { ipcRenderer } = require('electron');
const { exec } = require('child_process');

const nodeStop = document.getElementById('nodeStop');

nodeStop.addEventListener('click', function() {
    exec('node src/SeigrBlockchain/p2pServer', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    }
    );
    
    exec('node src/SeigrBlockchain/p2pClient', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    }
    );
    ipcRenderer.send('nodeStop');
}
);

