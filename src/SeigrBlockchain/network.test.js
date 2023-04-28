//this is the network.test.js file:
//

const Network = require('./network');
const Blockchain = require('../blockchain');
const Wallet = require('./wallet');
const Transaction = require('./transaction');
const { verifySignature } = require('../util');
const { STARTING_BALANCE } = require('../config');


class NetworkTest {
    constructor() {
        this.network = new Network();
        this.blockchain = new Blockchain();
        this.wallet = new Wallet();
        this.transaction = new Transaction();
    }

    //this function is used to test the createTransaction function
    //it takes in the recipient and amount
    //it returns the transaction
    testCreateTransaction(recipient, amount) {
        if (amount > this.wallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }
        return Transaction.create(this.wallet, recipient, amount);
    }

    //this function is used to test the mineBlock function
    //it takes in the data
    //it returns the block
    testMineBlock(data) {
        return this.blockchain.addBlock(data);
    }

    //this function is used to test the displayBlockchain function
    //it takes in the blockchain
    //it returns the blockchain
    testDisplayBlockchain(blockchain) {
        console.log(blockchain);
        return blockchain;
    }

    //this function is used to test the displayBalance function
    //it takes in the blockchain
    //it returns the balance
    testDisplayBalance(blockchain) {
        console.log(this.wallet.balance);
        return this.wallet.balance;
    }

    //this function is used to test the displayPublicKey function
    //it takes in the blockchain
    //it returns the public key
    testDisplayPublicKey(blockchain) {
        console.log(this.wallet.publicKey);
        return this.wallet.publicKey;
    }
}

module.exports = NetworkTest;