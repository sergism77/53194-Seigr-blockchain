import Transaction from "./transaction";
import Wallet from "./wallet";
import { verifySignature } from "../util";
import Blockchain from "../blockchain";
import { STARTING_BALANCE } from "../config";
import P2pServer from "./p2p-server";

class Network {
wallet: Wallet;
blockchain: Blockchain;
p2pServer: P2pServer;

constructor() {
this.wallet = new Wallet();
this.blockchain = new Blockchain();
this.p2pServer = new P2pServer(this.blockchain);
}

createTransaction(recipient: string, amount: number) {
if (amount > this.wallet.balance) {
console.log(Amount: ${amount} exceeds balance.);
return;
}
return Transaction.create(this.wallet, recipient, amount);
}

mineBlock(data: any) {
return this.blockchain.addBlock(data);
}

displayBlockchain(blockchain: Blockchain) {
console.log(blockchain);
return blockchain;
}

displayBalance(blockchain: Blockchain) {
console.log(this.wallet.balance);
return this.wallet.balance;
}

displayPublicKey(blockchain: Blockchain) {
console.log(this.wallet.publicKey);
return this.wallet.publicKey;
}

displayPrivateKey(blockchain: Blockchain) {
console.log(this.wallet.privateKey);
return this.wallet.privateKey;
}

displayWallet(blockchain: Blockchain) {
console.log(this.wallet);
return this.wallet;
}

displayTransactionPool(blockchain: Blockchain) {
console.log(this.transactionPool);
return this.transactionPool;
}

displayTransaction(blockchain: Blockchain) {
console.log(this.transaction);
return this.transaction;
}

displaySignature(blockchain: Blockchain) {
console.log(this.signature);
return this.signature;
}

displayRecipient(blockchain: Blockchain) {
console.log(this.recipient);
return this.recipient;
}

displayAmount(blockchain: Blockchain) {
console.log(this.amount);
return this.amount;
}

displaySenderOutput(blockchain: Blockchain) {
console.log(this.senderOutput);
return this.senderOutput;
}

displayRecipientOutput(blockchain: Blockchain) {
console.log(this.recipientOutput);
return this.recipientOutput;
}

displaySenderInput(blockchain: Blockchain) {
console.log(this.senderInput);
return this.senderInput;
}

displayRecipientInput(blockchain: Blockchain) {
console.log(this.recipientInput);
return this.recipientInput;
}

displaySenderTransaction(blockchain: Blockchain) {
console.log(this.senderTransaction);
return this.senderTransaction;
}

displayRecipientTransaction(blockchain: Blockchain) {
console.log(this.recipientTransaction);
return this.recipientTransaction;
}

displaySenderBalance(blockchain: Blockchain) {
console.log(this.senderBalance);
return this.senderBalance;
}

displayRecipientBalance(blockchain: Blockchain) {
console.log(this.recipientBalance);
return this.recipientBalance;
}

displaySenderWallet(blockchain: Blockchain) {
console.log(this.senderWallet);
return this.senderWallet;
}

displayRecipientWallet(blockchain: Blockchain) {
console.log(this.recipientWallet);
return this.recipientWallet;
}

displaySenderOutputMap(blockchain: Blockchain) {
console.log(this.senderOutputMap);
return this.senderOutputMap;
}

displayRecipientOutputMap(blockchain: Blockchain) {
console.log(this.recipientOutputMap);
return this.recipientOutputMap;
}
}

export default Network;