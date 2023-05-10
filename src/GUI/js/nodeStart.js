const { exec } = require('child_process');
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
