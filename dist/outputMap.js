'use strict';
class OutputMap {
    constructor({ recipient, amount, senderPublicKey }) {
        this.outputMap = {};
        this.outputMap[recipient] = amount;
        this.outputMap[senderPublicKey] = amount;
    }
}
module.exports = OutputMap;
