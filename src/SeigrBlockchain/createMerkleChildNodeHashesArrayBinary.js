const createMerkleChildNodeHashesArrayBinary = (merkleNodeHashesArrayBinary, merkleLeafHashesArrayBinary) => {
    //create the merkle child node hashes array
    let merkleChildNodeHashesArrayBinary = [];
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesArrayBinary.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesArrayBinary[i] + merkleNodeHashesArrayBinary[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayBinary.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesArrayBinary.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesArrayBinary[i] + merkleLeafHashesArrayBinary[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayBinary.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes array
    return merkleChildNodeHashesArrayBinary;
}

module.exports = createMerkleChildNodeHashesArrayBinary;