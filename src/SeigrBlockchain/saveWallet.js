const fs = require('fs');
const path = require('path');
const os = require('os');

function saveWallet(wallet) {
    fs.writeFileSync(path.join(__dirname, 'wallets', wallet.address), JSON.stringify(wallet));
}

module.exports = { saveWallet };