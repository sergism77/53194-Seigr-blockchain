'use strict';

const createMerkleChildNodeHashString = (merkleNodeHashString1, merkleNodeHashString2) => {
    //create the merkle child node hash string
    let merkleChildNodeHashString = "";
    //create the merkle child node hash string from the two merkle node hashes
    merkleChildNodeHashString = merkleNodeHashString1 + merkleNodeHashString2;
    //return the merkle child node hash string
    return merkleChildNodeHashString;
}

module.exports = createMerkleChildNodeHashString;