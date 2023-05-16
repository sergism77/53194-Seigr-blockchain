const createMerkleParentNodeHash = (merkleLeafHash1, merkleLeafHash2) => {
    //create the merkle parent node hash
    let merkleParentNodeHash = "";
    //create the merkle parent node hash from the two merkle leaf hashes
    merkleParentNodeHash = merkleLeafHash1 + merkleLeafHash2;
    //return the merkle parent node hash
    return merkleParentNodeHash;
}

module.exports = createMerkleParentNodeHash;