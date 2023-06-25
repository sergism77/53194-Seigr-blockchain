'use strict';
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _BlockchainNodeListManagerClient_blockchainNodeList;
Object.defineProperty(exports, "__esModule", { value: true });
const blockchainNodeList_1 = __importDefault(require("./blockchainNodeList"));
class BlockchainNodeListManagerClient {
    constructor() {
        _BlockchainNodeListManagerClient_blockchainNodeList.set(this, new blockchainNodeList_1.default());
    }
    /**
     * Add a blockchain node to the blockchain node list.
     * @param {BlockchainNode} blockchainNode - The blockchain node to add.
     */
    addBlockchainNode(blockchainNode) {
        __classPrivateFieldGet(this, _BlockchainNodeListManagerClient_blockchainNodeList, "f").addBlockchainNode(blockchainNode);
    }
    /**
     * Get the blockchain node list.
     * @returns {BlockchainNodeList} - The blockchain node list.
     */
    getBlockchainNodeList() {
        return __classPrivateFieldGet(this, _BlockchainNodeListManagerClient_blockchainNodeList, "f");
    }
    /**
     * Get the string representation of the blockchain node list manager client.
     * @returns {string} - The string representation of the blockchain node list manager client.
     */
    toString() {
        return ('Blockchain Node List Manager Client: ' +
            'Blockchain Node List: ' +
            __classPrivateFieldGet(this, _BlockchainNodeListManagerClient_blockchainNodeList, "f").toString());
    }
}
_BlockchainNodeListManagerClient_blockchainNodeList = new WeakMap();
exports.default = BlockchainNodeListManagerClient;
