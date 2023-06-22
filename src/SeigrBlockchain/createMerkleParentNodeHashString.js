'use strict';

const createMerkleParentNodeHashString = (merkleLeafHashString1, merkleLeafHashString2) => {
    //create the merkle parent node hash string
    let merkleParentNodeHashString = "";
    //create the merkle parent node hash string from the two merkle leaf hashes
    merkleParentNodeHashString = merkleLeafHashString1 + merkleLeafHashString2;
    //return the merkle parent node hash string
    return merkleParentNodeHashString;
}

module.exports = createMerkleParentNodeHashString;