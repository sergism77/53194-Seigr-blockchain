const createMerkleChildNodeHashesString = (merkleNodeHashesString, merkleLeafHashesString) => {
    //create the merkle child node hashes string
    let merkleChildNodeHashesString = "";
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesString.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesString[i] + merkleNodeHashesString[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesString += merkleChildNodeHash;
    }
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesString.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesString[i] + merkleLeafHashesString[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesString += merkleChildNodeHash;
    }
    //return the merkle child node hashes
    return merkleChildNodeHashesString;
}

module.exports = createMerkleChildNodeHashesString;