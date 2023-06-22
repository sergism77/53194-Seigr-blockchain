'use strict';

const createMerkleParentNodeHashesArrayHex = (merkleLeafHashesArrayHex) => {
    //create the merkle parent node hashes array hex
    let merkleParentNodeHashesArrayHex = [];
    //create the merkle parent node hashes array from the merkle leaf hashes array
    for (let i = 0; i < merkleLeafHashesArrayHex.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesArrayHex[i] + merkleLeafHashesArrayHex[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes array
        merkleParentNodeHashesArrayHex.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes array
    return merkleParentNodeHashesArrayHex;
}

module.exports = createMerkleParentNodeHashesArrayHex;