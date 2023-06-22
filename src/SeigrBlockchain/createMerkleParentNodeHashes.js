'use strict';

const createMerkleParentNodeHashes = (merkleLeafHashes) => {
    //create the merkle parent node hashes
    let merkleParentNodeHashes = [];
    //create the merkle parent node hashes from the merkle leaf hashes
    for (let i = 0; i < merkleLeafHashes.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashes[i] + merkleLeafHashes[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes
        merkleParentNodeHashes.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes
    return merkleParentNodeHashes;
}

module.exports = createMerkleParentNodeHashes;