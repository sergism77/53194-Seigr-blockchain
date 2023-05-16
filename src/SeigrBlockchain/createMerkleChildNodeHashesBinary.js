const createMerkleChildNodeHashesBinary = (merkleNodeHashesBinary, merkleLeafHashesBinary) => {
    //create the merkle child node hashes binary
    let merkleChildNodeHashesBinary = [];
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesBinary.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesBinary[i] + merkleNodeHashesBinary[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesBinary.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesBinary.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesBinary[i] + merkleLeafHashesBinary[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesBinary.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes
    return merkleChildNodeHashesBinary;
}

module.exports = createMerkleChildNodeHashesBinary;