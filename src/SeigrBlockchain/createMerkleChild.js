'use strict';

const createMerkleChild = (merkleNode, merkleLeaf) => {
    //create the merkle child
    let merkleChild = {};
    //create the merkle child from the merkle node and merkle leaf
    merkleChild = {
        left: merkleNode,
        right: merkleLeaf,
        hash: merkleNode.hash + merkleLeaf.hash
    };
    //return the merkle child
    return merkleChild;
}

module.exports = createMerkleChild;