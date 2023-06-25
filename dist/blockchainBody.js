'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha256_1 = __importDefault(require("crypto-js/sha256"));
const elliptic_1 = __importDefault(require("elliptic"));
const uuid_1 = require("uuid");
const transactionInput_1 = __importDefault(require("./transactionInput"));
const transactionOutput_1 = __importDefault(require("./transactionOutput"));
const transaction_1 = __importDefault(require("./transaction"));
const blockBodyTransaction_1 = __importDefault(require("./blockBodyTransaction"));
class BlockchainBody {
    constructor() {
        this.SHA256 = sha256_1.default;
        this.ec = new elliptic_1.default('secp256k1');
        this.uuidv4 = uuid_1.v4;
        this.TransactionInput = transactionInput_1.default;
        this.TransactionOutput = transactionOutput_1.default;
        this.SeigrBlockchainTransaction = transaction_1.default;
        this.BlockBodyTransaction = blockBodyTransaction_1.default;
    }
    toString() {
        return ('Blockchain Body: \n' +
            'SHA256: ' +
            this.SHA256 +
            '\n' +
            'EC: ' +
            this.ec +
            '\n' +
            'UUIDv4: ' +
            this.uuidv4 +
            '\n' +
            'Transaction Input: ' +
            this.TransactionInput +
            '\n' +
            'Transaction Output: ' +
            this.TransactionOutput +
            '\n' +
            'Seigr Blockchain Transaction: ' +
            this.SeigrBlockchainTransaction +
            '\n' +
            'Block Body Transaction: ' +
            this.BlockBodyTransaction +
            '\n');
    }
}
exports.default = BlockchainBody;
