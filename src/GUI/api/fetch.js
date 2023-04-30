
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

function fetchWallets () {
    return fetch(`/api/wallets`)
        .then(res => res.json())
        .then(wallets => {
        return wallets
        })

}

function fetchWalletsByAddress (address) {
    return fetch(`/api/walletsByAddress/${address}`)
        .then(res => res.json())    
        .then(wallets => {
        return wallets
        })

}

function fetchWalletsByAddressAndToken (address, token) {
    return fetch(`/api/walletsByAddressAndToken/${address}/${token}`)
        .then(res => res.json())
        .then(wallets => {
        return wallets
        })

}


module.exports = { fetchBlock, fetchBlocks, fetchBlocksByAddress, fetchBlocksByTransaction, fetchBlocksByAddressAndTransaction, fetchBlocksByAddressAndTransactionAndBlock, fetchBlocksByAddressAndTransactionAndBlockAndTransaction, fetchBlocksByAddressAndTransactionAndBlockAndTransactionAndAddress, fetchBlocksByAddressAndTransactionAndBlockAndTransactionAndAddressAndToken, fetchBlocksByAddressAndTransactionAndBlockAndTransactionAndAddressAndTokenAndToken, fetchWallets, fetchWalletsByAddress, fetchWalletsByAddressAndToken, fetchToken, fetchTokens, fetchTokensByAddress, fetchTokensByAddressAndToken, fetchTokensByAddressAndTokenAndBlock, fetchTokensByAddressAndTokenAndTransaction, fetchTokensByAddressAndTokenAndBlockAndTransaction, fetchTokensByAddressAndTokenAndBlockAndTransactionAndAddress, fetchTokensByAddressAndTokenAndBlockAndTransactionAndAddressAndToken, fetchTransaction, fetchTransactions, fetchTransactionsByBlock, fetchTransactionsByAddress, fetchTransactionsByBlockAndAddress, fetchTransactionsByBlockAndTransaction, fetchTransactionsByBlockAndTransactionAndAddress, fetchTransactionsByBlockAndAddressAndTransaction, fetchTransactionsByAddressAndTransaction, fetchTransactionsByAddressAndTransactionAndBlock, fetchTransactionsByAddressAndTransactionAndBlockAndTransaction, fetchTransactionsByAddressAndTransactionAndBlockAndTransactionAndAddress, fetchTransactionsByAddressAndTransactionAndBlockAndTransactionAndAddressAndToken, fetchTransactionReceipt, fetchTransactionReceipts, fetchTransactionReceiptsByBlock, fetchTransactionReceiptsByTransaction, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress, fetchTransactionReceiptsByBlockAndAddress, fetchTransactionReceiptsByTransactionAndAddress, fetchTransactionReceiptsByBlockAndTransaction, fetchTransactionReceiptsByBlockAndTransactionAndAddress }

