'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = __importDefault(require("./blockchain"));
class createBlockchain extends blockchain_1.default {
    constructor(genesisBlock) {
        super();
        this.chain = [genesisBlock];
    }
}
exports.default = createBlockchain;
