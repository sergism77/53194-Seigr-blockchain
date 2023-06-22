'use strict';

const createMerkleChildNodeHashesArrayHex = (merkleNodeHashesArrayHex, merkleLeafHashesArrayHex) => {
    //create the merkle child node hashes array
    let merkleChildNodeHashesArrayHex = [];
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesArrayHex.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesArrayHex[i] + merkleNodeHashesArrayHex[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayHex.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesArrayHex.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesArrayHex[i] + merkleLeafHashesArrayHex[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArrayHex.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes array
    return merkleChildNodeHashesArrayHex;
}

module.exports = createMerkleChildNodeHashesArrayHex;