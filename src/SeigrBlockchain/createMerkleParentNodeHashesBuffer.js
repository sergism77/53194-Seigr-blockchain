const createMerkleParentNodeHashesBuffer = (merkleLeafHashesBuffer) => {
    //create the merkle parent node hashes buffer
    let merkleParentNodeHashesBuffer = new ArrayBuffer(0);
    //create the merkle parent node hashes buffer from the merkle leaf hashes buffer
    for (let i = 0; i < merkleLeafHashesBuffer.length; i += 2) {
        //create the merkle parent node hash buffer
        let merkleParentNodeHashBuffer = new ArrayBuffer(0);
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHashBuffer = concatArrayBuffers(merkleLeafHashesBuffer[i], merkleLeafHashesBuffer[i + 1]);
        //add the merkle parent node hash to the merkle parent node hashes buffer
        merkleParentNodeHashesBuffer.push(merkleParentNodeHashBuffer);
    }
    //return the merkle parent node hashes buffer
    return merkleParentNodeHashesBuffer;
}

module.exports = createMerkleParentNodeHashesBuffer;