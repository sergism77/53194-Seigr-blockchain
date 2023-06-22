'use strict';

const createMerkleParentNodeHashesHex = (merkleLeafHashesHex) => {
    //create the merkle parent node hashes hex
    let merkleParentNodeHashesHex = [];
    //create the merkle parent node hashes from the merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesHex.length; i += 2) {
        //create the merkle parent node hash
        let merkleParentNodeHash = "";
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHash = merkleLeafHashesHex[i] + merkleLeafHashesHex[i + 1];
        //add the merkle parent node hash to the merkle parent node hashes
        merkleParentNodeHashesHex.push(merkleParentNodeHash);
    }
    //return the merkle parent node hashes
    return merkleParentNodeHashesHex;
}

module.exports = createMerkleParentNodeHashesHex;