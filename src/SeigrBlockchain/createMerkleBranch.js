'use strict';

const createMerkleBranch = (merkleTree, transactionHash) => {
    //create the merkle branch
    let merkleBranch = [];
    //create the merkle path
    let merklePath = createMerklePath(merkleTree, transactionHash);
    //create the merkle branch from the merkle path
    merkleBranch = merklePath.map((merkleNode) => {
        //create the merkle branch from the merkle path
        return createMerkleBranch(merkleNode);
    });
    //return the merkle branch
    return merkleBranch;
}

module.exports = createMerkleBranch;