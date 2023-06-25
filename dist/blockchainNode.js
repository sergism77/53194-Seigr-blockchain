'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const assert = __importStar(require("assert"));
const SHA256 = __importStar(require("crypto-js/sha256"));
class BlockchainNode {
    constructor(blockchainNodeAddress) {
        this.blockchainNodeAddress = blockchainNodeAddress;
        this.id = SHA256(this.blockchainNodeAddress).toString();
    }
    getBlockchainNodeAddress() {
        return this.blockchainNodeAddress;
    }
    getId() {
        return this.id;
    }
    toString() {
        return ('Blockchain Node: \n' +
            'Blockchain Node Address: ' +
            this.blockchainNodeAddress +
            '\n' +
            'Id: ' +
            this.id +
            '\n');
    }
}
// Test suite for the BlockchainNode class
describe('BlockchainNode', () => {
    const nodeAddress = 'http://localhost:53194';
    const node = new BlockchainNode(nodeAddress);
    it('should initialize blockchainNodeAddress and id properties when a new object is created', () => {
        assert.equal(node.getBlockchainNodeAddress(), nodeAddress);
        assert.equal(node.getId(), SHA256(nodeAddress).toString());
    });
    it('should return the blockchainNodeAddress property when `getBlockchainNodeAddress` is called', () => {
        assert.equal(node.getBlockchainNodeAddress(), nodeAddress);
    });
    it('should return the id property when `getId` is called', () => {
        assert.equal(node.getId(), SHA256(nodeAddress).toString());
    });
    it('should return a string representation of the object when `toString` is called', () => {
        const expectedString = 'Blockchain Node: \n' +
            'Blockchain Node Address: ' +
            nodeAddress +
            '\n' +
            'Id: ' +
            SHA256(nodeAddress).toString() +
            '\n';
        assert.equal(node.toString(), expectedString);
    });
});
module.exports = BlockchainNode;
