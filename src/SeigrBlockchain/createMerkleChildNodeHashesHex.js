'use strict';

const createMerkleChildNodeHashesHex = (merkleNodeHashesHex, merkleLeafHashesHex) => {
    //create the merkle child node hashes hex
    let merkleChildNodeHashesHex = "";
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashesHex.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashesHex[i] + merkleNodeHashesHex[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesHex += merkleChildNodeHash;
    }
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashesHex.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashesHex[i] + merkleLeafHashesHex[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashesHex += merkleChildNodeHash;
    }
    //return the merkle child node hashes
    return merkleChildNodeHashesHex;
}

module.exports = createMerkleChildNodeHashesHex;