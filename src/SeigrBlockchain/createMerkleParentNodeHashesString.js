const createMerkleParentNodeHashesString = (merkleLeafHashesString) => {
    //create the merkle parent node hashes string
    let merkleParentNodeHashesString = "";
    //create the merkle parent node hashes from the merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesString.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesString[i] + merkleLeafHashesString[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes
        merkleParentNodeHashesString += merkleParentNodeHash;
    }
    //return the merkle parent node hashes
    return merkleParentNodeHashesString;
}

module.exports = createMerkleParentNodeHashesString;