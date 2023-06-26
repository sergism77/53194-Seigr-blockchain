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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlockchainPool = exports.CreateBlockchainPool = exports.BlockchainPool = void 0;
const fs = __importStar(require("fs"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const blockchainDirectory = path.join(os.homedir(), 'Seigr', 'blockchain');
class BlockchainPool {
    constructor({ blockchain }) {
        this.blockchain = blockchain;
    }
    UpdateBlockchainPool() {
        try {
            const blockchainPool = this.blockchain.getBlocks();
            const blockchainPoolString = JSON.stringify(blockchainPool);
            fs.mkdirSync(blockchainDirectory, { recursive: true });
            fs.writeFileSync(path.join(blockchainDirectory, 'blockchain.json'), blockchainPoolString);
            return blockchainPool;
        }
        catch (error) {
            console.error('Error updating blockchain pool:', error);
            throw error;
        }
    }
}
exports.BlockchainPool = BlockchainPool;
class UpdateBlockchainPool {
    constructor({ blockchain }) {
        this.blockchain = blockchain;
    }
    UpdateBlockchainPool() {
        try {
            const blockchainPool = this.blockchain.getBlocks();
            const blockchainPoolString = JSON.stringify(blockchainPool);
            fs.mkdirSync(blockchainDirectory, { recursive: true });
            fs.writeFileSync(path.join(blockchainDirectory, 'blockchain.json'), blockchainPoolString);
            return blockchainPool;
        }
        catch (error) {
            console.error('Error updating blockchain pool:', error);
            throw error;
        }
    }
}
exports.UpdateBlockchainPool = UpdateBlockchainPool;
const CreateBlockchainPool = ({ blockchain }) => {
    return new BlockchainPool({ blockchain });
};
exports.CreateBlockchainPool = CreateBlockchainPool;
