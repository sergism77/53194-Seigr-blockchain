'use strict';

const createMerkleChildNodeHash = (merkleNode, merkleLeaf) => {
    //create the merkle child node hash
    let merkleChildNodeHash = "";
    //create the merkle child node hash from the merkle node and merkle leaf
    merkleChildNodeHash = merkleNode.hash + merkleLeaf.hash;
    //return the merkle child node hash
    return merkleChildNodeHash;
}

module.exports = createMerkleChildNodeHash;