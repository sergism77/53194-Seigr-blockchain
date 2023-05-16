const createMerkleChildNodeHashesArrayBase64 = (merkleNodeHashesArrayBase64, merkleLeafHashesArrayBase64) => {
    //create the merkle child node hashes array
    let merkleChildNodeHashesArrayBase64 = [];
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesArrayBase64.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesArrayBase64[i] + merkleNodeHashesArrayBase64[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayBase64.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesArrayBase64.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesArrayBase64[i] + merkleLeafHashesArrayBase64[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayBase64.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes array
    return merkleChildNodeHashesArrayBase64;
}

module.exports = createMerkleChildNodeHashesArrayBase64;