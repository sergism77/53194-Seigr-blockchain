const createMerkleParentNodeHashesArray = (merkleLeafHashesArray) => {
    //create the merkle parent node hashes array
    let merkleParentNodeHashesArray = [];
    //create the merkle parent node hashes array from the merkle leaf hashes array
    for (let i = 0; i < merkleLeafHashesArray.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesArray[i] + merkleLeafHashesArray[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes array
        merkleParentNodeHashesArray.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes array
    return merkleParentNodeHashesArray;
}

module.exports = createMerkleParentNodeHashesArray;