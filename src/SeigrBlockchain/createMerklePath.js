'use strict';

const createMerklePath = (merkleTree, transactionHash) => {
    //create the merkle path
    let merklePath = [];
    //create the merkle proof
    let merkleProof = createMerkleProof(merkleTree, transactionHash);
    //create the merkle path from the merkle proof
    merklePath = merkleProof.map((merkleNode) => {
        //create the merkle path from the merkle proof
        return createMerklePath(merkleNode);
    });
    //return the merkle path
    return merklePath;
}

module.exports = createMerklePath;