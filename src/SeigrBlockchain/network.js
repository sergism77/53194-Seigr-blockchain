'use strict';

const Transaction = require('./transaction');
const Wallet = require('./wallet');
const { verifySignature } = require('../util');
const Blockchain = require('../blockchain');
const { STARTING_BALANCE } = require('../config');
const P2pServer = require('./p2p-server');


class Network {
    constructor() {
        this.wallet = new Wallet();
        this.blockchain = new Blockchain();
        this.p2pServer = new P2pServer(this.blockchain);
    }

    //this function is used to create a transaction
    //it takes in the recipient and amount
    //it returns the transaction
    createTransaction(recipient, amount) {
        if (amount > this.wallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }
        return Transaction.create(this.wallet, recipient, amount);
    }

    //this function is used to mine a block
    //it takes in the data
    //it returns the block
    mineBlock(data) {
        return this.blockchain.addBlock(data);
    }

    //this function is used to display the blockchain
    //it takes in the blockchain
    //it returns the blockchain
    displayBlockchain(blockchain) {
        console.log(blockchain);
        return blockchain;
    }

    //this function is used to display the balance
    //it takes in the blockchain
    //it returns the balance
    displayBalance(blockchain) {
        console.log(this.wallet.balance);
        return this.wallet.balance;
    }

    //this function is used to display the public key
    //it takes in the blockchain
    //it returns the public key
    displayPublicKey(blockchain) {
        console.log(this.wallet.publicKey);
        return this.wallet.publicKey;
    }

    //this function is used to display the private key
    //it takes in the blockchain
    //it returns the private key
    displayPrivateKey(blockchain) {
        console.log(this.wallet.privateKey);
        return this.wallet.privateKey;
    }

    //this function is used to display the wallet
    //it takes in the blockchain
    //it returns the wallet
    displayWallet(blockchain) {
        console.log(this.wallet);
        return this.wallet;
    }

    //this function is used to display the transaction pool
    //it takes in the blockchain
    //it returns the transaction pool
    displayTransactionPool(blockchain) {
        console.log(this.transactionPool);
        return this.transactionPool;
    }

    //this function is used to display the transaction
    //it takes in the blockchain
    //it returns the transaction
    displayTransaction(blockchain) {
        console.log(this.transaction);
        return this.transaction;
    }

    //this function is used to display the signature
    //it takes in the blockchain    
    //it returns the signature
    displaySignature(blockchain) {
        console.log(this.signature);
        return this.signature;
    }

    //this function is used to display the recipient
    //it takes in the blockchain
    //it returns the recipient
    displayRecipient(blockchain) {
        console.log(this.recipient);
        return this.recipient;
    }

    //this function is used to display the amount
    //it takes in the blockchain
    //it returns the amount
    displayAmount(blockchain) {
        console.log(this.amount);
        return this.amount;
    }

    //this function is used to display the sender output
    //it takes in the blockchain
    //it returns the sender output
    displaySenderOutput(blockchain) {
        console.log(this.senderOutput);
        return this.senderOutput;
    }

    //this function is used to display the recipient output
    //it takes in the blockchain
    //it returns the recipient output
    displayRecipientOutput(blockchain) {
        console.log(this.recipientOutput);
        return this.recipientOutput;
    }

    //this function is used to display the sender input
    //it takes in the blockchain
    //it returns the sender input
    displaySenderInput(blockchain) {
        console.log(this.senderInput);
        return this.senderInput;
    }

    //this function is used to display the recipient input
    //it takes in the blockchain
    //it returns the recipient input
    displayRecipientInput(blockchain) {
        console.log(this.recipientInput);
        return this.recipientInput;
    }

    //this function is used to display the sender transaction
    //it takes in the blockchain
    //it returns the sender transaction
    displaySenderTransaction(blockchain) {
        console.log(this.senderTransaction);
        return this.senderTransaction;
    }

    //this function is used to display the recipient transaction
    //it takes in the blockchain
    //it returns the recipient transaction
    displayRecipientTransaction(blockchain) {
        console.log(this.recipientTransaction);
        return this.recipientTransaction;
    }

    //this function is used to display the sender balance
    //it takes in the blockchain
    //it returns the sender balance
    displaySenderBalance(blockchain) {
        console.log(this.senderBalance);
        return this.senderBalance;
    }

    //this function is used to display the recipient balance
    //it takes in the blockchain
    //it returns the recipient balance
    displayRecipientBalance(blockchain) {
        console.log(this.recipientBalance);
        return this.recipientBalance;
    }

    //this function is used to display the sender wallet
    //it takes in the blockchain
    //it returns the sender wallet
    displaySenderWallet(blockchain) {
        console.log(this.senderWallet);
        return this.senderWallet;
    }

    //this function is used to display the recipient wallet
    //it takes in the blockchain
    //it returns the recipient wallet
    displayRecipientWallet(blockchain) {
        console.log(this.recipientWallet);
        return this.recipientWallet;
    }

    //this function is used to display the sender output map
    //it takes in the blockchain
    //it returns the sender output map
    displaySenderOutputMap(blockchain) {
        console.log(this.senderOutputMap);
        return this.senderOutputMap;
    }

    //this function is used to display the recipient output map
    //it takes in the blockchain
    //it returns the recipient output map
    displayRecipientOutputMap(blockchain) {
        console.log(this.recipientOutputMap);
        return this.recipientOutputMap;
    }

    //this function is used to display the sender output map
    //it takes in the blockchain
    //it returns the sender output map
    displaySenderOutputMap(blockchain) {
        console.log(this.senderOutputMap);
        return this.senderOutputMap;
    }
}

module.exports = Network;