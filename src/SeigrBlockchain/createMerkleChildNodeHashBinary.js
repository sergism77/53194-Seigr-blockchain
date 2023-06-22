'use strict';

const createMerkleChildNodeHashBinary = (merkleNodeHash1, merkleNodeHash2) => {
    //create the merkle child node hash
    let merkleChildNodeHash = "";
    //create the merkle child node hash from the two merkle node hashes
    merkleChildNodeHash = merkleNodeHash1 + merkleNodeHash2;
    //return the merkle child node hash
    return merkleChildNodeHash;
}

module.exports = createMerkleChildNodeHashBinary;