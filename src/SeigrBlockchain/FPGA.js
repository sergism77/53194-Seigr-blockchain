class FPGA {
    constructor() {
        this._name = "FPGA";
        this._type = "FPGA";
        this._hashrate = 0;
        this._power = 0;
        this._price = 0;
        this._hashratePerWatt = 0;
        this._hashratePerDollar = 0;
        this._hashratePerDollarPerWatt = 0;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get hashrate() {
        return this._hashrate;
    }

    get power() {
        return this._power;
    }

    get price() {
        return this._price;
    }

    get hashratePerWatt() {
        return this._hashratePerWatt;
    }

    get hashratePerDollar() {
        return this._hashratePerDollar;
    }

    get hashratePerDollarPerWatt() {
        return this._hashratePerDollarPerWatt;
    }

    set hashrate(hashrate) {
        this._hashrate = hashrate;
    }

    set power(power) {
        this._power = power;
    }

    set price(price) {
        this._price = price;
    }

    set hashratePerWatt(hashratePerWatt) {
        this._hashratePerWatt = hashratePerWatt;
    }

    set hashratePerDollar(hashratePerDollar) {
        this._hashratePerDollar = hashratePerDollar;
    }

    set hashratePerDollarPerWatt(hashratePerDollarPerWatt) {
        this._hashratePerDollarPerWatt = hashratePerDollarPerWatt;
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

        if (!FPGA.isValidChain(chain)) {
        console.error('The incoming chain must be valid');
        return;
        }

        console.log('replacing chain with', chain);
        this.chain = chain;
    }
}

class FPGAMap {
    constructor() {
        this._map = new Map();
    }

    get map() {
        return this._map;
    }

    set map(map) {
        this._map = map;
    }

    addFPGA(fpga) {
        this.map.set(fpga.name, fpga);
    }

    getFPGA(name) {
        return this.map.get(name);
    }

    getFPGAs() {
        return this.map;
    }

    getFPGANames() {
        return this.map.keys();
    }

    getFPGAsArray() {
        return Array.from(this.map.values());
    }

    removeFPGA(name) {
        this.map.delete(name);
    }

    clearFPGAs() {
        this.map.clear();
    }
}

module.exports = { FPGA, FPGAMap };