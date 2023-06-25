"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockchainNodeList_1 = __importDefault(require("./blockchainNodeList"));
const blockchainNodeListManager_1 = __importDefault(require("./blockchainNodeListManager"));
const blockchainNodeListManagerClient_1 = __importDefault(require("./blockchainNodeListManagerClient"));
const blockchainNodeListManagerServer_1 = __importDefault(require("./blockchainNodeListManagerServer"));
const SeigrBlockchain_1 = __importDefault(require("./SeigrBlockchain"));
const SeigrBlockchainTransaction_1 = __importDefault(require("./SeigrBlockchainTransaction"));
const blockBodyTransaction_1 = __importDefault(require("./blockBodyTransaction"));
const blockBody_1 = __importDefault(require("./blockBody"));
const blockHeader_1 = __importDefault(require("./blockHeader"));
const block_1 = __importDefault(require("./block"));
const blockchain_1 = __importDefault(require("./blockchain"));
const blockchainNode_1 = __importDefault(require("./blockchainNode"));
const transactionInput_1 = __importDefault(require("./transactionInput"));
const transactionOutput_1 = __importDefault(require("./transactionOutput"));
const elliptic_1 = require("elliptic");
const uuid_1 = require("uuid");
const sha256_1 = __importDefault(require("crypto-js/sha256"));
class Stake {
    constructor() {
        this.BlockchainNodeList = blockchainNodeList_1.default;
        this.BlockchainNodeListManager = blockchainNodeListManager_1.default;
        this.BlockchainNodeListManagerClient = blockchainNodeListManagerClient_1.default;
        this.BlockchainNodeListManagerServer = blockchainNodeListManagerServer_1.default;
        this.SeigrBlockchain = SeigrBlockchain_1.default;
        this.SeigrBlockchainTransaction = SeigrBlockchainTransaction_1.default;
        this.BlockBodyTransaction = blockBodyTransaction_1.default;
        this.BlockBody = blockBody_1.default;
        this.BlockHeader = blockHeader_1.default;
        this.Block = block_1.default;
        this.Blockchain = blockchain_1.default;
        this.BlockchainNode = blockchainNode_1.default;
        this.TransactionInput = transactionInput_1.default;
        this.TransactionOutput = transactionOutput_1.default;
        this.ec = new elliptic_1.ec('secp256k1');
        this.uuidv4 = uuid_1.v4;
        this.SHA256 = sha256_1.default;
    }
    toString() {
        return `Stake: 
Blockchain Node List: ${this.BlockchainNodeList}
Blockchain Node List Manager: ${this.BlockchainNodeListManager}
Blockchain Node List Manager Client: ${this.BlockchainNodeListManagerClient}
Blockchain Node List Manager Server: ${this.BlockchainNodeListManagerServer}
Seigr Blockchain: ${this.SeigrBlockchain}
Seigr Blockchain Transaction: ${this.SeigrBlockchainTransaction}
Block Body Transaction: ${this.BlockBodyTransaction}
Block Body: ${this.BlockBody}
Block Header: ${this.BlockHeader}
Block: ${this.Block}
Blockchain: ${this.Blockchain}
Blockchain Node: ${this.BlockchainNode}
Transaction Input: ${this.TransactionInput}
Transaction Output: ${this.TransactionOutput}
EC: ${this.ec}
UUIDv4: ${this.uuidv4}
SHA256: ${this.SHA256}`;
    }
}
exports.default = Stake;
