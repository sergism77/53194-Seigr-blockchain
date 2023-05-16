const createMerkleParentNodeHashBuffer = (merkleLeafHashBuffer1, merkleLeafHashBuffer2) => {
    //create the merkle parent node hash buffer
    let merkleParentNodeHashBuffer = new ArrayBuffer(0);
    //create the merkle parent node hash buffer from the two merkle leaf hashes
    merkleParentNodeHashBuffer = concatArrayBuffers(merkleLeafHashBuffer1, merkleLeafHashBuffer2);
    //return the merkle parent node hash buffer
    return merkleParentNodeHashBuffer;
}

module.exports = createMerkleParentNodeHashBuffer;