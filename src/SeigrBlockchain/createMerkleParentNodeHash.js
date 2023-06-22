'use strict';

const createMerkleParentNodeHash = (merkleNode1, merkleNode2) => {
    //create the merkle parent node hash
    let merkleParentNodeHash = "";
    //create the merkle parent node hash from the two merkle nodes
    merkleParentNodeHash = merkleNode1.hash + merkleNode2.hash;
    //return the merkle parent node hash
    return merkleParentNodeHash;
}

module.exports = createMerkleParentNodeHash;