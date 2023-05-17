//we will use this file to start the Seigr blockchain by creating the genesis wallet and saving it in the wallets folder

const {SeigrBlockchain, Transaction, Block} = require('./SeigrBlockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const fs = require('fs');

//create a new keypair
const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');

//create a new wallet
const myWallet = new SeigrBlockchain();
myWallet.createWallet(publicKey);

//save the wallet to a file
fs.writeFileSync('./wallets/' + publicKey + '.json', JSON.stringify(myWallet));

//create a new transaction

const tx1 = new Transaction(publicKey, 'public key goes here', 10);
tx1.signTransaction(key);

//create a new block
const block1 = new Block();
block1.addTransaction(tx1);

//add the block to the blockchain
myWallet.addBlock(block1);

//save the blockchain to a file
fs.writeFileSync('./wallets/' + publicKey + '.json', JSON.stringify(myWallet));

//print the blockchain
console.log(myWallet);

//print the balance
console.log(myWallet.getBalance(publicKey));



module.exports = { myWallet };