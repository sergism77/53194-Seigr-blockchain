const createMerkleParentNodeHashesBinary = (merkleLeafHashesBinary) => {
    //create the merkle parent node hashes binary
    let merkleParentNodeHashesBinary = [];
    //create the merkle parent node hashes from the merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesBinary.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesBinary[i] + merkleLeafHashesBinary[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes
        merkleParentNodeHashesBinary.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes
    return merkleParentNodeHashesBinary;
}

module.exports = createMerkleParentNodeHashesBinary;