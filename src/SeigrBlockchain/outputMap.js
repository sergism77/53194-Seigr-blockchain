class outputMap {
    constructor({ recipient, amount, senderPublicKey }) {
        this.outputMap = {};
        this.outputMap[recipient] = amount;
        this.outputMap[senderPublicKey] = amount;
    }
}

module.exports = outputMap;