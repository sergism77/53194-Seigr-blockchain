const createMerkleParentNodeHashesArrayBinary = (merkleLeafHashesArrayBinary) => {
    //create the merkle parent node hashes array binary
    let merkleParentNodeHashesArrayBinary = [];
    //create the merkle parent node hashes array from the merkle leaf hashes array
    for (let i = 0; i < merkleLeafHashesArrayBinary.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesArrayBinary[i] + merkleLeafHashesArrayBinary[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes array
        merkleParentNodeHashesArrayBinary.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes array
    return merkleParentNodeHashesArrayBinary;
}

module.exports = createMerkleParentNodeHashesArrayBinary;