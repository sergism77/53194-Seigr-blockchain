import { Transaction } from './transaction';
import { createTransaction } from './createTransaction';
import { createWallet } from './walletUtils';
import { cryptoHash } from './utils';
import { REWARD_INPUT, MINING_REWARD } from './config';
import GENESIS_DATA from './genesis';
import GENESIS_TRANSACTION_DATA from './genesisTransaction';
import createGenesisTransactionPool from './genesisTransactionPool';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { ec as EC } from 'elliptic';

const ec = new EC('secp256k1');

class GenesisTransaction {
timestamp: number;
input: any;
output: any;
hash: string;
signature: string;
publicKey: string;
amount: number;
address: string;

constructor({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
}: any) {
this.timestamp = timestamp;
this.input = input;
this.output = output;
this.hash = hash;
this.signature = signature;
this.publicKey = publicKey;
this.amount = amount;
this.address = address;
}

static genesis() {
return new this(GENESIS_TRANSACTION_DATA);
}

static mineGenesisTransaction() {
return new this({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
});
}

static createTransaction({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
}: any) {
return new this({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
});
}

static saveTransaction({ transaction }: any) {
const transactionPath = path.join(
os.homedir(),
'SeigrBlockchain',
'transaction.json'
);
fs.writeFileSync(transactionPath, JSON.stringify(transaction));
}

static loadTransaction({ transaction }: any) {
const transactionPath = path.join(
os.homedir(),
'SeigrBlockchain',
'transaction.json'
);
const transactionJSON = fs.readFileSync(transactionPath);
const transaction1 = JSON.parse(transactionJSON);
return transaction;
}

static rewardTransaction({ minerWallet }: any) {
return new this({
timestamp: Date.now(),
input: REWARD_INPUT,
output: { address: minerWallet.publicKey, amount: MINING_REWARD },
hash: cryptoHash(Date.now(), REWARD_INPUT, {
address: minerWallet.publicKey,
amount: MINING_REWARD,
}),
signature: 'reward',
publicKey: 'reward',
amount: MINING_REWARD,
address: minerWallet.publicKey,
});
}

static verifyTransaction(transaction: any) {
const {
input: { address, signature, publicKey },
output: { address: outputAddress, amount },
hash,
} = transaction;
const outputHash = cryptoHash(Date.now(), address, {
address: outputAddress,
amount,
});
const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
return keyFromPublic.verify(outputHash, signature);
}

static updateTransaction({
transaction,
senderWallet,
recipient,
amount,
}: any) {
const senderOutput = transaction.output.find(
(output: any) => output.address === senderWallet.publicKey
);
if (amount > senderOutput.amount) {
console.log(Amount: ${amount} exceeds balance.);
return;
}
senderOutput.amount = senderOutput.amount - amount;
transaction.output.push({ address: recipient, amount });
transaction.input = createTransaction.createInput({
senderWallet,
outputMap: transaction.output,
});
transaction.hash = cryptoHash(
Date.now(),
transaction.input,
transaction.output
);
return transaction;
}

static createTransaction({ senderWallet, recipient, amount }: any) {
if (amount > senderWallet.balance) {
console.log(Amount: ${amount} exceeds balance.);
return;
}
return createTransaction.createTransaction({
senderWallet,
recipient,
amount,
});
}

static createWallet() {
return createWallet.createWallet();
}

static saveWallet({ wallet }: any) {
return createWallet.saveWallet({ wallet });
}

static loadWallet({ publicKey }: any) {
return createWallet.loadWallet({ publicKey });
}

static getBalance({ publicKey }: any) {
return createWallet.getBalance({ publicKey });
}

static getPublicKey({ privateKey }: any) {
return createWallet.getPublicKey({ privateKey });
}

static getWallet({ publicKey }: any) {
return createWallet.getWallet({ publicKey });
}

static getWallets() {
return createWallet.getWallets();
}

static getWalletsPath() {
return createWallet.getWalletsPath();
}

static getWalletsFiles() {
return createWallet.getWalletsFiles();
}

static getWalletsFilesPath() {
return createWallet.getWalletsFilesPath();
}

static getWalletsFilesNames() {
return createWallet.getWalletsFilesNames();
}

static getWalletsFilesNamesPath() {
return createWallet.getWalletsFilesNamesPath();
}

static saveGenesisTransaction({ genesisTransaction }: any) {
const genesisTransactionPath = path.join(
__dirname,
'transactionPool',
'genesisTransaction.json'
);
fs.writeFileSync(
genesisTransactionPath,
JSON.stringify(genesisTransaction)
);
}

static loadGenesisTransaction() {
const genesisTransactionPath = path.join(
__dirname,
'transactionPool',
'genesisTransaction.json'
);
const genesisTransaction = JSON.parse(
fs.readFileSync(genesisTransactionPath)
);
return genesisTransaction;
}

static getGenesisTransactionPath() {
const genesisTransactionPath = path.join(
__dirname,
'transactionPool',
'genesisTransaction.json'
);
return genesisTransactionPath;
}

static getGenesisTransaction() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction;
}

static getGenesisTransactionHash() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.hash;
}

static getGenesisTransactionSignature() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.signature;
}

static getGenesisTransactionPublicKey() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.publicKey;
}

static getGenesisTransactionAmount() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.amount;
}

static getGenesisTransactionAddress() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.address;
}

static getGenesisTransactionOutput() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.output;
}

static getGenesisTransactionOutputAddress() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.output.address;
}

static getGenesisTransactionOutputAmount() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.output.amount;
}

static getGenesisTransactionTimestamp() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.timestamp;
}

static getGenesisTransactionInput() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input;
}

static getGenesisTransactionInputAddress() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input.address;
}

static getGenesisTransactionInputSignature() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input.signature;
}

static getGenesisTransactionInputPublicKey() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input.publicKey;
}
}

class MineGenesisTransaction extends createTransaction {
constructor({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
}: any) {
super({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
});
}

static mineGenesisTransaction({ genesisTransaction }: any) {
const {
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
} = genesisTransaction;
return new this({
timestamp,
input,
output,
hash,
signature,
publicKey,
amount,
address,
});
}

static saveGenesisTransaction({ genesisTransaction }: any) {
const genesisTransactionPath = path.join(
__dirname,
'transactionPool',
'genesisTransaction.json'
);
fs.writeFileSync(
genesisTransactionPath,
JSON.stringify(genesisTransaction)
);
}

static loadGenesisTransaction() {
const genesisTransactionPath = path.join(
__dirname,
'transactionPool',
'genesisTransaction.json'
);
const genesisTransaction = JSON.parse(
fs.readFileSync(genesisTransactionPath)
);
return genesisTransaction;
}

static getGenesisTransactionPath() {
const genesisTransactionPath = path.join(
__dirname,
'transactionPool',
'genesisTransaction.json'
);
return genesisTransactionPath;
}

static getGenesisTransaction() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction;
}

static getGenesisTransactionHash() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.hash;
}

static getGenesisTransactionSignature() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.signature;
}

static getGenesisTransactionPublicKey() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.publicKey;
}

static getGenesisTransactionAmount() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.amount;
}

static getGenesisTransactionAddress() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.address;
}

static getGenesisTransactionOutput() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.output;
}

static getGenesisTransactionOutputAddress() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.output.address;
}

static getGenesisTransactionOutputAmount() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.output.amount;
}

static getGenesisTransactionTimestamp() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction;
}

static getGenesisTransactionInput() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input;
}

static getGenesisTransactionInputAddress() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input.address;
}

static getGenesisTransactionInputSignature() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input.signature;
}

static getGenesisTransactionInputPublicKey() {
const genesisTransaction = this.loadGenesisTransaction();
return genesisTransaction.input.publicKey;
}
}

export { GenesisTransaction, MineGenesisTransaction };