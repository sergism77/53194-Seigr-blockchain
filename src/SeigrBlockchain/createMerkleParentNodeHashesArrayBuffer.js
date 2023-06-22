'use strict';

const createMerkleParentNodeHashesArrayBuffer = (merkleLeafHashesArrayBuffer) => {
    //create the merkle parent node hashes array buffer
    let merkleParentNodeHashesArrayBuffer = new ArrayBuffer(0);
    //create the merkle parent node hashes array from the merkle leaf hashes array
    for (let i = 0; i < merkleLeafHashesArrayBuffer.length; i += 2) {
        //create the merkle parent node hash buffer
        let merkleParentNodeHashBuffer = new ArrayBuffer(0);
        //create the merkle parent node hash from the two merkle leaf hashes
        merkleParentNodeHashBuffer = concatArrayBuffers(merkleLeafHashesArrayBuffer[i], merkleLeafHashesArrayBuffer[i + 1]);
        //add the merkle parent node hash to the merkle parent node hashes array
        merkleParentNodeHashesArrayBuffer.push(merkleParentNodeHashBuffer);
    }
    //return the merkle parent node hashes array
    return merkleParentNodeHashesArrayBuffer;
}

module.exports = createMerkleParentNodeHashesArrayBuffer;