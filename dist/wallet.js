'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const utils_1 = require("./utils");
const transaction_1 = __importDefault(require("./transaction"));
const elliptic_1 = __importDefault(require("elliptic"));
const walletUtils_1 = require("./walletUtils");
const crypto_1 = __importDefault(require("crypto"));
const bs58_1 = __importDefault(require("bs58"));
const secp256k1 = new elliptic_1.default.ec('secp256k1');
class Wallet {
    constructor(keyPair) {
        if (keyPair) {
            this.keyPair = keyPair;
        }
        else {
            this.keyPair = secp256k1.genKeyPair();
        }
        this.balance = config_1.STARTING_BALANCE;
        this.address = this.generateAddress(this.keyPair.getPublic().encode('hex'));
        this.createGenesisWallet = walletUtils_1.createGenesisWallet;
        this.createWallet = walletUtils_1.createWallet;
        this.saveWallet = walletUtils_1.saveWallet;
    }
    publicKey() {
        return this.keyPair.getPublic().encode('hex');
    }
    sign(data) {
        try {
            return this.keyPair.sign((0, utils_1.cryptoHash)(data));
        }
        catch (error) {
            throw new Error('Error signing the data');
        }
    }
    generateAddress(publicKey) {
        const publicKeyHash = crypto_1.default.createHash('sha256').update(publicKey).digest();
        const addressBytes = Buffer.concat([Buffer.from([0x53, 0x19, 0x4e]), publicKeyHash]);
        const checksum = crypto_1.default.createHash('sha256').update(addressBytes).digest();
        const addressWithChecksum = Buffer.concat([addressBytes, checksum.subarray(0, 4)]);
        const address = bs58_1.default.encode(addressWithChecksum);
        return address;
    }
    createTransaction({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Wallet.calculateBalance({
                chain,
                address: this.address,
            });
        }
        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }
        return new transaction_1.default({ senderWallet: this, recipient, amount });
    }
    static verifyTransaction({ transaction }) {
        const { input: { address, signature }, outputMap, } = transaction;
        const outputTotal = Object.values(outputMap).reduce((total, outputAmount) => total + outputAmount);
        if (outputTotal !== transaction.input.amount) {
            console.error(`Invalid transaction from ${address}`);
            return false;
        }
        if (!(0, utils_1.verifySignature)({ publicKey: address, data: outputMap, signature })) {
            console.error(`Invalid signature from ${address}`);
            return false;
        }
        return true;
    }
    static calculateBalance({ chain, address }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;
        for (let i = chain.length - 1; i > 0; i--) {
            const block = chain[i];
            for (let transaction of block.data) {
                if (transaction.input.address === address) {
                    hasConductedTransaction = true;
                }
                const addressOutput = transaction.outputMap[address];
                if (addressOutput) {
                    outputsTotal = outputsTotal + addressOutput;
                }
            }
            if (hasConductedTransaction) {
                break;
            }
        }
        return hasConductedTransaction
            ? outputsTotal
            : config_1.STARTING_BALANCE + outputsTotal;
    }
    static blockchainWallet() {
        const blockchainWallet = new this();
        blockchainWallet.address = 'blockchain-wallet';
        return blockchainWallet;
    }
}
exports.default = Wallet;
