const createMerkleProof = (transaction, merkleTree, merkleRoot) => {
    //create the merkle path for the transaction
    let merklePath = createMerklePath(transaction, merkleTree);
    //create the merkle proof for the transaction
    let merkleProof = createMerkleProof(merklePath, merkleRoot);
    //return the merkle proof for the transaction
    return merkleProof;
}

module.exports = createMerkleProof;