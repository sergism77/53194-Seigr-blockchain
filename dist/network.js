"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_1 = __importDefault(require("./transaction"));
const wallet_1 = __importDefault(require("./wallet"));
const blockchain_1 = __importDefault(require("./blockchain"));
const p2pServer_1 = __importDefault(require("./p2pServer"));
class Network {
    constructor() {
        this.wallet = new wallet_1.default();
        this.blockchain = new blockchain_1.default();
        this.p2pServer = new p2pServer_1.default(this.blockchain);
    }
    createTransaction(recipient, amount) {
        if (amount > this.wallet.balance) {
            console.log(`Amount: ${amount} exceeds balance.`);
            return;
        }
        return transaction_1.default.create(this.wallet, recipient, amount);
    }
    mineBlock(data) {
        return this.blockchain.addBlock(data);
    }
    displayBlockchain(blockchain) {
        console.log(blockchain);
        return blockchain;
    }
    displayBalance(blockchain) {
        console.log(this.wallet.balance);
        return this.wallet.balance;
    }
    displayPublicKey(blockchain) {
        console.log(this.wallet.publicKey);
        return this.wallet.publicKey;
    }
    displayPrivateKey(blockchain) {
        console.log(this.wallet.privateKey);
        return this.wallet.privateKey;
    }
    displayWallet(blockchain) {
        console.log(this.wallet);
        return this.wallet;
    }
    displayTransactionPool(blockchain) {
        console.log(this.transactionPool);
        return this.transactionPool;
    }
    displayTransaction(blockchain) {
        console.log(this.transaction);
        return this.transaction;
    }
    displaySignature(blockchain) {
        console.log(this.signature);
        return this.signature;
    }
    displayRecipient(blockchain) {
        console.log(this.recipient);
        return this.recipient;
    }
    displayAmount(blockchain) {
        console.log(this.amount);
        return this.amount;
    }
    displaySenderOutput(blockchain) {
        console.log(this.senderOutput);
        return this.senderOutput;
    }
    displayRecipientOutput(blockchain) {
        console.log(this.recipientOutput);
        return this.recipientOutput;
    }
    displaySenderInput(blockchain) {
        console.log(this.senderInput);
        return this.senderInput;
    }
    displayRecipientInput(blockchain) {
        console.log(this.recipientInput);
        return this.recipientInput;
    }
    displaySenderTransaction(blockchain) {
        console.log(this.senderTransaction);
        return this.senderTransaction;
    }
    displayRecipientTransaction(blockchain) {
        console.log(this.recipientTransaction);
        return this.recipientTransaction;
    }
    displaySenderBalance(blockchain) {
        console.log(this.senderBalance);
        return this.senderBalance;
    }
    displayRecipientBalance(blockchain) {
        console.log(this.recipientBalance);
        return this.recipientBalance;
    }
    displaySenderWallet(blockchain) {
        console.log(this.senderWallet);
        return this.senderWallet;
    }
    displayRecipientWallet(blockchain) {
        console.log(this.recipientWallet);
        return this.recipientWallet;
    }
    displaySenderOutputMap(blockchain) {
        console.log(this.senderOutputMap);
        return this.senderOutputMap;
    }
    displayRecipientOutputMap(blockchain) {
        console.log(this.recipientOutputMap);
        return this.recipientOutputMap;
    }
}
exports.default = Network;
