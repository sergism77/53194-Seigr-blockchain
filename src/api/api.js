import axios from 'axios';

const API_URL = process.env.API_URL; // Assuming API_URL is set as an environment variable

export default class API {
static getWalletUnspentTransactionOutput(txid, index) {
    return API.requestAPI(`${API_URL}/wallet/unspent-transaction-output/${txid}/${index}`)
        .then(response => {
            const parsedResponse = JSON.parse(response);
            return {
                amount: parsedResponse.amount,
                address: parsedResponse.address,
                scriptPubKey: parsedResponse.scriptPubKey,
                redeemScript: parsedResponse.redeemScript,
                witnessScript: parsedResponse.witnessScript,
                isSpent: parsedResponse.isSpent,
                isConfirmed: parsedResponse.isConfirmed,
                confirmations: parsedResponse.confirmations,
                blockHeight: parsedResponse.blockHeight,
                blockHash: parsedResponse.blockHash,
                blockTime: parsedResponse.blockTime,
                transaction: parsedResponse.transaction,
                transactionId: parsedResponse.transactionId
            };
        });
    }
}
