const createMerkleParentNodeHashBase64 = (merkleLeafHashBase64_1, merkleLeafHashBase64_2) => {
    //create the merkle parent node hash
    let merkleParentNodeHashBase64 = "";
    //create the merkle parent node hash from the two merkle leaf hashes
    merkleParentNodeHashBase64 = merkleLeafHashBase64_1 + merkleLeafHashBase64_2;
    //return the merkle parent node hash
    return merkleParentNodeHashBase64;
}

module.exports = createMerkleParentNodeHashBase64;