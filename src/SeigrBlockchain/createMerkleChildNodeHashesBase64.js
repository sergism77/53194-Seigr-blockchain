'use strict';

const createMerkleChildNodeHashesBase64 = (merkleNodeHashesBase64, merkleLeafHashesBase64) => {
    //create the merkle child node hashes base64
    let merkleChildNodeHashesBase64 = "";
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesBase64.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesBase64[i] + merkleNodeHashesBase64[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesBase64 += merkleChildNodeHash;
    }
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesBase64.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesBase64[i] + merkleLeafHashesBase64[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesBase64 += merkleChildNodeHash;
    }
    //return the merkle child node hashes
    return merkleChildNodeHashesBase64;
}

module.exports = createMerkleChildNodeHashesBase64;