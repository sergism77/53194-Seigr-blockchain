'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chaindata_1 = __importDefault(require("./db/chaindata"));
const db_1 = __importDefault(require("./db/db"));
class Storage {
    constructor() {
        this.chaindata = new chaindata_1.default();
        this.db = new db_1.default();
    }
    addBlock(block) {
        this.chaindata.addBlockToChaindata(block);
        this.db.addBlock(block);
    }
    getBlockByHash(hash) {
        return this.db.getBlockByHash(hash);
    }
    getBlockByHeight(height) {
        return this.db.getBlock(height);
    }
    getBlocksByAddress(address) {
        return this.db.getBlockByWalletAddress(address);
    }
    getBlocksByAddressAndHeight(address, height) {
        return this.db.getBlockByAddressAndHeight(address, height);
    }
    getBlockByAddressAndHash(address, hash) {
        return this.db.getBlockByAddressAndHash(address, hash);
    }
    getBlockByHeightAndHash(height, hash) {
        return this.db.getBlockByHeightAndHash(height, hash);
    }
    getBlockByAddressAndHeightAndHash(address, height, hash) {
        return this.db.getBlockByAddressAndHeightAndHash(address, height, hash);
    }
    getChaindataLength() {
        return this.chaindata.getChaindataLength();
    }
}
exports.default = Storage;
