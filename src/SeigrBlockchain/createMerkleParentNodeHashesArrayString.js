const createMerkleParentNodeHashesArrayString = (merkleLeafHashesArrayString) => {
    //create the merkle parent node hashes array string
    let merkleParentNodeHashesArrayString = "";
    //create the merkle parent node hashes array from the merkle leaf hashes array
    for (let i = 0; i < merkleLeafHashesArrayString.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesArrayString[i] + merkleLeafHashesArrayString[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes array
        merkleParentNodeHashesArrayString.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes array
    return merkleParentNodeHashesArrayString;
}

module.exports = createMerkleParentNodeHashesArrayString;