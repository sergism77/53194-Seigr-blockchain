const Block = require('./block');
const cryptoHash = require('./utils');
class GPU {
    constructor() {
        this.name = "GPU";
        this.hashRate = 0;
        this.power = 0;
        this.price = 0;
        this.hashRatePerWatt = 0;
        this.hashRatePerDollar = 0;
        this.hashRatePerDollarPerWatt = 0;
    }

    mineBlock({ data }) {
        const newBlock = Block.mineBlock({
        lastBlock: this.chain[this.chain.length - 1],
        data
        });

        this.chain.push(newBlock);
    }

    mineTransaction({ data }) {
        const newTransaction = Transaction.mineTransaction({
        lastTransaction: this.chain[this.chain.length - 1],
        data
        });

        this.chain.push(newTransaction);
    }

    static isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
        return false;
        }

        for (let i = 1; i < chain.length; i++) {
        const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];

        const actualLastHash = chain[i - 1].hash;

        if (lastHash !== actualLastHash) return false;

        const validatedHash = cryptoHash(
            timestamp,
            lastHash,
            data,
            nonce,
            difficulty
        );

        if (hash !== validatedHash) return false;
        }

        return true;
    }

    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
        console.error('The incoming chain must be longer');
        return;
        }

        if (!Blockchain.isValidChain(chain)) {
        console.error('The incoming chain must be valid');
        return;
        }

        console.log('replacing chain with', chain);
        this.chain = chain;
    }

    validTransactionData({ chain }) {
        for (let i = 1; i < chain.length; i++) {
        const block = chain[i];
        let rewardTransactionCount = 0;
    }

    if (transaction.input.address === REWARD_INPUT.address) {
        rewardTransactionCount += 1;

        if (rewardTransactionCount > 1) {
        console.error('Miner rewards exceed limit');
        return false;
        }

        if (Object.values(transaction.outputMap)[0] !== MINING_REWARD) {
        console.error('Miner reward amount is invalid');
        return false;
        }
    } else {
        if (!Transaction.validTransaction(transaction)) {
        console.error('Invalid transaction');
        return false;
        }

        const trueBalance = Wallet.calculateBalance({
        chain: this.chain,
        address: transaction.input.address
        });

        if (transaction.input.amount !== trueBalance) {
        console.error('Invalid input amount');
        return false;
        }

        if (transactionSet.has(transaction)) {
        console.error(
            'An identical transaction appears more than once in the block'
        );
        return false;
        } else {
        transactionSet.add(transaction);
        }

        if (hasConductedTransaction) {
        console.error(
            'An address cannot conduct more than one transaction per block'
        );
        return false;
        }
    }

    return true;
    }

    static calculateBalance({ chain, address }) {
        let hasConductedTransaction = false;
        let outputsTotal = 0;

        for (let i = chain.length - 1; i > 0; i--) {
        const block = chain[i];

        for (let transaction of block.data) {
            if (transaction.input.address === address) {
            hasConductedTransaction = true;
            }

            const addressOutput = transaction.outputMap[address];

            if (addressOutput) {
            outputsTotal = outputsTotal + addressOutput;
            }
        }

        if (hasConductedTransaction) {
            break;
        }
        }

        return hasConductedTransaction

        ? outputsTotal
        : STARTING_BALANCE + outputsTotal;
    }

    static rewardTransaction({ minerWallet }) {
        return new this({
        input: REWARD_INPUT,
        outputMap: { [minerWallet.address]: MINING_REWARD }
        });
    }

    updateTransaction({ senderWallet, recipient, amount }) {
        if (amount > this.outputMap[senderWallet.address]) {
        throw new Error('Amount exceeds balance');
        }

        if (!this.outputMap[recipient]) {
        this.outputMap[recipient] = amount;
        } else {
        this.outputMap[recipient] = this.outputMap[recipient] + amount;
        }

        this.outputMap[senderWallet.address] = this.outputMap[senderWallet.address] - amount;

        this.input = this.createInput({ senderWallet, outputMap: this.outputMap });
    }

    static validTransaction(transaction) {
        const {
        input: { address, amount, signature },
        outputMap
        } = transaction;

        const outputTotal = Object.values(outputMap).reduce(
        (total, outputAmount) => total + outputAmount
        );

        if (amount !== outputTotal) {
        console.error(`Invalid transaction from ${address}`);
        return false;
        }
        
        if (!verifySignature({ publicKey: address, data: outputMap, signature })) {
        console.error(`Invalid signature from ${address}`);
        return false;
        }

        return true;
    }


}

class GPUMap {
    constructor() {
        this.map = new Map();
    }

    addGPU({ gpu }) {
        this.map.set(gpu.name, gpu);
    }

    getGPU({ name }) {
        return this.map.get(name);
    }

    clear() {
        this.map.clear();
    }
}

module.exports = { GPU, GPUMap };