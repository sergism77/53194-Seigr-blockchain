const transaction = require("./transaction");

const createGenesisTransaction = () => {
    const genesisTransaction = new transaction();
    genesisTransaction.id = "genesisTransactionId";
    genesisTransaction.input = {
        timestamp: Date.now(),
        address: "genesisAddress",
        amount: 0,
        signature: "genesisSignature"
    };
    genesisTransaction.outputMap = {
        genesisAddress: 0
    };

    return genesisTransaction;
}

module.exports = createGenesisTransaction;