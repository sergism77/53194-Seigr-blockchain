'use strict';

const createMerkleChildNodeHashesArrayString = (merkleNodeHashesArrayString, merkleLeafHashesArrayString) => {
    //create the merkle child node hashes array string
    let merkleChildNodeHashesArrayString = "";
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesArrayString.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesArrayString[i] + merkleNodeHashesArrayString[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayString.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesArrayString.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesArrayString[i] + merkleLeafHashesArrayString[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayString.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes array
    return merkleChildNodeHashesArrayString;
}

module.exports = createMerkleChildNodeHashesArrayString;