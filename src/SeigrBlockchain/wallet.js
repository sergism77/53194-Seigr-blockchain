
const { verifySignature } = require('./utils');
const { REWARD_INPUT, MINING_REWARD } = require('./config');
const { cryptoHash } = require('./utils');
const Transaction = require('./transaction');
const Blockchain = require('./blockchain');
const TransactionPool = require('./transaction');
const TransactionPoolMap = require('./transactionMap');
const TransactionMiner = require('./transaction');
const TransactionMinerMap = require('./transactionMap');
const SEIGToken = require('./SEIGToken');
const SEIGTokenMap = require('./SEIGTokenMap');
const SEIGTokenPool = require('./SEIGToken');
const SEIGTokenPoolMap = require('./SEIGTokenMap');
const SEIGTokenMiner = require('./SEIGToken');
const SEIGTokenMinerMap = require('./SEIGTokenMap');
const MemoryStorage = require('./memoryStorage');
const MemoryStorageMap = require('./memoryStorage');
const MemoryStoragePool = require('./memoryStorage');
const MemoryStoragePoolMap = require('./memoryStorageMap');
const MemoryStorageMiner = require('./memoryStorage');
const MemoryStorageMinerMap = require('./memoryStorageMap');
const TransactionMap = require('./transactionMap');
const CPU = require('./CPU');
const GPU = require('./GPU');
const CPUMap = require('./CPU');
const GPUMap = require('./GPU');
const CPUPool = require('./CPU');
const GPUPool = require('./GPU');
const CPUMiner = require('./CPU');
const GPUMiner = require('./GPU');
const CPUWallet = require('./CPUWallet');
const CPUWalletMap = require('./CPUWallet');
const GPUWallet = require('./GPUWallet');
const GPUWalletMap = require('./GPUWallet');
const CPUWalletPool = require('./CPUWallet');
const GPUWalletPool = require('./GPUWallet');
const CPUWalletMiner = require('./CPUWallet');
const GPUWalletMiner = require('./GPUWallet');
const CPUMemoryStorage = require('./CPUMemoryStorage');
const GPUMemoryStorage = require('./GPUMemoryStorage');
const CPUMemoryStorageMap = require('./CPUMemoryStorage');
const GPUMemoryStorageMap = require('./GPUMemoryStorage');



class Wallet {
    constructor() {
        this.balance = Blockchain.getBalance();
        this.keyPair = SEIGToken.keyPair();
        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    sign(data) {
        return this.keyPair.sign(SEIGToken.hash(data));
    }

    createTransaction({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new Transaction({ senderWallet: this, recipient, amount });
    }

    createTransactionMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new TransactionMap({ senderWallet: this, recipient, amount });
    }

    createTransactionPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new TransactionPool({ senderWallet: this, recipient, amount });
    }

    createTransactionPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new TransactionPoolMap({ senderWallet: this, recipient, amount });
    }

    createTransactionMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new TransactionMiner({ senderWallet: this, recipient, amount });
    }

    createTransactionMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new TransactionMinerMap({ senderWallet: this, recipient, amount });
    }

    createSEIGToken({ recipient, amount, chain }) {
        if (chain) {
            this.balance = SEIGToken.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new SEIGToken({ senderWallet: this, recipient, amount });
    }

    createSEIGTokenMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = SEIGToken.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new SEIGTokenMap({ senderWallet: this, recipient, amount });
    }

    createSEIGTokenPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = SEIGToken.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new SEIGTokenPool({ senderWallet: this, recipient, amount });
    }

    createSEIGTokenPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = SEIGToken.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new SEIGTokenPoolMap({ senderWallet: this, recipient, amount });
    }

    createSEIGTokenMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = SEIGToken.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new SEIGTokenMiner({ senderWallet: this, recipient, amount });
    }

    createSEIGTokenMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = SEIGToken.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new SEIGTokenMinerMap({ senderWallet: this, recipient, amount });
    }

    createMemoryStorage({ recipient, amount, chain }) {
        if (chain) {
            this.balance = MemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MemoryStorage({ senderWallet: this, recipient, amount });
    }

    createMemoryStorageMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = MemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MemoryStorageMap({ senderWallet: this, recipient, amount });
    }

    createMemoryStoragePool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = MemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MemoryStoragePool({ senderWallet: this, recipient, amount });
    }

    createMemoryStoragePoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = MemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MemoryStoragePoolMap({ senderWallet: this, recipient, amount });
    }

    createMemoryStorageMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = MemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MemoryStorageMiner({ senderWallet: this, recipient, amount });
    }

    createMemoryStorageMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = MemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MemoryStorageMinerMap({ senderWallet: this, recipient, amount });
    }

    createCPU({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPU({ senderWallet: this, recipient, amount });
    }

    createCPUMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUMap({ senderWallet: this, recipient, amount });
    }

    createCPUPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUPool({ senderWallet: this, recipient, amount });
    }

    createCPUPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUPoolMap({ senderWallet: this, recipient, amount });
    }

    createCPUWalletPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUWalletPool({ senderWallet: this, recipient, amount });
    }

    createCPUWalletPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUWalletPoolMap({ senderWallet: this, recipient, amount });
    }

    createCPUWalletMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUWalletMiner({ senderWallet: this, recipient, amount });
    }

    createCPUWalletMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUWalletMinerMap({ senderWallet: this, recipient, amount });
    } 

    createCPUMemoryStorage({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUMemoryStorage({ senderWallet: this, recipient, amount });
    }

    createCPUMemoryStorageMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

         return new CPUMemoryStorageMap({ senderWallet: this, recipient, amount });
    }



    createCPUMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUMiner({ senderWallet: this, recipient, amount });
    }

    createCPUMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUMinerMap({ senderWallet: this, recipient, amount });
    }

    createGPU({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPU({ senderWallet: this, recipient, amount });
    }

    createGPUMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMap({ senderWallet: this, recipient, amount });
    }

    createGPUWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUWallet({ senderWallet: this, recipient, amount });
    }

    createGPUWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUWalletMap({ senderWallet: this, recipient, amount });
    }
 

    createGPUPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUPool({ senderWallet: this, recipient, amount });
    }

    createGPUPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUPoolMap({ senderWallet: this, recipient, amount });
    }

    createGPUMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMiner({ senderWallet: this, recipient, amount });
    }

    createGPUMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMinerMap({ senderWallet: this, recipient, amount });
    }

    createFPGA({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGA.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGA({ senderWallet: this, recipient, amount });
    }

    createFPGAMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGA.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAMap({ senderWallet: this, recipient, amount });
    }

    createFPGAPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGA.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAPool({ senderWallet: this, recipient, amount });
    }

    createFPGAPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGA.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAPoolMap({ senderWallet: this, recipient, amount });
    }

    createFPGAMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGA.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAMiner({ senderWallet: this, recipient, amount });
    }

    createFPGAMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGA.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAMinerMap({ senderWallet: this, recipient, amount });
    }

    

    createTransaction({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new Transaction({ senderWallet: this, recipient, amount });
    }

    createTransactionMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new TransactionMap({ senderWallet: this, recipient, amount });
    }

    createMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new Miner({ senderWallet: this, recipient, amount });
    }

    createMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new MinerMap({ senderWallet: this, recipient, amount });
    }

    createPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new Pool({ senderWallet: this, recipient, amount });
    }

    createPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new PoolMap({ senderWallet: this, recipient, amount });
    }
    
    createWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new Wallet({ senderWallet: this, recipient, amount });
    }

    createWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = Blockchain.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new WalletMap({ senderWallet: this, recipient, amount });
    }

    createCPUWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUWallet({ senderWallet: this, recipient, amount });
    }

    createCPUWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPU.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUWalletMap({ senderWallet: this, recipient, amount });
    }

    createCPUPoolWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPUPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUPoolWallet({ senderWallet: this, recipient, amount });
    }

    createCPUPoolWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPUPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUPoolWalletMap({ senderWallet: this, recipient, amount });
    }

    createCPUMinerWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPUMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUMinerWallet({ senderWallet: this, recipient, amount });
    }

    createCPUMinerWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = CPUMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new CPUMinerWalletMap({ senderWallet: this, recipient, amount });
    }

    createGPUMinerWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMinerWallet({ senderWallet: this, recipient, amount });
    }

    createGPUMinerWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMinerWalletMap({ senderWallet: this, recipient, amount });
    }

    createGPUWalletPool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUWalletPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUWalletPool({ senderWallet: this, recipient, amount });
    }

    createGPUWalletPoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUWalletPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUWalletPoolMap({ senderWallet: this, recipient, amount });
    }

    createGPUWalletMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUWalletMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUWalletMiner({ senderWallet: this, recipient, amount });
    }

    createGPUWalletMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUWalletMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUWalletMinerMap({ senderWallet: this, recipient, amount });
    }

    createGPUMemoryStorage({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMemoryStorage({ senderWallet: this, recipient, amount });
    }

    createGPUMemoryStorageMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMemoryStorage.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMemoryStorageMap({ senderWallet: this, recipient, amount });
    }

    createGPUMemoryStorageMiner({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMemoryStorageMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMemoryStorageMiner({ senderWallet: this, recipient, amount });
    }

    createGPUMemoryStorageMinerMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMemoryStorageMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMemoryStorageMinerMap({ senderWallet: this, recipient, amount });
    }

    createGPUMemoryStoragePool({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMemoryStoragePool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMemoryStoragePool({ senderWallet: this, recipient, amount });
    }

    createGPUMemoryStoragePoolMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMemoryStoragePool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMemoryStoragePoolMap({ senderWallet: this, recipient, amount });
    }



    createGPUPoolWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUPoolWallet({ senderWallet: this, recipient, amount });
    }

    createGPUPoolWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUPoolWalletMap({ senderWallet: this, recipient, amount });
    }

    createGPUMinerWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMinerWallet({ senderWallet: this, recipient, amount });
    }

    createGPUMinerWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = GPUMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new GPUMinerWalletMap({ senderWallet: this, recipient, amount });
    }

    createFPGAPoolWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGAPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAPoolWallet({ senderWallet: this, recipient, amount });
    }

    createFPGAPoolWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGAPool.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAPoolWalletMap({ senderWallet: this, recipient, amount });
    }

    createFPGAMinerWallet({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGAMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAMinerWallet({ senderWallet: this, recipient, amount });
    }

    createFPGAMinerWalletMap({ recipient, amount, chain }) {
        if (chain) {
            this.balance = FPGAMiner.getBalance({ chain: chain.blocks });
        }

        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new FPGAMinerWalletMap({ senderWallet: this, recipient, amount });
    }


}

module.exports = Wallet;