const createMerkleRoot = (merkleTree) => {
    //create the merkle root
    let merkleRoot = merkleTree.hash;
    //return the merkle root
    return merkleRoot;
}

module.exports = createMerkleRoot;