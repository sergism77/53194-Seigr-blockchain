"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineGenesisTransactionPoolRewardAddress = exports.MineGenesisTransactionPoolRewardAmount = exports.MineGenesisTransactionPoolRewardPublicKey = exports.MineGenesisTransactionPoolRewardSignature = exports.MineGenesisTransactionPoolRewardHash = exports.MineGenesisTransactionPoolRewardOutput = exports.MineGenesisTransactionPoolRewardInput = exports.MineGenesisTransactionPoolRewardTransactionHash = exports.MineGenesisTransactionPoolRewardTransactionOutput = exports.MineGenesisTransactionPoolRewardTransactionAddress = exports.MineGenesisTransactionPoolRewardTransactionInput = exports.MineGenesisTransactionPoolRewardTimestamp = exports.MineGenesisTransactionPoolRewardTransactionSignature = exports.MineGenesisTransactionPoolRewardTransaction = exports.MineGenesisTransactionPoolRewardTransactionAmount = exports.MineGenesisTransactionPoolReward = exports.MineGenesisTransactionPool = void 0;
const genesisTransaction_1 = __importDefault(require("./genesisTransaction"));
class BaseTransaction {
    constructor({ timestamp, input, output, hash, signature, publicKey, amount, address, }) {
        this.timestamp = timestamp;
        this.input = input;
        this.output = output;
        this.hash = hash;
        this.signature = signature;
        this.publicKey = publicKey;
        this.amount = amount;
        this.address = address;
    }
    static genesis() {
        return new this(genesisTransaction_1.default);
    }
    static mineGenesisTransaction() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static createTransaction({ timestamp, input, output, hash, signature, publicKey, amount, address, }) {
        return new this({
            timestamp,
            input,
            output,
            hash,
            signature,
            publicKey,
            amount,
            address,
        });
    }
}
class MineGenesisTransactionPool extends BaseTransaction {
}
exports.MineGenesisTransactionPool = MineGenesisTransactionPool;
class MineGenesisTransactionPoolRewardTimestamp extends BaseTransaction {
    static mineGenesisTransactionPoolRewardTimestamp() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTimestampInput() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTimestampInputOutput() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTimestampInputOutputHash() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTimestampInputOutputHashSignature() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
}
exports.MineGenesisTransactionPoolRewardTimestamp = MineGenesisTransactionPoolRewardTimestamp;
class MineGenesisTransaction extends BaseTransaction {
}
class MineGenesisTransactionPoolRewardTransaction extends BaseTransaction {
    static mineGenesisTransactionPoolRewardTransaction() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTransactionTimestamp() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTransactionTimestampInput() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTransactionTimestampInputOutput() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTransactionTimestampInputOutputHash() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
    static mineGenesisTransactionPoolRewardTransactionTimestampInputOutputHashSignature() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
}
exports.MineGenesisTransactionPoolRewardTransaction = MineGenesisTransactionPoolRewardTransaction;
class MineGenesisTransactionPoolReward extends BaseTransaction {
}
exports.MineGenesisTransactionPoolReward = MineGenesisTransactionPoolReward;
class MineGenesisTransactionPoolRewardTransactionInput extends BaseTransaction {
    static mineGenesisTransactionPoolRewardTransactionInput() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
}
exports.MineGenesisTransactionPoolRewardTransactionInput = MineGenesisTransactionPoolRewardTransactionInput;
class MineGenesisTransactionPoolRewardTransactionOutput extends BaseTransaction {
    static mineGenesisTransactionPoolRewardTransactionOutput() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
}
exports.MineGenesisTransactionPoolRewardTransactionOutput = MineGenesisTransactionPoolRewardTransactionOutput;
class MineGenesisTransactionPoolRewardTransactionHash extends BaseTransaction {
    static mineGenesisTransactionPoolRewardTransactionHash() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
}
exports.MineGenesisTransactionPoolRewardTransactionHash = MineGenesisTransactionPoolRewardTransactionHash;
class MineGenesisTransactionPoolRewardTransactionSignature extends BaseTransaction {
    static mineGenesisTransactionPoolRewardTransactionSignature() {
        return new this({
            timestamp: undefined,
            input: undefined,
            output: undefined,
            hash: undefined,
            signature: undefined,
            publicKey: undefined,
            amount: undefined,
            address: undefined,
        });
    }
}
exports.MineGenesisTransactionPoolRewardTransactionSignature = MineGenesisTransactionPoolRewardTransactionSignature;
class MineGenesisTransactionPoolRewardInput extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardInput = MineGenesisTransactionPoolRewardInput;
class MineGenesisTransactionPoolRewardOutput extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardOutput = MineGenesisTransactionPoolRewardOutput;
class MineGenesisTransactionPoolRewardHash extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardHash = MineGenesisTransactionPoolRewardHash;
class MineGenesisTransactionPoolRewardSignature extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardSignature = MineGenesisTransactionPoolRewardSignature;
class MineGenesisTransactionPoolRewardPublicKey extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardPublicKey = MineGenesisTransactionPoolRewardPublicKey;
class MineGenesisTransactionPoolRewardAmount extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardAmount = MineGenesisTransactionPoolRewardAmount;
class MineGenesisTransactionPoolRewardTransactionAmount extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardTransactionAmount = MineGenesisTransactionPoolRewardTransactionAmount;
class MineGenesisTransactionPoolRewardAddress extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardAddress = MineGenesisTransactionPoolRewardAddress;
class MineGenesisTransactionPoolRewardTransactionPublicKey extends BaseTransaction {
}
class MineGenesisTransactionPoolRewardTransactionAddress extends BaseTransaction {
}
exports.MineGenesisTransactionPoolRewardTransactionAddress = MineGenesisTransactionPoolRewardTransactionAddress;
