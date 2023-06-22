'use strict';

const createMerkleTree = (transactions) => {
    //create an array of merkle nodes
    let merkleNodes = transactions.map((transaction) => {
        //create a merkle node from each transaction
        return createMerkleNode(transaction);
    });
    //create a merkle tree from the merkle nodes
    let merkleTree = createMerkleParentNode(merkleNodes);
    //return the merkle tree
    return merkleTree;
}

module.exports = createMerkleTree;