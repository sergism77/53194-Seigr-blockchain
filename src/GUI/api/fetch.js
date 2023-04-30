
function fetchBlock (blockNumber) {
  return fetch(`/api/block/${blockNumber}`)
    .then(res => res.json())
    .then(block => {
      return block
    })
}

function fetchBlocks () {
    return fetch('/api/blocks')
        .then(res => res.json())
        .then(blocks => {
        return blocks
        })
}

function fetchTransaction (transactionHash) {
    return fetch(`/api/transaction/${transactionHash}`)
        .then(res => res.json())
        .then(transaction => {
        return transaction
        })
}

function fetchTransactions () {
    return fetch('/api/transactions')
        .then(res => res.json())
        .then(transactions => {
        return transactions
        })
}

function fetchTransactionReceipt (transactionHash) {
    return fetch(`/api/transactionReceipt/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipt => {
        return transactionReceipt
        })
}

function fetchTransactionReceipts () {
    return fetch('/api/transactionReceipts')
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlock (blockNumber) {
    return fetch(`/api/transactionReceiptsByBlock/${blockNumber}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransaction (transactionHash) {
    return fetch(`/api/transactionReceiptsByTransaction/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByAddress (address) {
    return fetch(`/api/transactionReceiptsByAddress/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndAddress (blockNumber, address) {
    return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransactionAndAddress (transactionHash, address) {
    return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransaction (blockNumber, transactionHash) {
    return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransactionAndAddress (blockNumber, transactionHash, address) {
    return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndAddress (blockNumber, address) {
    return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransactionAndAddress (transactionHash, address) {
    return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransaction (blockNumber, transactionHash) {
    return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransactionAndAddress (blockNumber, transactionHash, address) {
    return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndAddress (blockNumber, address) {
    return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransactionAndAddress (transactionHash, address) {
    return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransaction (blockNumber, transactionHash) {
    return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransactionAndAddress (blockNumber, transactionHash, address) {
    return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndAddress (blockNumber, address) {
    return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransactionAndAddress (transactionHash, address) {
    return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransaction (blockNumber, transactionHash) {
    return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransactionAndAddress (blockNumber, transactionHash, address) {
    return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndAddress (blockNumber, address) {
    return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransactionAndAddress (transactionHash, address) {
    return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransaction (blockNumber, transactionHash) {
    return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransactionAndAddress (blockNumber, transactionHash, address) {
    return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndAddress (blockNumber, address) {
    return fetch(`/api/transactionReceiptsByBlockAndAddress/${blockNumber}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByTransactionAndAddress (transactionHash, address) {
    return fetch(`/api/transactionReceiptsByTransactionAndAddress/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransaction (blockNumber, transactionHash) {
    return fetch(`/api/transactionReceiptsByBlockAndTransaction/${blockNumber}/${transactionHash}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}

function fetchTransactionReceiptsByBlockAndTransactionAndAddress (blockNumber, transactionHash, address) {
    return fetch(`/api/transactionReceiptsByBlockAndTransactionAndAddress/${blockNumber}/${transactionHash}/${address}`)
        .then(res => res.json())
        .then(transactionReceipts => {
        return transactionReceipts
        })
}


//12. tokenHolders.js
//13. tokenTransfersByAddress.js
//14. tokenBalancesByAddress.js
//15. tokenHoldersByAddress.js
//16. tokenTransfersByToken.js
//17. tokenBalancesByToken.js
//18. tokenHoldersByToken.js
//19. tokenTransfersByAddressAndToken.js
//20. tokenBalancesByAddressAndToken.js
//21. tokenHoldersByAddressAndToken.js
//22. tokenTransfersByAddressAndTokenAndBlock.js
//23. tokenBalancesByAddressAndTokenAndBlock.js
//24. tokenHoldersByAddressAndTokenAndBlock.js
//25. tokenTransfersByAddressAndTokenAndTransaction.js
//26. tokenBalancesByAddressAndTokenAndTransaction.js
//27. tokenHoldersByAddressAndTokenAndTransaction.js
//28. tokenTransfersByAddressAndTokenAndBlockAndTransaction.js
//29. tokenBalancesByAddressAndTokenAndBlockAndTransaction.js
//30. tokenHoldersByAddressAndTokenAndBlockAndTransaction.js
//31. tokenTransfersByAddressAndTokenAndBlockAndTransactionAndAddress.js
//32. tokenBalancesByAddressAndTokenAndBlockAndTransactionAndAddress.js