'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blockchainNodeList_1 = __importDefault(require("./blockchainNodeList"));
const blockchainNodeListManagerClient_1 = __importDefault(require("./blockchainNodeListManagerClient"));
const blockchainNodeListManagerServer_1 = __importDefault(require("./blockchainNodeListManagerServer"));
class BlockchainNodeListManager {
    constructor() {
        this.blockchainNodeList = new blockchainNodeList_1.default();
        this.blockchainNodeListManagerClient = new blockchainNodeListManagerClient_1.default();
        this.blockchainNodeListManagerServer = new blockchainNodeListManagerServer_1.default();
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
     * Get the blockchain node list manager client.
     * @returns {BlockchainNodeListManagerClient} - The blockchain node list manager client.
     */
    getBlockchainNodeListManagerClient() {
        return this.blockchainNodeListManagerClient;
    }
    /**
     * Get the blockchain node list manager server.
     * @returns {BlockchainNodeListManagerServer} - The blockchain node list manager server.
     */
    getBlockchainNodeListManagerServer() {
        return this.blockchainNodeListManagerServer;
    }
    /**
     * Get the string representation of the blockchain node list manager.
     * @returns {string} - The string representation of the blockchain node list manager.
     */
    toString() {
        return ('Blockchain Node List Manager: \n' +
            'Blockchain Node List: ' +
            this.blockchainNodeList.toString() +
            '\n' +
            'Blockchain Node List Manager Client: ' +
            this.blockchainNodeListManagerClient.toString() +
            '\n' +
            'Blockchain Node List Manager Server: ' +
            this.blockchainNodeListManagerServer.toString());
    }
}
exports.default = BlockchainNodeListManager;
