const createMerkleChildNodeHashBuffer = (merkleNodeHashBuffer1, merkleNodeHashBuffer2) => {
    //create the merkle child node hash buffer
    let merkleChildNodeHashBuffer = Buffer.alloc(0);
    //create the merkle child node hash buffer from the two merkle node hashes
    merkleChildNodeHashBuffer = Buffer.concat([merkleNodeHashBuffer1, merkleNodeHashBuffer2]);
    //return the merkle child node hash buffer
    return merkleChildNodeHashBuffer;
}

module.exports = createMerkleChildNodeHashBuffer;