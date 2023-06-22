'use strict';

const createMerkleParentNodeFromTwoMerkleNodes = (merkleNode1, merkleNode2) => {
    //create the merkle parent node
    let merkleParentNode = {};
    //create the merkle parent node from the two merkle nodes
    merkleParentNode = {
        left: merkleNode1,
        right: merkleNode2,
        hash: merkleNode1.hash + merkleNode2.hash
    };
    //return the merkle parent node
    return merkleParentNode;
}

module.exports = createMerkleParentNodeFromTwoMerkleNodes;