'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockchainNodeList_1 = __importDefault(require("./blockchainNodeList"));
class BlockchainNodeListManagerServer {
    constructor() {
        this.blockchainNodeList = new blockchainNodeList_1.default();
    }
    /**
     * Add a blockchain node to the blockchain node list.
     * @param {BlockchainNode} blockchainNode - The blockchain node to add.
     */
    addBlockchainNode(blockchainNode) {
        this.blockchainNodeList.addBlockchainNode(blockchainNode);
    }
    /**
     * Get the blockchain node list.
     * @returns {BlockchainNodeList} - The blockchain node list.
     */
    getBlockchainNodeList() {
        return this.blockchainNodeList;
    }
    /**
     * Get the string representation of the blockchain node list manager server.
     * @returns {string} - The string representation of the blockchain node list manager server.
     */
    toString() {
        return ('Blockchain Node List Manager Server: ' +
            'Blockchain Node List: ' +
            this.blockchainNodeList.toString());
    }
}
exports.default = BlockchainNodeListManagerServer;
