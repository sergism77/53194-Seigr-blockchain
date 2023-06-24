'use strict';

interface OutputMap {
    [key: string]: number;
}

class OutputMap {
    outputMap: OutputMap;

    constructor({ recipient, amount, senderPublicKey }: { recipient: string, amount: number, senderPublicKey: string }) {
        this.outputMap = {};
        this.outputMap[recipient] = amount;
        this.outputMap[senderPublicKey] = amount;
    }
}

export = OutputMap;