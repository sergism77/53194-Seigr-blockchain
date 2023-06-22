'use strict';

const createMerkleChildNodeHashes = (merkleNodeHashes, merkleLeafHashes) => {
    //create the merkle child node hashes
    let merkleChildNodeHashes = [];
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleNodeHashes.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle node hashes
        merkleChildNodeHash = merkleNodeHashes[i] + merkleNodeHashes[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashes.push(merkleChildNodeHash);
    }
    //create the merkle child node hashes from the merkle node hashes and merkle leaf hashes
    for (let i = 0; i < merkleLeafHashes.length; i += 2) {
        //create the merkle child node hash
        let merkleChildNodeHash = "";
        //create the merkle child node hash from the two merkle leaf hashes
        merkleChildNodeHash = merkleLeafHashes[i] + merkleLeafHashes[i + 1];
        //add the merkle child node hash to the merkle child node hashes
        merkleChildNodeHashes.push(merkleChildNodeHash);
    }
    //return the merkle child node hashes
    return merkleChildNodeHashes;
}

module.exports = createMerkleChildNodeHashes;