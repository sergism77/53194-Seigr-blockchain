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

    static getWalletUnspentTransactionOutputs(address) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByToken(address, token) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${token}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTokenAndType(address, token, type) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${token}/${type}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByType(address, type) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndToken(address, type, token) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmount(address, type, token, amount) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCount(address, type, token, amount, count) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempool(address, type, token, amount, count, includeMempool) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpent(address, type, token, amount, count, includeMempool, includeSpent) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmed(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmedAndIncludeWatchOnly(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed, includeWatchOnly) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}/${includeWatchOnly}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmedAndIncludeWatchOnlyAndIncludeAllTokens(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed, includeWatchOnly, includeAllTokens) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}/${includeWatchOnly}/${includeAllTokens}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmedAndIncludeWatchOnlyAndIncludeAllTokensAndIncludePrivate(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed, includeWatchOnly, includeAllTokens, includePrivate) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}/${includeWatchOnly}/${includeAllTokens}/${includePrivate}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmedAndIncludeWatchOnlyAndIncludeAllTokensAndIncludePrivateAndIncludeOutputScript(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed, includeWatchOnly, includeAllTokens, includePrivate, includeOutputScript) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}/${includeWatchOnly}/${includeAllTokens}/${includePrivate}/${includeOutputScript}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmedAndIncludeWatchOnlyAndIncludeAllTokensAndIncludePrivateAndIncludeOutputScriptAndIncludeTokenMetadata(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed, includeWatchOnly, includeAllTokens, includePrivate, includeOutputScript, includeTokenMetadata) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}/${includeWatchOnly}/${includeAllTokens}/${includePrivate}/${includeOutputScript}/${includeTokenMetadata}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }

    static getWalletUnspentTransactionOutputsByTypeAndTokenAndAmountAndCountAndIncludeMempoolAndIncludeSpentAndIncludeUnconfirmedAndIncludeWatchOnlyAndIncludeAllTokensAndIncludePrivateAndIncludeOutputScriptAndIncludeTokenMetadataAndIncludeTokenMetadataOfIssuance(address, type, token, amount, count, includeMempool, includeSpent, includeUnconfirmed, includeWatchOnly, includeAllTokens, includePrivate, includeOutputScript, includeTokenMetadata, includeTokenMetadataOfIssuance) {
        return API.requestAPI(`${API_URL}/wallet/unspent-transaction-outputs/${address}/${type}/${token}/${amount}/${count}/${includeMempool}/${includeSpent}/${includeUnconfirmed}/${includeWatchOnly}/${includeAllTokens}/${includePrivate}/${includeOutputScript}/${includeTokenMetadata}/${includeTokenMetadataOfIssuance}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentTransactionOutput => {
                    return {
                        amount: unspentTransactionOutput.amount,
                        address: unspentTransactionOutput.address,
                        scriptPubKey: unspentTransactionOutput.scriptPubKey,
                        redeemScript: unspentTransactionOutput.redeemScript,
                        witnessScript: unspentTransactionOutput.witnessScript,
                        isSpent: unspentTransactionOutput.isSpent,
                        isConfirmed: unspentTransactionOutput.isConfirmed,
                        confirmations: unspentTransactionOutput.confirmations,
                        blockHeight: unspentTransactionOutput.blockHeight,
                        blockHash: unspentTransactionOutput.blockHash,
                        blockTime: unspentTransactionOutput.blockTime,
                        transaction: unspentTransactionOutput.transaction,
                        transactionId: unspentTransactionOutput.transactionId
                    };
                });
            });
    }




    static getBlockByHeight(height) {
        return API.requestAPI(`${API_URL}/block/${height}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    hash: parsedResponse.hash,
                    confirmations: parsedResponse.confirmations,
                    size: parsedResponse.size,
                    strippedSize: parsedResponse.strippedSize,
                    weight: parsedResponse.weight,
                    height: parsedResponse.height,
                    version: parsedResponse.version,
                    versionHex: parsedResponse.versionHex,
                    merkleRoot: parsedResponse.merkleRoot,
                    transactions: parsedResponse.transactions,
                    time: parsedResponse.time,
                    medianTime: parsedResponse.medianTime,
                    nonce: parsedResponse.nonce,
                    bits: parsedResponse.bits,
                    difficulty: parsedResponse.difficulty,
                    chainWork: parsedResponse.chainWork,
                    previousBlockHash: parsedResponse.previousBlockHash,
                    nextBlockHash: parsedResponse.nextBlockHash
                };
            });
    }

    static getBlockByHash(hash) {
        return API.requestAPI(`${API_URL}/block/${hash}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    hash: parsedResponse.hash,
                    confirmations: parsedResponse.confirmations,
                    size: parsedResponse.size,
                    strippedSize: parsedResponse.strippedSize,
                    weight: parsedResponse.weight,
                    height: parsedResponse.height,
                    version: parsedResponse.version,
                    versionHex: parsedResponse.versionHex,
                    merkleRoot: parsedResponse.merkleRoot,
                    transactions: parsedResponse.transactions,
                    time: parsedResponse.time,
                    medianTime: parsedResponse.medianTime,
                    nonce: parsedResponse.nonce,
                    bits: parsedResponse.bits,
                    difficulty: parsedResponse.difficulty,
                    chainWork: parsedResponse.chainWork,
                    previousBlockHash: parsedResponse.previousBlockHash,
                    nextBlockHash: parsedResponse.nextBlockHash
                };
            });
    }

    static getBlockHeaderByHeight(height) {
        return API.requestAPI(`${API_URL}/block-header/${height}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    hash: parsedResponse.hash,
                    confirmations: parsedResponse.confirmations,
                    height: parsedResponse.height,
                    version: parsedResponse.version,
                    versionHex: parsedResponse.versionHex,
                    merkleRoot: parsedResponse.merkleRoot,
                    time: parsedResponse.time,
                    medianTime: parsedResponse.medianTime,
                    nonce: parsedResponse.nonce,
                    bits: parsedResponse.bits,
                    difficulty: parsedResponse.difficulty,
                    chainWork: parsedResponse.chainWork,
                    previousBlockHash: parsedResponse.previousBlockHash,
                    nextBlockHash: parsedResponse.nextBlockHash
                };
            });
    }

    static getBlockHeaderByHash(hash) {
        return API.requestAPI(`${API_URL}/block-header/${hash}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    hash: parsedResponse.hash,
                    confirmations: parsedResponse.confirmations,
                    height: parsedResponse.height,
                    version: parsedResponse.version,
                    versionHex: parsedResponse.versionHex,
                    merkleRoot: parsedResponse.merkleRoot,
                    time: parsedResponse.time,
                    medianTime: parsedResponse.medianTime,
                    nonce: parsedResponse.nonce,
                    bits: parsedResponse.bits,
                    difficulty: parsedResponse.difficulty,
                    chainWork: parsedResponse.chainWork,
                    previousBlockHash: parsedResponse.previousBlockHash,
                    nextBlockHash: parsedResponse.nextBlockHash
                };
            });
    }

    static getBlockHeadersByHeight(height, count) {
        return API.requestAPI(`${API_URL}/block-headers/${height}/${count}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(blockHeader => {
                    return {
                        hash: blockHeader.hash,
                        confirmations: blockHeader.confirmations,
                        height: blockHeader.height,
                        version: blockHeader.version,
                        versionHex: blockHeader.versionHex,
                        merkleRoot: blockHeader.merkleRoot,
                        time: blockHeader.time,
                        medianTime: blockHeader.medianTime,
                        nonce: blockHeader.nonce,
                        bits: blockHeader.bits,
                        difficulty: blockHeader.difficulty,
                        chainWork: blockHeader.chainWork,
                        previousBlockHash: blockHeader.previousBlockHash,
                        nextBlockHash: blockHeader.nextBlockHash
                    };
                });
            });
    }

    static getBlockHeadersByHash(hash, count) {
        return API.requestAPI(`${API_URL}/block-headers/${hash}/${count}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(blockHeader => {
                    return {
                        hash: blockHeader.hash,
                        confirmations: blockHeader.confirmations,
                        height: blockHeader.height,
                        version: blockHeader.version,
                        versionHex: blockHeader.versionHex,
                        merkleRoot: blockHeader.merkleRoot,
                        time: blockHeader.time,
                        medianTime: blockHeader.medianTime,
                        nonce: blockHeader.nonce,
                        bits: blockHeader.bits,
                        difficulty: blockHeader.difficulty,
                        chainWork: blockHeader.chainWork,
                        previousBlockHash: blockHeader.previousBlockHash,
                        nextBlockHash: blockHeader.nextBlockHash
                    };
                });
            });
    }

    static getTransaction(transactionId) {
        return API.requestAPI(`${API_URL}/transaction/${transactionId}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    txid: parsedResponse.txid,
                    version: parsedResponse.version,
                    lockTime: parsedResponse.lockTime,
                    size: parsedResponse.size,
                    vin: parsedResponse.vin,
                    vout: parsedResponse.vout,
                    blockHash: parsedResponse.blockHash,
                    blockHeight: parsedResponse.blockHeight,
                    confirmations: parsedResponse.confirmations,
                    time: parsedResponse.time,
                    blockTime: parsedResponse.blockTime
                };
            });
    }

    static getTransactionsByBlockHeight(height) {
        return API.requestAPI(`${API_URL}/transactions/${height}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(transaction => {
                    return {
                        txid: transaction.txid,
                        version: transaction.version,
                        lockTime: transaction.lockTime,
                        size: transaction.size,
                        vin: transaction.vin,
                        vout: transaction.vout,
                        blockHash: transaction.blockHash,
                        blockHeight: transaction.blockHeight,
                        confirmations: transaction.confirmations,
                        time: transaction.time,
                        blockTime: transaction.blockTime
                    };
                });
            });
    }

    static getTransactionsByBlockHash(hash) {
        return API.requestAPI(`${API_URL}/transactions/${hash}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(transaction => {
                    return {
                        txid: transaction.txid,
                        version: transaction.version,
                        lockTime: transaction.lockTime,
                        size: transaction.size,
                        vin: transaction.vin,
                        vout: transaction.vout,
                        blockHash: transaction.blockHash,
                        blockHeight: transaction.blockHeight,
                        confirmations: transaction.confirmations,
                        time: transaction.time,
                        blockTime: transaction.blockTime
                    };
                });
            });
    }

    static getTransactionsByAddress(address) {
        return API.requestAPI(`${API_URL}/transactions/address/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(transaction => {
                    return {
                        txid: transaction.txid,
                        version: transaction.version,
                        lockTime: transaction.lockTime,
                        size: transaction.size,
                        vin: transaction.vin,
                        vout: transaction.vout,
                        blockHash: transaction.blockHash,
                        blockHeight: transaction.blockHeight,
                        confirmations: transaction.confirmations,
                        time: transaction.time,
                        blockTime: transaction.blockTime
                    };
                });
            });
    }

    static getTransactionsByBlockHeightAndAddress(height, address) {
        return API.requestAPI(`${API_URL}/transactions/${height}/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(transaction => {
                    return {
                        txid: transaction.txid,
                        version: transaction.version,
                        lockTime: transaction.lockTime,
                        size: transaction.size,
                        vin: transaction.vin,
                        vout: transaction.vout,
                        blockHash: transaction.blockHash,
                        blockHeight: transaction.blockHeight,
                        confirmations: transaction.confirmations,
                        time: transaction.time,
                        blockTime: transaction.blockTime
                    };
                });
            });
    }

    static getTransactionsByBlockHashAndAddress(hash, address) {
        return API.requestAPI(`${API_URL}/transactions/${hash}/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(transaction => {
                    return {
                        txid: transaction.txid,
                        version: transaction.version,
                        lockTime: transaction.lockTime,
                        size: transaction.size,
                        vin: transaction.vin,
                        vout: transaction.vout,
                        blockHash: transaction.blockHash,
                        blockHeight: transaction.blockHeight,
                        confirmations: transaction.confirmations,
                        time: transaction.time,
                        blockTime: transaction.blockTime
                    };
                });
            });
    }

    static getUnspentOutputsByAddress(address) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentOutput => {
                    return {
                        txid: unspentOutput.txid,
                        vout: unspentOutput.vout,
                        address: unspentOutput.address,
                        scriptPubKey: unspentOutput.scriptPubKey,
                        amount: unspentOutput.amount,
                        confirmations: unspentOutput.confirmations
                    };
                });
            });
    }

    static getUnspentOutputsByTransactionId(transactionId) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${transactionId}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentOutput => {
                    return {
                        txid: unspentOutput.txid,
                        vout: unspentOutput.vout,
                        address: unspentOutput.address,
                        scriptPubKey: unspentOutput.scriptPubKey,
                        amount: unspentOutput.amount,
                        confirmations: unspentOutput.confirmations
                    };
                });
            });
    }

    static getUnspentOutputsByTransactionIdAndVout(transactionId, vout) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${transactionId}/${vout}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    txid: parsedResponse.txid,
                    vout: parsedResponse.vout,
                    address: parsedResponse.address,
                    scriptPubKey: parsedResponse.scriptPubKey,
                    amount: parsedResponse.amount,
                    confirmations: parsedResponse.confirmations
                };
            });
    }

    static getUnspentOutputsByTransactionIdAndVoutAndAddress(transactionId, vout, address) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${transactionId}/${vout}/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return {
                    txid: parsedResponse.txid,
                    vout: parsedResponse.vout,
                    address: parsedResponse.address,
                    scriptPubKey: parsedResponse.scriptPubKey,
                    amount: parsedResponse.amount,
                    confirmations: parsedResponse.confirmations
                };
            });
    }

    static getUnspentOutputsByTransactionIdAndAddress(transactionId, address) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${transactionId}/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentOutput => {
                    return {
                        txid: unspentOutput.txid,
                        vout: unspentOutput.vout,
                        address: unspentOutput.address,
                        scriptPubKey: unspentOutput.scriptPubKey,
                        amount: unspentOutput.amount,
                        confirmations: unspentOutput.confirmations
                    };
                });
            });
    }

    static getUnspentOutputsByBlockHeightAndAddress(height, address) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${height}/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentOutput => {
                    return {
                        txid: unspentOutput.txid,
                        vout: unspentOutput.vout,
                        address: unspentOutput.address,
                        scriptPubKey: unspentOutput.scriptPubKey,
                        amount: unspentOutput.amount,
                        confirmations: unspentOutput.confirmations
                    };
                });
            });
    }

    static getUnspentOutputsByBlockHashAndAddress(hash, address) {
        return API.requestAPI(`${API_URL}/unspent-outputs/${hash}/${address}`)
            .then(response => {
                const parsedResponse = JSON.parse(response);
                return parsedResponse.map(unspentOutput => {
                    return {
                        txid: unspentOutput.txid,
                        vout: unspentOutput.vout,
                        address: unspentOutput.address,
                        scriptPubKey: unspentOutput.scriptPubKey,
                        amount: unspentOutput.amount,
                        confirmations: unspentOutput.confirmations
                    };
                });
            });
    }


}
