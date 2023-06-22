'use strict';

const createMerkleChildNodeHashesArray = (merkleNodeHashes, merkleLeafHashes) => {
    //create the merkle child node hashes array
    let merkleChildNodeHashesArray = [];
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashes.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashes[i] + merkleNodeHashes[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArray.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes array from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashes.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashes[i] + merkleLeafHashes[i + 1];
        //add the merkle child node hash to the merkle child node hashes array
        merkleChildNodeHashesArray.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes array
    return merkleChildNodeHashesArray;
}

module.exports = createMerkleChildNodeHashesArray;