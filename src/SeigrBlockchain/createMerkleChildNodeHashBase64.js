const createMerkleChildNodeHashBase64 = (merkleNodeHashBase64_1, merkleNodeHashBase64_2) => {
    //create the merkle child node hash
    let merkleChildNodeHashBase64 = "";
    //create the merkle child node hash from the two merkle node hashes
    merkleChildNodeHashBase64 = merkleNodeHashBase64_1 + merkleNodeHashBase64_2;
    //return the merkle child node hash
    return merkleChildNodeHashBase64;
}

module.exports = createMerkleChildNodeHashBase64;