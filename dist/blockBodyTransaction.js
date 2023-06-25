'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha256_1 = __importDefault(require("crypto-js/sha256"));
class BlockBodyTransaction {
    constructor(transaction) {
        this.transaction = transaction;
        this.id = (0, sha256_1.default)(this.transaction.toString()).toString();
    }
    getTransaction() {
        return this.transaction;
    }
    getId() {
        return this.id;
    }
    toString() {
        return `Block Body Transaction:
${this.transaction.toString()}
Id: ${this.id}`;
    }
}
exports.default = BlockBodyTransaction;
