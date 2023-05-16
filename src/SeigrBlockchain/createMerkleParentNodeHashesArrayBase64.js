const createMerkleParentNodeHashesArrayBase64 = (merkleLeafHashesArrayBase64) => {
    //create the merkle parent node hashes array
    let merkleParentNodeHashesArrayBase64 = [];
    //create the merkle parent node hashes array from the merkle leaf hashes array
    for (let i = 0; i < merkleLeafHashesArrayBase64.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesArrayBase64[i] + merkleLeafHashesArrayBase64[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes array
        merkleParentNodeHashesArrayBase64.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes array
    return merkleParentNodeHashesArrayBase64;
}

module.exports = createMerkleParentNodeHashesArrayBase64;