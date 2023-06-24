import BlockchainNodeList from './blockchainNodeList';
import BlockchainNodeListManager from './blockchainNodeListManager';
import BlockchainNodeListManagerClient from './blockchainNodeListManagerClient';
import BlockchainNodeListManagerServer from './blockchainNodeListManagerServer';
import SeigrBlockchain from './SeigrBlockchain';
import SeigrBlockchainTransaction from './SeigrBlockchainTransaction';
import BlockBodyTransaction from './blockBodyTransaction';
import BlockBody from './blockBody';
import BlockHeader from './blockHeader';
import Block from './block';
import Blockchain from './blockchain';
import BlockchainNode from './blockchainNode';
import TransactionInput from './transactionInput';
import TransactionOutput from './transactionOutput';
import { ec as EC } from 'elliptic';
import { v4 as uuidv4 } from 'uuid';
import SHA256 from 'crypto-js/sha256';

class Stake {
    BlockchainNodeList: typeof BlockchainNodeList;
    BlockchainNodeListManager: typeof BlockchainNodeListManager;
    BlockchainNodeListManagerClient: typeof BlockchainNodeListManagerClient;
    BlockchainNodeListManagerServer: typeof BlockchainNodeListManagerServer;
    SeigrBlockchain: typeof SeigrBlockchain;
    SeigrBlockchainTransaction: typeof SeigrBlockchainTransaction;
    BlockBodyTransaction: typeof BlockBodyTransaction;
    BlockBody: typeof BlockBody;
    BlockHeader: typeof BlockHeader;
    Block: typeof Block;
    Blockchain: typeof Blockchain;
    BlockchainNode: typeof BlockchainNode;
    TransactionInput: typeof TransactionInput;
    TransactionOutput: typeof TransactionOutput;
    ec: EC;
    uuidv4: typeof uuidv4;
    SHA256: typeof SHA256;

    constructor() {
        this.BlockchainNodeList = BlockchainNodeList;
        this.BlockchainNodeListManager = BlockchainNodeListManager;
        this.BlockchainNodeListManagerClient = BlockchainNodeListManagerClient;
        this.BlockchainNodeListManagerServer = BlockchainNodeListManagerServer;
        this.SeigrBlockchain = SeigrBlockchain;
        this.SeigrBlockchainTransaction = SeigrBlockchainTransaction;
        this.BlockBodyTransaction = BlockBodyTransaction;
        this.BlockBody = BlockBody;
        this.BlockHeader = BlockHeader;
        this.Block = Block;
        this.Blockchain = Blockchain;
        this.BlockchainNode = BlockchainNode;
        this.TransactionInput = TransactionInput;
        this.TransactionOutput = TransactionOutput;
        this.ec = new EC('secp256k1');
        this.uuidv4 = uuidv4;
        this.SHA256 = SHA256;
    }

    toString() {
        return `Stake: 
Blockchain Node List: ${this.BlockchainNodeList}
Blockchain Node List Manager: ${this.BlockchainNodeListManager}
Blockchain Node List Manager Client: ${this.BlockchainNodeListManagerClient}
Blockchain Node List Manager Server: ${this.BlockchainNodeListManagerServer}
Seigr Blockchain: ${this.SeigrBlockchain}
Seigr Blockchain Transaction: ${this.SeigrBlockchainTransaction}
Block Body Transaction: ${this.BlockBodyTransaction}
Block Body: ${this.BlockBody}
Block Header: ${this.BlockHeader}
Block: ${this.Block}
Blockchain: ${this.Blockchain}
Blockchain Node: ${this.BlockchainNode}
Transaction Input: ${this.TransactionInput}
Transaction Output: ${this.TransactionOutput}
EC: ${this.ec}
UUIDv4: ${this.uuidv4}
SHA256: ${this.SHA256}`;
    }
}

export default Stake;